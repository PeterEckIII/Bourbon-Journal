import { useEffect, useMemo, useState } from "react";
import { getReviewsForTable } from "~/models/review.server";
import {
  useTable,
  useGlobalFilter,
  ColumnWithLooseAccessor,
  useSortBy,
  usePagination,
  useResizeColumns,
  useFlexLayout,
  reduceHooks,
  loopHooks,
} from "react-table";
import GlobalFilter from "./GlobalFilter/GlobalFilter";
import ChevronRight from "../Icons/ChevronRight";
import ChevronDoubleRight from "../Icons/ChevronDoubleRight";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronDoubleLeft from "../Icons/ChevronDoubleLeft";
import Button from "./Button/Button";
import RatingPill from "./RatingPill/RatingPill";
import PageButton from "./PageButton/PageButton";
import ImageCell from "./ImageCell/ImageCell";
import SortDown from "../Icons/SortDown";
import SortUp from "../Icons/SortUp";
import Sort from "../Icons/Sort";
import LinkCell from "./LinkCell/LinkCell";
import useBreakpoint from "~/utils/useBreakpoint";

interface ITableProps {
  reviews: Awaited<ReturnType<typeof getReviewsForTable>>;
  userId: string;
}

export default function TestTable({ reviews, userId }: ITableProps) {
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
      date: review.date,
      rating: review.overallRating,
      imageId: `http://res.cloudinary.com/jpeckiii/image/upload/${userId}/${review.imageId}`,
      reviewId: `${review.id}`,
    };
  });

  const data = useMemo(() => reviewList, []);
  const columns: ColumnWithLooseAccessor[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ImageCell,
        imgAccessor: "imageId",
        dateAccessor: "date",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Rating",
        accessor: "rating",
        Cell: RatingPill,
      },
      {
        Header: "Link",
        accessor: "reviewId",
        Cell: LinkCell,
      },
    ],
    []
  );

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
    getToggleHideAllColumnsProps,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  return (
    <div className="my-4 flex flex-col items-center justify-center overflow-x-auto">
      <div className="flex gap-x-2 self-start">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <div className="overflow-x-auto whitespace-nowrap border-b border-gray-200 p-4 shadow sm:rounded-lg">
        <table {...getTableProps()} className="border-spacing-0">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="m-0" {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <SortDown className="h-4 w-4 text-gray-400" />
                        ) : (
                          <SortUp className="h-4 w-4 text-gray-400" />
                        )
                      ) : (
                        <Sort className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((page, i) => {
              prepareRow(page);
              return (
                <tr {...page.getRowProps()}>
                  {page.cells.map((cell) => (
                    <td className="m-0 p-2 text-sm" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
