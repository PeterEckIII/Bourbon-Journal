import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { useOutletContext } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";
import BottleForm from "~/components/Form/BottleForm/BottleForm";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const distiller = formData.get("distiller")?.toString();
  const bottler = formData.get("bottler")?.toString();
  const producer = formData.get("producer")?.toString();
  const country = formData.get("country")?.toString();
  const region = formData.get("region")?.toString();
  const price = formData.get("price")?.toString();
  const age = formData.get("age")?.toString();
  const year = formData.get("year")?.toString();
  const batch = formData.get("batch")?.toString();
  const alcoholPercent = formData.get("alcoholPercent")?.toString();
  const proof = formData.get("proof")?.toString();
  const size = formData.get("size")?.toString();
  const color = formData.get("color")?.toString();
  const finishing = formData.get("finishing")?.toString();

  // invariant(name, `Name is required`);
  // invariant(type, `Type is required`);
  // invariant(distiller, `Distiller is required`);
  // invariant(bottler, `Bottler is required`);
  // invariant(producer, `Producer is required`);
  // invariant(country, `Country is required`);
  // invariant(region, `Region is required`);
  // invariant(price, `Price is required`);
  // invariant(age, `Age is required`);
  // invariant(year, `Year is required`);
  // invariant(batch, `Batch is required`);
  // invariant(alcoholPercent, `Alcohol Percent is required`);
  // invariant(proof, `Proof is required`);
  // invariant(size, `Size is required`);
  // invariant(color, `Color is required`);
  // invariant(finishing, `Finishing is required`);

  return redirect("/reviews/new/addImage");
};

export default function NewBottleInfoRoute() {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <div>
      <BottleForm state={state} changeHandler={stateSetter} />
    </div>
  );
}
