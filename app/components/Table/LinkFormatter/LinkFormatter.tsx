import { renderToString } from "react-dom/server";
import { Link } from "remix";
import type {
  CellComponent,
  FormatterParams,
} from "types/react-tabulator-config";
import ExternalLink from "~/components/Icons/ExternalLink";

interface ILinkFormatterProps {
  cell: CellComponent;
  formatterParams: FormatterParams;
}

export default function LinkFormatter({
  cell,
  formatterParams,
}: ILinkFormatterProps) {
  const reviewId = cell.getValue() || "";

  return renderToString(
    <Link to={`/reviews/${reviewId}`}>
      {" "}
      <ExternalLink className="inline" />
    </Link>
  );
}
