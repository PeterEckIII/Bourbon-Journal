import { Link } from "remix";
import ExternalLink from "~/components/Icons/ExternalLink";

interface ILinkCellProps {
  value: string;
}

export default function LinkCell({ value }: ILinkCellProps) {
  const url = typeof value === "string" ? value : String(value);
  return (
    <div>
      <Link prefetch="intent" to={`/reviews/${url}`} className="text-blue-600">
        {" "}
        <ExternalLink className="inline" />
      </Link>
    </div>
  );
}
