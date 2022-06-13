interface IDefaultInputProps {
  name: string;
  label: string;
  defaultValue: string;
  type: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput({
  name,
  type,
  defaultValue,
  label,
  changeHandler,
}: IDefaultInputProps) {
  return (
    <div>
      <label htmlFor={name} className="my-2 flex w-full flex-col gap-1">
        {label}
      </label>
      <div className="flex">
        <input
          type={type}
          defaultValue={defaultValue}
          name={name}
          id={name}
          onChange={changeHandler}
          className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-600 focus:border-blue-500 focus:bg-gray-50"
        />
      </div>
    </div>
  );
}
