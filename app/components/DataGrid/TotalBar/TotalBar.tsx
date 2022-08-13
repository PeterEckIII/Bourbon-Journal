import { useEffect, useState } from "react";
import type { IStatusPanelParams } from "ag-grid-community";

export default function TotalBar(props: IStatusPanelParams) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(props.api.getModel().getRowCount());
  }, [props]);

  return (
    <div className="ag-status-name-value">
      <span className="ml-[5px] font-semibold">Total: </span>
      <span className="ag-status-name-value-value">{count}</span>
    </div>
  );
}
