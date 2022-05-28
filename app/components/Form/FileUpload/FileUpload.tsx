import { Form } from "@remix-run/react";
import { ChangeEvent } from "react";
import PrimaryButton from "~/components/Form/PrimaryButton";

interface IFileUploadProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string;
  confirmed: boolean;
}

export default function FileUpload({
  previewUrl,
  confirmed,
  handleChange,
}: IFileUploadProps) {
  return (
    <Form method="post" encType="multipart/form-data">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, or WEBP (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            name="img"
            accept=".jpg, .jpeg, .png, .webp"
            id="img"
            className="hidden"
            onChange={handleChange}
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
  );
}
