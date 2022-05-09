import React, { useCallback } from "react";
import { useOutletContext, useBeforeUnload } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";

type TextReviewInputType = {
  error?: string;
  labelName: string;
  name: string;
  value: number;
  type: string;
  note: string;
  noteSource: string;
};

const TextReviewCustomInput: React.FC<
  TextReviewInputType & React.HTMLProps<HTMLInputElement>
> = ({ labelName, name, value, error, type, note, noteSource }) => {
  const { stateSetter } = useOutletContext<ContextType>();

  if (typeof stateSetter === "undefined") {
    throw new Error(`STATE SETTER UNDEFINED!!`);
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
    <div className="mx-2 my-2">
      <label className="flex w-full flex-col gap-1">
        <span>
          {labelName} &nbsp;
          <img
            className="inline"
            height={20}
            width={20}
            src={noteSource}
            alt={`${note} emoji`}
          />{" "}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => stateSetter(e)}
          onBlur={() => handleBlur(name, value)}
          className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
        />
      </label>
    </div>
  );
};

export default TextReviewCustomInput;
