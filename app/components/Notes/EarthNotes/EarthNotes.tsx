import * as React from "react";
import { FormState } from "~/routes/reviews/new";

import NoteInput from "~/components/Form/NoteInput/NoteInput";
import NoteInputCustom from "~/components/Form/NoteInputCustom/NoteInputCustom";

import leather from "~/images/leather.webp";
import almond from "~/images/almond.png";
import pecan from "~/images/pecan.png";
import walnut from "~/images/walnut.webp";

interface IEarthNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EarthNotes({ state, changeHandler }: IEarthNoteProps) {
  return (
    <>
      <h4>Earth Notes</h4>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Coffee"
            emoji="☕"
            name="coffee"
            value={state.coffee}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Tobacco Leaf"
            emoji="🍁"
            name="tobacco"
            value={state.tobacco}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            name="leather"
            labelName="Leather"
            value={state.leather}
            changeHandler={(e) => changeHandler(e)}
            noteSource={leather}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Oak"
            emoji="🪵"
            name="oak"
            value={state.oak}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Toasted"
            emoji="🍞"
            name="toasted"
            value={state.toasted}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Smokey"
            emoji="💨"
            name="smokey"
            value={state.smokey}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Peanut"
            emoji="🥜"
            name="peanut"
            value={state.peanut}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            labelName="Almond"
            noteSource={almond}
            name="almond"
            value={state.almond}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            labelName="Pecan"
            noteSource={pecan}
            name="pecan"
            value={state.pecan}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            labelName="Walnut"
            noteSource={walnut}
            name="walnut"
            value={state.walnut}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Oily"
            emoji="🛢️"
            name="oily"
            value={state.oily}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Floral"
            emoji="🌹"
            name="floral"
            value={state.floral}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
      </div>
    </>
  );
}
