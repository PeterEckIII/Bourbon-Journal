import { useState } from "react";
import { useGlobalFilter, useAsyncDebounce, Row } from "react-table";

interface IFilterProps {
  preGlobalFilteredRows: Row[];
  globalFilter: any;
  setGlobalFilter: (value: string) => void;
}

export default function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: IFilterProps) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState<string | undefined>(globalFilter);

  const handleChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
        placeholder={`${count} reviews`}
      />
    </span>
  );
}
