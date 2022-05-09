import { useBeforeUnload, useOutletContext } from "@remix-run/react";
import React, { useCallback } from "react";
import { ContextType } from "~/routes/reviews/new";

type TextareaReviewInputProps = {
  error?: string;
  labelName: string;
  name: string;
  value: string;
  emoji: string;
};

export default function TextareaReviewInput({
  name,
  value,
  labelName,
  emoji,
}: TextareaReviewInputProps) {
  const { stateSetter } = useOutletContext<ContextType>();

  if (typeof stateSetter === "undefined") {
    throw new Error(`Error from textarea element -- NO STATE SETTER!!`);
  }

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
          className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          onChange={(e) => stateSetter(e)}
          onBlur={() => handleBlur(name, value)}
        />
      </label>
    </div>
  );
}
