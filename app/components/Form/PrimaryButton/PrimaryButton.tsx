export interface PrimaryButtonProps {
  callToAction: string;
}

export default function PrimaryButton({ callToAction }: PrimaryButtonProps) {
  return (
    <div className="my-2 text-right">
      <button
        type="submit"
        id={`${callToAction.replace(" ", "").toLowerCase()}-button`}
        className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
      >
        {callToAction}
      </button>
    </div>
  );
}
