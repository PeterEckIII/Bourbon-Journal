import React from "react";

type TextareaReviewInputProps = {
  error?: string;
  labelName: string;
  name: string;
  changeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

export default function TextareaReviewInput({
  name,
  labelName,
  changeHandler,
}: TextareaReviewInputProps) {
  return (
    <div>
      <label className="flex w-full flex-col gap-1">
        <span>{labelName}: </span>
        <textarea
          onChange={changeHandler}
          name={name}
          rows={6}
          className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
        />
      </label>
    </div>
  );
}
