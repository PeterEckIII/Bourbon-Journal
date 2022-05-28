import cinnamon from "~/images/cinnamon.webp";
import pepper from "~/images/pepper.webp";
import anise from "~/images/anise.jpeg";
import mint from "~/images/mint.png";
import { FormState } from "~/routes/reviews/new";
import NoteInput from "~/components/Form/NoteInput/NoteInput";
import NoteInputCustom from "~/components/Form/NoteInputCustom/NoteInputCustom";
import React from "react";

interface ISpiceNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpiceNotes({ state, changeHandler }: ISpiceNoteProps) {
  return (
    <>
      <h4>Spice Notes</h4>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            noteSource={pepper}
            name="pepper"
            labelName="Black Pepper"
            value={state.pepper}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            noteSource={cinnamon}
            name="cinnamon"
            labelName="Cinnamon"
            value={state.cinnamon}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            noteSource={anise}
            name="bakingSpice"
            labelName="Baking Spice"
            value={state.bakingSpice}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>

        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="herbal"
            labelName="Herbal"
            value={state.herbal}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌿"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            noteSource={mint}
            name="mint"
            labelName="Mint"
            value={state.mint}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
      </div>
    </>
  );
}
