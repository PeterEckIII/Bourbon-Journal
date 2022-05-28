import { Form, useOutletContext } from "@remix-run/react";
import { ContextType } from "~/routes/reviews/new";
import EarthNotes from "~/components/Notes/EarthNotes/EarthNotes";
import FruitNotes from "~/components/Notes/FruitNotes/FruitNotes";
import PrimaryButton from "~/components/Form/PrimaryButton";
import GrainNotes from "~/components/Notes/GrainNotes/GrainNotes";
import SpiceNotes from "~/components/Notes/SpiceNotes/SpiceNotes";
import SweetNotes from "~/components/Notes/SweetNotes/SweetNotes";
import Rating from "~/components/Notes/Rating/Rating";

export default function NotesForm() {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with Outlet context!`);
  }

  return (
    <Form method="post" className="w-full max-w-xl">
      <EarthNotes state={state} changeHandler={stateSetter} />
      <FruitNotes state={state} changeHandler={stateSetter} />
      <GrainNotes state={state} changeHandler={stateSetter} />
      <SpiceNotes state={state} changeHandler={stateSetter} />
      <SweetNotes state={state} changeHandler={stateSetter} />
      <Rating state={state} changeHandler={stateSetter} />
      <PrimaryButton callToAction="Submit" />
    </Form>
  );
}
