import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import type { Row } from "react-table";

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
    <div>
      <label htmlFor="search" className="flex items-baseline gap-x-2">
        <span className="text-lg text-gray-700">Search: </span>
        <input
          type="text"
          name="search"
          id="search"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            handleChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </label>
      <p className="ml-4 mt-1 block w-full rounded-md text-xs italic text-gray-500">
        Search by name, type, distillery, or rating
      </p>
    </div>
  );
}
