import React from "react";
import BottleConfirmation from "~/components/Form/Confirmation/BottleConfirmation/BottleConfirmation";
import NoteConfirmation from "~/components/Form/Confirmation/NoteConfirmation/NoteConfirmation";
import SettingConfirmation from "~/components/Form/Confirmation/SettingConfirmation/SettingConfirmation";
import { FormState } from "~/routes/reviews/new";

interface IAccordionProps {
  state: FormState;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Accordion({ state, changeHandler }: IAccordionProps) {
  return (
    <div className="my-4 flex w-full items-center justify-center rounded-md border-2 border-gray-200 bg-gradient-to-r p-4 shadow-xl">
      <div className="w-full divide-y divide-gray-200 border border-gray-200 bg-white sm:w-1/2 lg:w-96">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Bottle Details
          </summary>
          <BottleConfirmation state={state} changeHandler={changeHandler} />
        </details>
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4">
            Your Review
          </summary>
          <SettingConfirmation state={state} changeHandler={changeHandler} />
        </details>
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4">
            Tasting Notes
          </summary>
          <NoteConfirmation state={state} changeHandler={changeHandler} />
        </details>
      </div>
    </div>
  );
}
