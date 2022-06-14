import { useMemo } from "react";
import { getReviewsForTable } from "~/models/review.server";
import {
  useTable,
  useGlobalFilter,
  ColumnWithLooseAccessor,
  useSortBy,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter/GlobalFilter";

interface ITableProps {
  reviews: Awaited<ReturnType<typeof getReviewsForTable>>;
}

export default function Table({ reviews }: ITableProps) {
  const columns: ColumnWithLooseAccessor[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Distillery",
        accessor: "distillery",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Rating",
        accessor: "rating",
      },
    ],
    []
  );

  const reviewList = reviews.map((review) => {
    if (
      typeof review === "undefined" ||
      !review ||
      !review.bottle ||
      typeof review.bottle === "undefined"
    ) {
      throw Error(`Reviews are not passed correctly`);
    }
    return {
      name: review.bottle.name,
      type: review.bottle.type,
      distillery: review.bottle.distiller,
      rating: review.overallRating,
    };
  });

  const data = useMemo(() => reviewList, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  return (
    <div className="flex flex-col items-center justify-center">
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <span>
          Page{" "}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={state.pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 20].map((pageSize) => (
            <option value={pageSize} key={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
