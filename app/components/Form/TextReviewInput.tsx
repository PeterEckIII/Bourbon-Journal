import React, { useCallback } from "react";
import { useBeforeUnload, useOutletContext } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";

type TextReviewInputType = {
  error?: string;
  labelName: string;
  name: string;
  type: string;
  value: string | number;
  emoji?: string;
};

const TextReviewInput: React.FC<
  TextReviewInputType & React.HTMLProps<HTMLInputElement>
> = ({ labelName, name, value, error, type, emoji }) => {
  const { stateSetter } = useOutletContext<ContextType>();

  if (typeof stateSetter === "undefined") {
    throw new Error(`Error from input element -- NO STATE SETTER`);
  }

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
      <label className="flex w-full flex-col gap-1">
        <span>
          {labelName} {emoji}{" "}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => stateSetter(e)}
          onBlur={() => handleBlur(name, value)}
          className="mt-1 flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
        />
      </label>
    </div>
  );
};

export default TextReviewInput;
