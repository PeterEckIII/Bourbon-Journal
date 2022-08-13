import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import type { AgGridReact as AgGridReactType } from "ag-grid-react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type {
  ColDef,
  FirstDataRenderedEvent,
  GridReadyEvent,
  GridSizeChangedEvent,
  StatusPanelDef,
  ValueGetterParams,
} from "ag-grid-community";
import ImageRenderer from "../ImageRenderer/ImageRenderer";
import RatingRenderer from "../RatingRenderer/RatingRenderer";
import LinkRenderer from "../LinkRenderer/LinkRenderer";
import NoRowsOverlay from "../NoRowsOverlay/NoRowsOverlay";
import NameTooltip from "../NameTooltip/NameTooltip";
import PriceRenderer from "../PriceRenderer/PriceRenderer";
import ABVRenderer from "~/components/DataGrid/ABVRenderer/ABVRenderer";
import ProofRenderer from "../ProofRenderer/ProofRenderer";

type NumberParserParams = {
  newValue: string;
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

function nameGetter(params: ValueGetterParams) {
  if (!params.data) return `loading...`;
  return {
    name: params.data.name,
    imageId: params.data.imageId,
  };
}

export default function DataGrid({ initialData }: any) {
  const grid = useRef<AgGridReactType>(null);
  const containerStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [records, setRecords] = useState<number>(0);
  const [rowData, setRowData] = useState(initialData);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "name",
      minWidth: 300,
      maxWidth: 300,
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
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
      tooltipComponent: NameTooltip,
      tooltipField: "name",
    },
    {
      field: "date",
      sort: "desc",
      minWidth: 130,
      maxWidth: 130,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 500,
      },
      filter: "agDateColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
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
        fontWeight: "500",
      },
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      getQuickFilterText: (params) => params.value,
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "price",
      minWidth: 97,
      maxWidth: 100,
      cellStyle: {
        display: "flex",
        alignItems: "center",
      },
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      cellRenderer: PriceRenderer,
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      headerName: "ABV",
      field: "alcoholPercent",
      minWidth: 92,
      maxWidth: 92,
      cellRenderer: ABVRenderer,
      cellStyle: {
        display: "flex",
        alignItems: "center",
      },
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "proof",
      minWidth: 107,
      maxWidth: 110,
      cellStyle: {
        display: "flex",
        alignItems: "center",
      },
      cellRenderer: ProofRenderer,
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "age",
      minWidth: 115,
      maxWidth: 120,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        fontWeight: 500,
      },
      filter: "agNumberColumnFilter",
      filterParams: {
        buttons: ["apply", "reset"],
        closeOnApply: true,
      },
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "distillery",
      minWidth: 100,
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
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "producer",
      minWidth: 100,
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
      icons: {
        menu: `
          <div class="text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "value",
      valueParser: numberParser,
      cellRenderer: RatingRenderer,
      minWidth: 100,
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
      icons: {
        menu: `
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      field: "rating",
      valueParser: numberParser,
      cellRenderer: RatingRenderer,
      minWidth: 105,
      maxWidth: 105,
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
      icons: {
        menu: `
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 text-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </div>
        `,
      },
    },
    {
      headerName: "Link",
      field: "reviewId",
      minWidth: 80,
      maxWidth: 80,
      cellRenderer: LinkRenderer,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      sortable: false,
      filter: false,
    },
  ]);

  const onFilterTextBoxChanged = useCallback(() => {
    grid!.current!.api.setQuickFilter(
      (document!.getElementById("filter-text-box") as HTMLInputElement).value
    );
  }, []);

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      filter: true,
    }),
    []
  );

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    grid!.current!.api.sizeColumnsToFit();
  }, []);

  const onGridSizeChanged = useCallback((params: GridSizeChangedEvent) => {
    let gridWidth = document!.getElementById("grid-wrapper")
      ?.offsetWidth as number;
    let columnsToShow = [];
    let columnsToHide = [];
    let defaultColumnWidth = 300 + 105 + 80;

    let totalColsWidth = 0;
    let allColumns = grid.current?.columnApi.getColumns();
    if (allColumns && allColumns.length > 0) {
      for (let i = 0; i < allColumns.length; i++) {
        let column = allColumns[i];
        if (
          column.getColId() === "name" ||
          column.getColId() === "rating" ||
          column.getColId() === "reviewId"
        ) {
          columnsToShow.push(column);
        } else {
          defaultColumnWidth += column.getMinWidth() || 0;
          if (defaultColumnWidth > gridWidth) {
            columnsToHide.push(column.getColId());
          } else {
            columnsToShow.push(column.getColId());
          }
        }
      }
    }

    grid!.current!.columnApi.setColumnsVisible(columnsToShow, true);
    grid!.current!.columnApi.setColumnsVisible(columnsToHide, false);
    grid!.current!.api.sizeColumnsToFit();
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
    params.api.refreshCells();
  }, []);

  const noRowsOverlayComponent = useMemo<any>(() => {
    return NoRowsOverlay;
  }, []);

  const noRowsOverlayComponentParams = useMemo<any>(() => {
    return {
      message: "No reviews -- add one using the link above",
    };
  }, []);

  useEffect(() => {
    setRecords(initialData.length);
  }, [initialData]);

  return (
    <div style={containerStyle}>
      <div id="grid-wrapper" style={{ height: "100%", width: "100%" }}>
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
        </div>
        <div className="ag-theme-alpine" style={gridStyle}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            ref={grid}
            defaultColDef={defaultColDef}
            onFirstDataRendered={onFirstDataRendered}
            onGridSizeChanged={onGridSizeChanged}
            onGridReady={onGridReady}
            animateRows={true}
            rowSelection="multiple"
            rowHeight={100}
            rowModelType="clientSide"
            noRowsOverlayComponent={noRowsOverlayComponent}
            noRowsOverlayComponentParams={noRowsOverlayComponentParams}
            suppressMenuHide={true}
            suppressHorizontalScroll={true}
            tooltipShowDelay={500}
            tooltipHideDelay={5000}
          />
        </div>
      </div>
    </div>
  );
}
