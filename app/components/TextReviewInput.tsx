import React from "react";

type TextReviewInputType = {
  error?: string;
  labelName: string;
  name: string;
  type: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextReviewInput: React.FC<
  TextReviewInputType & React.HTMLProps<HTMLInputElement>
> = ({ labelName, name, error, changeHandler, type }) => {
  return (
    <div className="mx-2">
      <label className="flex w-full flex-col gap-1">
        <span>{labelName}: </span>
        <input
          type={type}
          name={name}
          onChange={changeHandler}
          className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
        />
      </label>
    </div>
  );
};

export default TextReviewInput;
