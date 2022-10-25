import { useCallback, useState } from "react";
import { useEffect } from "react";
import type { HeadersFunction } from "@remix-run/server-runtime";

// @ts-ignore
import { decorators, fixtures, rendererConfig } from "~/cosmos.userdeps.js";

const shouldLoadCosmos = typeof window !== "undefined";

export const headers: HeadersFunction = () => {
  return {
    "Access-Control-Allow-Origin": "*",
  };
};

function Cosmos() {
  const [cosmosLoaded, setCosmosLoaded] = useState(false);
  const loadRenderer = useCallback(async () => {
    // @ts-ignore
    const { mountDomRenderer } = (await import("react-cosmos/dom")).default;
    mountDomRenderer({
      decorators,
      fixtures,
      rendererConfig: {
        ...rendererConfig,
        containerQuerySelector: "body",
      },
    } as any);
  }, []);

  useEffect(() => {
    if (shouldLoadCosmos && !cosmosLoaded) {
      loadRenderer();
      setCosmosLoaded(true);
    }
  }, [cosmosLoaded, loadRenderer]);
  return <div className="cosmos-container" />;
}

export default Cosmos;
