import { classNames } from "~/utils/cssHelper";

interface IRatingPillProps {
  value: number;
}

export default function RatingPill({ value }: IRatingPillProps) {
  const rating = typeof value === "number" ? value : Number(value);

  return (
    <span
      className={classNames(
        "leading-wide rounded-full px-3 py-1 text-xs font-bold uppercase shadow-sm",
        rating >= 4.5 ? "bg-green-100 text-green-700" : "null",
        rating < 4.5 && rating >= 3 ? "bg-yellow-100 text-yellow-700" : "null",
        rating < 3 ? "bg-red-100 text-red-700" : "null"
      )}
    >
      {rating}
    </span>
  );
}
