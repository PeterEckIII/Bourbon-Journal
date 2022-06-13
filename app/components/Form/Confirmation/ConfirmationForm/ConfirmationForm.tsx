import { Form, useOutletContext } from "@remix-run/react";
import { ContextType } from "~/routes/reviews/new";

import PrimaryButton from "../../PrimaryButton";
import BottleConfirmation from "../BottleConfirmation/BottleConfirmation";
import SettingConfirmation from "../SettingConfirmation/SettingConfirmation";
import NoteConfirmation from "../NoteConfirmation/NoteConfirmation";

export default function ConfirmationForm() {
  const { state, stateSetter } = useOutletContext<ContextType>();
  if (state === undefined || !stateSetter) {
    throw new Error(`Error with Outlet context!`);
  }
  return (
    <div className="flex w-full flex-col">
      <Form method="post">
        <BottleConfirmation state={state} changeHandler={stateSetter} />
        <SettingConfirmation state={state} changeHandler={stateSetter} />
        <NoteConfirmation state={state} changeHandler={stateSetter} />
        <input
          type="text"
          className="hidden"
          name="imageId"
          defaultValue={state.imageId}
        />
        <PrimaryButton callToAction="Submit Review" />
      </Form>
    </div>
  );
}
