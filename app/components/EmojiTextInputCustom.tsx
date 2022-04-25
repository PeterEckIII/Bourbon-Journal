import React from "react";

type TextReviewInputType = {
  error?: string;
  labelName: string;
  name: string;
  type: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  note: string;
  noteSource: string;
};

const TextReviewInput: React.FC<
  TextReviewInputType & React.HTMLProps<HTMLInputElement>
> = ({ labelName, name, error, changeHandler, type, note, noteSource }) => {
  return (
    <div className="mx-2">
      <label className="flex w-full flex-col gap-1">
        <span>
          {labelName}
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
          onChange={changeHandler}
          className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
        />
      </label>
    </div>
  );
};

export default TextReviewInput;
