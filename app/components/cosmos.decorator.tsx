import App from "~/root";
import { MemoryRouter } from "react-router";
import { useEffect, useState } from "react";
import { createTransitionManager } from "@remix-run/react/transition";
import { LiveReload, Scripts, ScrollRestoration } from "@remix-run/react";

const clientRoutes = [
  {
    id: "idk",
    path: "idk",
    hasLoader: true,
    element: "",
    module: "",
    action: () => null,
  },
];

let context = {
  routeModules: { idk: { default: () => null } },
  manifest: {
    routes: {
      idk: {
        hasLoader: true,
        hasAction: false,
        hasCatchBoundary: true,
        hasErrorBoundary: true,
        id: "idk",
        module: "idk",
      },
    },
    entry: { imports: [], module: "" },
    url: "",
    version: "",
  },
  matches: [],
  clientRoutes,
  routeData: {},
  appState: {} as any,
  transitionManager: createTransitionManager({
    routes: clientRoutes,
    location: {
      key: "default",
      hash: "#hello",
      pathname: "/",
      search: "?a=b",
      state: {},
    },
    loaderData: {},
    onRedirect(to, state?) {
      console.log("redirected");
    },
    onChange(state) {
      console.log(`STATE: ${JSON.stringify(state, null, 2)}`);
    },
  }),
};

const Decorator = ({ children }: { children: any }) => {
  const [result, setResult] = useState<any | null>(null);

  useEffect(() => {
    import(
      // @ts-expect-error
      "@remix-run/react/esm/components"
    ).then(
      ({ RemixEntryContext }: typeof import("@remix-run/react/components")) => {
        setResult(
          <RemixEntryContext.Provider value={context}>
            <MemoryRouter>
              {children}
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </MemoryRouter>
          </RemixEntryContext.Provider>
        );
      }
    );
  }, [children]);

  if (!result) return <>Loading...</>;
  if (result) return result;
};

export default Decorator;
