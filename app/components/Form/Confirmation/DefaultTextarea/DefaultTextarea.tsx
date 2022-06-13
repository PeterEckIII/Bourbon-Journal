import * as React from "react";

interface IDefaultTextareaProps {
  name: string;
  label: string;
  defaultValue: string;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function DefaultTextarea({
  name,
  label,
  defaultValue,
  changeHandler,
}: IDefaultTextareaProps) {
  return (
    <div className="m-3">
      <label htmlFor={name} className="my-2 flex w-full flex-col gap-1">
        {label}
      </label>
      <div className="flex">
        <textarea
          name={name}
          id={name}
          rows={4}
          defaultValue={defaultValue}
          onChange={changeHandler}
          className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-600 focus:border-blue-500 focus:bg-gray-50"
        />
      </div>
    </div>
  );
}
