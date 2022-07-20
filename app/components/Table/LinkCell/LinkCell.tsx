import { Link } from "remix";
import ExternalLink from "~/components/Icons/ExternalLink";

interface ILinkCellProps {
  value: string;
}

export default function LinkCell({ value }: ILinkCellProps) {
  const url = typeof value === "string" ? value : String(value);
  return (
    <div className="flex items-center justify-center">
      <td className="link-col link hidden text-xs sm:table-cell sm:text-base">
        <Link className="text-blue-600" to={`reviews/${url}`}>
          Review
        </Link>
      </td>
      <td className="flex justify-center sm:hidden">
        <Link className="mb-4 text-blue-600" to={`reviews/${url}`}>
          <ExternalLink className="" />
        </Link>
      </td>
    </div>
  );
}
