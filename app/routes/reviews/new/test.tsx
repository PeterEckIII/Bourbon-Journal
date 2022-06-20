import {
  Link,
  useFetcher,
  useLoaderData,
  useOutletContext,
} from "@remix-run/react";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
  UploadHandler,
} from "@remix-run/server-runtime";
import { v4 as uuid } from "uuid";
import { getUserId } from "~/session.server";
import { ContextType } from "../new";
import { ChangeEvent, useEffect, useState } from "react";
import CheckIcon from "~/components/Icons/CheckIcon";
import { ICloudinaryUploadResponse, upload } from "~/utils/cloudinary.server";
import invariant from "tiny-invariant";
import {
  getDataFromRedis,
  requireFormData,
  saveToRedis,
} from "~/utils/redis.server";
import Spinner from "~/components/Icons/Spinner";
import { CustomFormData } from "~/utils/helpers.server";

type ActionData = {
  errorMessage?: string;
  imageSrc?: string;
  publicId?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  invariant(userId, "No user ID in session");
  if (typeof userId === "undefined" || userId === undefined) {
    redirect("/login");
  }

  const publicId = uuid();

  const uploadHandler: UploadHandler = composeUploadHandlers(
    async ({ name, data }) => {
      if (name !== "img") {
        return undefined;
      }
      const uploadedImage = (await upload({
        data,
        userId,
        publicId: publicId,
      })) as ICloudinaryUploadResponse;
      return uploadedImage.secure_url;
    },
    createMemoryUploadHandler()
  );

  const form = await parseMultipartFormData(request, uploadHandler);

  // get image source
  const imageSrc = form.get("img")?.toString();
  if (typeof imageSrc === "undefined" || !imageSrc) {
    return json<ActionData>({
      errorMessage: "Cloudinary upload failed",
    });
  }

  // get redis id
  const id = form.get("id")?.toString();
  if (typeof id === "undefined" || !id) {
    return json<ActionData>({
      errorMessage: "Cloudinary upload failed",
    });
  }
  // get redis form data
  const formDataObject = await getDataFromRedis(id);
  if (!formDataObject) {
    throw Error(`Form data not found`);
  }

  formDataObject.imageId = publicId;
  await saveToRedis(formDataObject);

  return json<ActionData>({
    imageSrc,
    publicId,
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  const formData = await requireFormData(request);
  return formData;
};

export default function NewAddImageRoute() {
  const formData = useLoaderData<CustomFormData>();
  const { state, setFormState } = useOutletContext<ContextType>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [confirmed, setConfirmed] = useState<boolean>();
  const image = useFetcher();
  const isUploading = image.state === "submitting";

  if (setFormState === undefined) {
    throw new Error(`Error, please return to the bottle info page`);
  }

  useEffect(() => {
    if (image.state === "idle" && image.type === "done") {
      setFormState({
        ...state,
        imageId: image.data.publicId,
      });
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (image.type === "done") {
      setConfirmed(true);
    }
  }, []);

  const handlePreviewChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmed(false);
    const { files } = e.currentTarget;
    if (!files) throw new Error(`Error reading files from import`);
    if (files && files[0] !== undefined) {
      console.log(`Handling preview image`);
      const newUrl = URL.createObjectURL(files[0]);
      setPreviewUrl(newUrl);
    } else {
      console.log(`Cannot handle preview image`);
      setPreviewUrl("");
    }
  };

  return (
    <div className="m-2 p-2">
      <image.Form
        encType="multipart/form-data"
        method="post"
        className="max-w-[500px]"
      >
        <input type="hidden" name="id" value={formData.redisId} />
        <div className="flex w-full items-center justify-center">
          <label htmlFor="img">Upload an Image</label>
          <input
            type="file"
            name="img"
            accept="image/*"
            id="img"
            onChange={(e) => handlePreviewChange(e)}
          />
        </div>
        {previewUrl !== "" && confirmed === false && image.data === undefined && (
          <div className="h-50 w-25 m-3 flex items-center justify-center">
            <img src={previewUrl} alt="The image you uploaded" />
          </div>
        )}
        <div className="my-2 text-right">
          <button
            type="submit"
            id="submit-button"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            disabled={isUploading}
          >
            {isUploading ? <Spinner /> : "Upload Image"}
          </button>
        </div>
      </image.Form>
      {image.type === "done" && (
        <div
          id="uploadConfirmation"
          className="border-black-100 m-4 flex items-center justify-center rounded-md p-4 text-green-700"
        >
          <CheckIcon />
          <span>&nbsp;</span>Successfully uploaded!
        </div>
      )}
      <div className="my-8 text-right">
        <Link
          prefetch="intent"
          id="next-button"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          to={`/reviews/new/setting?id=${formData.redisId}`}
          onClick={() =>
            setFormState({
              ...state,
              imageId: formData.imageId ?? "",
            })
          }
        >
          Next
        </Link>
      </div>
    </div>
  );
}
