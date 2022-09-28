import { json, useActionData, useOutletContext, useTransition } from "remix";
import type { ActionFunction } from 'remix';
import SingleForm from "~/components/Form/SingleForm";
import { ContextType } from "../new";

interface ActionData {
  error?: string;
}

// export const action: ActionFunction = async ({ request }) => {
//   return json<ActionData>({
    
//   })
// }

export default function Test() {
  const { state, stateSetter } = useOutletContext<ContextType>();
  const transition = useTransition();
  const actionData = useActionData();
  // let formState: "idle" | "error" | "submitting" = transition.submission
  //   ? "submitting"
  //   : actionData.error
  //     ? "error"
  //     : "idle"

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <SingleForm  />
  )
}
