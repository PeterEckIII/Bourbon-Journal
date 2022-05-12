import { Link, Form, useActionData, useOutletContext } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/server-runtime";
import {
  unstable_parseMultipartFormData,
  UploadHandler,
} from "@remix-run/node";
import { v4 as uuid } from "uuid";
import { uploadImage } from "~/utils/cloudinary.server";
import { getUser } from "~/session.server";
import { ContextType } from "../new";
import { ChangeEvent, useEffect, useState } from "react";
import CheckIcon from "~/components/Icons/CheckIcon";
import PrimaryButton from "~/components/Form/PrimaryButton";

type ActionData = {
  errorMessage?: string;
  imageSrc?: string;
  imageDesc?: string;
  publicId?: string;
};

export const action: ActionFunction = async ({ request }) => {
  // Get user
  const user = await getUser(request);
  if (!user?.id) {
    console.log(`ERROR: Must have a user session`);
    return redirect(`/login`);
  }

  const imageId = uuid();

  // Create UploadHandler
  const uploadHandler: UploadHandler = async ({ name, stream }) => {
    if (name !== "img") {
      stream.resume();
    }
    // Upload image and return URL
    const uploadedImage = (await uploadImage(stream, user?.id, imageId)) as any;
    return uploadedImage.secure_url;
  };

  // Parse Form
  const form = await unstable_parseMultipartFormData(request, uploadHandler);

  const imageSrc = form.get("img")?.toString();
  const imageDesc = form.get("imageDesc")?.toString();
  if (!imageSrc) {
    return json<ActionData>({ errorMessage: `Cloudinary upload failed` });
  }
  console.log(
    `SERVER:\nimage source: ${imageSrc}\nimage description: ${imageDesc}`
  );
  // Return image URL and imageDesc
  return json<ActionData>({ imageSrc, imageDesc, publicId: imageId });
};

export default function NewAddImageRoute() {
  const data = useActionData<ActionData>();
  const { state, setFormState } = useOutletContext<ContextType>();
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);

  if (setFormState === undefined) {
    throw new Error(`Error, please return to the bottle info page`);
  }

  useEffect(() => {
    setFormState({
      ...state,
      imageId: data?.publicId ? data?.publicId : "",
    });
    if (data?.imageSrc) {
      setConfirmed(true);
    }
  }, [data?.publicId, setFormState]);

  const handlePreviewImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) throw new Error(`Error reading files from import`);
    if (files && files[0] !== undefined) {
      const newUrl = URL.createObjectURL(files[0]);
      setPreviewUrl(newUrl);
    } else {
      return setPreviewUrl("");
    }
  };

  return (
    <div className="m-2 p-2">
      <Form method="post" encType="multipart/form-data">
        <div>
          <label htmlFor="img" className="flex w-full flex-col gap-1">
            <span>Image to upload: </span>
            <input
              type="file"
              name="img"
              className="my-2 flex-1 px-3 text-lg leading-loose text-slate-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              id="img"
              data-cy="file-input"
              onChange={(e) => handlePreviewImage(e)}
              accept="image/*"
            />
          </label>
        </div>
        <div>
          <label htmlFor="imgDesc" className="flex w-full flex-col gap-1">
            <span>Image description: </span>
            <input
              type="text"
              name="imgDesc"
              className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
              id="img-desc"
            />
          </label>
        </div>
        {previewUrl !== "" && confirmed === false && (
          <div className="align-center h-50 w-25 m-3 flex justify-center">
            <img src={previewUrl} alt="The image you uploaded" />
          </div>
        )}
        <PrimaryButton callToAction="Upload" />
      </Form>
      {data?.errorMessage && (
        <div className="text-red-500">Error uploading: {data.errorMessage}</div>
      )}
      {data?.imageSrc && confirmed === true && (
        <div
          id="upload-confirmation"
          className="border-black-100 align-center m-4 flex justify-center rounded-md p-4 text-green-700"
        >
          <CheckIcon /> <span>&nbsp;</span>Successfully uploaded
        </div>
      )}
      <div className="my-8 text-right">
        <Link
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          to="/reviews/new/setting"
          aria-label="next-button"
          id="next-button"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
