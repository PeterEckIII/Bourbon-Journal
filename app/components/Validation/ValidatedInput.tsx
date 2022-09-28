import { useField } from "remix-validated-form";

interface IValidatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  name: string;
  type: string;
  value: string;
  emoji?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ValidatedInput({
  labelName,
  name,
  type,
  value,
  emoji,
  changeHandler,
}: IValidatedInputProps) {
  const { error, getInputProps } = useField(name);

  const handleBlur = (key: string, value: string) => {
    if (typeof window !== "undefined") {
      return window.localStorage.setItem(key, value);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <label htmlFor={name} className="my-2 flex w-full flex-col gap-1">
        {labelName}&nbsp;
        {emoji ? emoji : ""}{" "}
      </label>
      <div className="flex">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={changeHandler}
          aria-label={`${labelName}`}
          onBlur={() => handleBlur(name, value)}
          className="block w-full min-w-0 flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...getInputProps({ id: name })}
        />
        {error && <span className="text-red-600">{error}</span>}
      </div>
    </div>
  );
}
