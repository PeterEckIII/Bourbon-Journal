import {
  Link,
  useActionData,
  useLoaderData,
  useOutletContext,
  useSearchParams,
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
import FileUpload from "~/components/Form/FileUpload/FileUpload";
import { pollForKeys } from "~/utils/redis.server";

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

  await pollForKeys();

  const imageId = uuid();

  const uploadHandler: UploadHandler = composeUploadHandlers(
    async ({ name, data }) => {
      if (name !== "img") {
        return undefined;
      }
      const uploadedImage = (await upload({
        data,
        userId,
        publicId: imageId,
      })) as ICloudinaryUploadResponse;
      return uploadedImage.secure_url;
    },
    createMemoryUploadHandler()
  );

  const form = await parseMultipartFormData(request, uploadHandler);

  const imageSrc = form.get("img")?.toString();
  if (typeof imageSrc === "undefined" || !imageSrc) {
    return json<ActionData>({
      errorMessage: "Cloudinary upload failed",
    });
  }

  return json<ActionData>({
    imageSrc,
    publicId: imageId,
  });
};

export default function NewAddImageRoute() {
  const data = useActionData<ActionData>();
  const redisId = useLoaderData<string>();
  const { state, setFormState } = useOutletContext<ContextType>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [confirmed, setConfirmed] = useState<boolean>();

  if (setFormState === undefined) {
    throw new Error(`Error, please return to the bottle info page`);
  }

  useEffect(() => {
    setFormState({
      ...state,
      imageId: data?.publicId ?? "",
    });
    if (data?.imageSrc) {
      setConfirmed(true);
    }
  }, [data?.publicId, setFormState]);

  const handlePreviewChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) throw new Error(`Error reading files from import`);
    if (files && files[0] !== undefined) {
      const newUrl = URL.createObjectURL(files[0]);
      setPreviewUrl(newUrl);
    } else {
      setPreviewUrl("");
    }
  };

  return (
    <div className="m-2 p-2">
      <FileUpload
        previewUrl={previewUrl ?? ""}
        confirmed={confirmed ?? false}
        handleChange={(e) => handlePreviewChange(e)}
      />
      {data?.errorMessage && (
        <div className="text-red-500">Error uploading: {data.errorMessage}</div>
      )}
      {data?.imageSrc && confirmed === true && (
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
          id="next-button"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
          to={`/reviews/new/setting?id=${redisId}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
