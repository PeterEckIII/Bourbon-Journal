import { Form, useOutletContext } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";
import EarthNotes from "~/components/Notes/EarthNotes/EarthNotes";
import FruitNotes from "~/components/Notes/FruitNotes/FruitNotes";
import PrimaryButton from "~/components/Form/PrimaryButton";
import GrainNotes from "~/components/Notes/GrainNotes/GrainNotes";
import SpiceNotes from "~/components/Notes/SpiceNotes/SpiceNotes";
import SweetNotes from "~/components/Notes/SweetNotes/SweetNotes";
import Rating from "~/components/Notes/Rating/Rating";
import type { CustomFormData } from "~/utils/helpers.server";

interface INoteFormProps {
  formData: CustomFormData;
}

export default function NotesForm({ formData }: INoteFormProps) {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with Outlet context!`);
  }

  return (
    <Form method="post" className="w-full max-w-xl">
      <input type="hidden" name="id" value={formData?.redisId} />
      <EarthNotes
        state={state}
        changeHandler={stateSetter}
        formData={formData}
      />
      <FruitNotes
        state={state}
        changeHandler={stateSetter}
        formData={formData}
      />
      <GrainNotes
        state={state}
        changeHandler={stateSetter}
        formData={formData}
      />
      <SpiceNotes
        state={state}
        changeHandler={stateSetter}
        formData={formData}
      />
      <SweetNotes
        state={state}
        changeHandler={stateSetter}
        formData={formData}
      />
      <Rating state={state} changeHandler={stateSetter} formData={formData} />
      <PrimaryButton callToAction="Submit" />
    </Form>
  );
}
