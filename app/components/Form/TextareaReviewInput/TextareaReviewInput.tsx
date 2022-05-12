import { useBeforeUnload } from "@remix-run/react";
import React, { useCallback } from "react";

type TextareaReviewInputProps = {
  error?: string;
  labelName: string;
  name: string;
  value: string;
  emoji: string;
  changeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextareaReviewInput({
  name,
  value,
  labelName,
  emoji,
  changeHandler,
}: TextareaReviewInputProps) {
  useBeforeUnload(
    useCallback(() => {
      if (typeof window !== "undefined") {
        return window.localStorage.setItem(name, value);
      }
    }, [])
  );

  const handleBlur = (key: string, value: string) => {
    if (typeof window !== "undefined") {
      return window.localStorage.setItem(key, value);
    }
  };

  return (
    <div className="mx-2 my-2">
      <label className="flex w-full flex-col gap-1">
        <span>
          {labelName} {emoji}{" "}
        </span>
        <textarea
          name={name}
          rows={6}
          value={value}
          aria-label={`${name}-input`}
          className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          onChange={changeHandler}
          onBlur={() => handleBlur(name, value)}
        />
      </label>
    </div>
  );
}
