import React from "react";
import { classNames } from "~/utils/cssHelper";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled: boolean;
  onClick: () => void;
}

export default function PageButton({
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
        "relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50",
        className ?? ""
      )}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
