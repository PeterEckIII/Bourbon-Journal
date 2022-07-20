import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { Link } from "remix";
import type { AgGridReact as AgGridReactType } from "ag-grid-react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type {
  GridApi,
  ColDef,
  FirstDataRenderedEvent,
  ValueGetterParams,
} from "ag-grid-community";
import type { IReviewTableItem } from "~/routes/reviews/index";
import ExternalLink from "~/components/Icons/ExternalLink";
import ImageRenderer from "../ImageRenderer/ImageRenderer";
import { classNames } from "~/utils/cssHelper";

type NumberParserParams = {
  newValue: string;
};

const ratingRenderer = (params: any) => {
  return (
    <span
      className={classNames(
        "leading-wide rounded-full px-3 py-1 text-xs font-bold uppercase shadow-sm",
        params.value >= 4.5 ? "bg-green-100 text-green-700" : "null",
        params.value < 4.5 && params.value >= 3
          ? "bg-yellow-100 text-yellow-700"
          : "null",
        params.value < 3 ? "bg-red-100 text-red-700" : "null"
      )}
    >
      {params.value}
    </span>
  );
};

const reviewLinkRenderer = (params: any) => {
  return (
    <div className="flex items-end justify-center pt-2">
      <Link className="mb-4 text-blue-600" to={`reviews/${params.value}`}>
        <ExternalLink className="" />
      </Link>
    </div>
  );
};

const numberParser = (params: NumberParserParams) => {
  const newValue = params.newValue;
  let valueAsNumber;
  if (newValue === null || newValue === undefined || newValue === "") {
    valueAsNumber = null;
  } else {
    valueAsNumber = parseFloat(params.newValue);
  }
  return valueAsNumber;
};

const nameGetter = (params: ValueGetterParams) => {
  const name = params.data.name ?? "";
  const imageId = params.data.imageId ?? "";
  return {
    name,
    imageId,
  };
};

export default function DataGrid({ initialData }: any) {
  const grid = useRef<AgGridReactType>(null);
  const containerStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [records, setRecords] = useState<number>(0);
  const [rowData, setRowData] = useState(initialData);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "name",
      minWidth: 230,
      lockPosition: "left",
      valueGetter: nameGetter,
      cellRenderer: ImageRenderer,
      cellStyle: { display: "flex" },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      getQuickFilterText: (params) => params.value,
    },
    {
      field: "date",
      minWidth: 130,
      maxWidth: 130,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      filter: "agDateColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
    },
    {
      field: "type",
      minWidth: 100,
      maxWidth: 100,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      getQuickFilterText: (params) => params.value,
    },
    {
      field: "distillery",
      minWidth: 100,
      maxWidth: 130,
      cellStyle: {
        display: "flex",
        alignItems: "center",
      },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      getQuickFilterText: (params) => params.value,
    },
    {
      field: "producer",
      minWidth: 100,
      maxWidth: 130,
      cellStyle: {
        display: "flex",
        alignItems: "center",
      },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      getQuickFilterText: (params) => params.value,
    },
    {
      field: "rating",
      valueParser: numberParser,
      // cellClassRules: ratingCellClassRules,
      cellRenderer: ratingRenderer,
      minWidth: 180,
      maxWidth: 100,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
    },
    {
      headerName: "Link",
      field: "reviewId",
      minWidth: 80,
      maxWidth: 80,
      cellRenderer: reviewLinkRenderer,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  ]);

  const onFilterTextBoxChanged = useCallback(() => {
    grid!.current!.api.setQuickFilter(
      (document!.getElementById("filter-text-box") as HTMLInputElement).value
    );
  }, []);

  const defaultColDef = useMemo(
    () => ({ resizable: true, sortable: true }),
    []
  );

  const onFirstDataRendered = useCallback((params: any) => {
    grid!.current!.api.sizeColumnsToFit();
  }, []);

  const onGridSizeChanged = useCallback((params: any) => {
    let gridWidth = document!.getElementById("grid-wrapper")
      ?.offsetWidth as number;
    let columnsToShow = [];
    let columnsToHide = [];

    let totalColsWidth = 0;
    let allColumns = grid.current?.columnApi.getColumns();

    if (allColumns && allColumns.length > 0) {
      for (let i = 0; i < allColumns.length; i++) {
        let column = allColumns[i];
        if (gridWidth < 600 && column.getColId() === "date") {
          columnsToHide.push(column);
        }

        totalColsWidth += column.getMinWidth() || 0;

        if (totalColsWidth > gridWidth) {
          if (
            column.getColId() === "name" ||
            column.getColId() === "rating" ||
            column.getColId() === "reviewId"
          ) {
            columnsToShow.push(column.getColId());
          } else {
            columnsToHide.push(column.getColId());
          }
        } else {
          columnsToShow.push(column.getColId());
        }
      }
    }

    grid!.current!.columnApi.setColumnsVisible(columnsToShow, true);
    grid!.current!.columnApi.setColumnsVisible(columnsToHide, false);
    grid!.current!.api.sizeColumnsToFit();
  }, []);

  useEffect(() => {
    setRecords(initialData.length);
  }, [initialData]);

  return (
    <div style={containerStyle}>
      <div
        id="grid-wrapper"
        className="ag-theme-alpine"
        style={{ height: 500, width: "auto" }}
      >
        <div className="flex">
          <div className="my-4 w-3/4 p-4">
            <input
              type="text"
              onInput={onFilterTextBoxChanged}
              id="filter-text-box"
              placeholder={`Filter ${records} ${
                records === 0 || records > 1 ? `records` : `record`
              }`}
              className="w-[100%] rounded-md sm:w-[50%] md:w-[40%] lg:w-[25%]"
            />
            <div className="ml-1 pt-2 italic">Filter all column data</div>
          </div>
          <div className="hidden w-1/4 sm:flex sm:flex-col sm:items-end sm:p-2">
            <div className="border-2 p-2">
              <h6 className="mr-4 underline">Table Features</h6>
              <ul className="">
                <li className="list-none"> - Filter a Column</li>
                <li className="list-none"> - Filter all Columns</li>
                <li className="list-none"> - Resize Columns</li>
                <li className="list-none"> - Remove Columns</li>
              </ul>
            </div>
          </div>
        </div>

        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          ref={grid}
          defaultColDef={defaultColDef}
          onFirstDataRendered={onFirstDataRendered}
          onGridSizeChanged={onGridSizeChanged}
          animateRows={true}
          rowSelection="multiple"
          rowHeight={100}
        />
      </div>
    </div>
  );
}
