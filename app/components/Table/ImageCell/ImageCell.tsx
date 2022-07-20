import type {
  CellComponent,
  FormatterParams,
} from "types/react-tabulator-config";

interface IImageProps {
  cell: CellComponent;
  formatterParams: FormatterParams;
}

export default function ImageCell({ cell, formatterParams }: IImageProps) {
  const value = cell.getValue() || "";
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 flex-shrink-0">
        <img
          // @ts-ignore-next-line
          src={value}
          alt="bottle for review"
          className="h-10 w-10 rounded-md"
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">
          {/* @ts-ignore-next-line */}
          {row.original[column["dateAccessor"]]}
        </div>
      </div>
    </div>
  );
}
