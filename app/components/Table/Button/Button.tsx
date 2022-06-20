import React from "react";
import { classNames } from "~/utils/cssHelper";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled: boolean;
  onClick: () => void;
}

export default function Button({
  children,
  className,
  disabled,
  onClick,
  ...rest
}: IButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-white",
        className || ""
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
