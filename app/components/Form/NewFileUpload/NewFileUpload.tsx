import { useFetcher } from "@remix-run/react";
import type { ChangeEvent } from "react";
import Spinner from "~/components/Icons/Spinner";

interface IFileUploadProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string;
  confirmed: boolean;
}

export default function FileUpload({
  handleChange,
  previewUrl,
  confirmed,
}: IFileUploadProps) {
  const image = useFetcher();
  const isUploading = image.state === "submitting";
  // const isReloading = image.state === "loading";
  // const doneFetching = image.state === "idle" && image.type === "done";
  // const imageData = image.data;
  // const imageSubmission = image.submission;
  return (
    <image.Form
      method="post"
      encType="multipart/form-data"
      className="flex max-w-[500px] justify-center"
    >
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="img"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="mb-3 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 131-3-3m0 01-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPEG, WEBP, etc. (Max. 500x250px)
            </p>
          </div>
          <input
            type="file"
            name="img"
            id="img"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
      {previewUrl !== "" && confirmed === false && (
        <div className="h-50 w-25 m-3 flex items-center justify-center">
          <img src={previewUrl} alt="The bottle you uploaded" />
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
  );
}
