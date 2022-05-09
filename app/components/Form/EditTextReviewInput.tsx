type EditTextReviewInputProps = {
  type: string;
  labelName: string;
  name: string;
  defaultValue: string | number | null;
};

export default function EditTextReviewInput({
  type,
  labelName,
  name,
  defaultValue,
}: EditTextReviewInputProps) {
  return (
    <div>
      <label htmlFor={name} className="flex w-full flex-col gap-1">
        {labelName}
      </label>
      <input
        className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
        type={type}
        name={name}
        defaultValue={defaultValue ?? ""}
      />
    </div>
  );
}
