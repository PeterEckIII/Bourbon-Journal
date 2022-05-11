import React, { useCallback } from "react";
import { useBeforeUnload } from "@remix-run/react";

export interface TextReviewInputType {
  error?: string;
  labelName: string;
  name: string;
  type: string;
  value: string | number;
  emoji?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextReviewInput: React.FC<
  TextReviewInputType & React.HTMLProps<HTMLInputElement>
> = ({ labelName, name, value, error, type, emoji, changeHandler }) => {
  useBeforeUnload(
    useCallback(() => {
      if (typeof value === "number") {
        localStorage.setItem(name, String(value));
      }
      if (typeof value === "string") {
        localStorage.setItem(name, value);
      }
    }, [])
  );

  const handleBlur = (key: string, value: string | number) => {
    if (typeof window !== "undefined") {
      if (typeof value === "string") {
        return window.localStorage.setItem(key, value);
      } else if (typeof value === "number") {
        return window.localStorage.setItem(key, String(value));
      }
    }
  };

  return (
    <div className="mx-2 my-1">
      <label className="flex w-full flex-col gap-1" htmlFor={name}>
        <span>
          {labelName} {emoji}{" "}
        </span>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={changeHandler}
          aria-label={`${name}-input`}
          onBlur={() => handleBlur(name, value)}
          className="mt-1 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
        />
      </label>
    </div>
  );
};

export default TextReviewInput;
