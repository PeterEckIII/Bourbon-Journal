import rye from "~/images/rye.png";
import wheat from "~/images/wheat.png";
import { FormState } from "~/routes/reviews/new";
import NoteInput from "~/components/Form/NoteInput/NoteInput";
import NoteInputCustom from "~/components/Form/NoteInputCustom/NoteInputCustom";

interface IGrainNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GrainNotes({ state, changeHandler }: IGrainNoteProps) {
  return (
    <>
      <h4>Grain Notes</h4>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="corn"
            value={state.corn}
            emoji="🌽"
            labelName="Corn"
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            name="rye"
            labelName="Rye"
            value={state.rye}
            changeHandler={(e) => changeHandler(e)}
            noteSource={rye}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            name="wheat"
            labelName="Wheat"
            value={state.wheat}
            changeHandler={(e) => changeHandler(e)}
            noteSource={wheat}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="malt"
            emoji="🍺"
            value={state.malt}
            labelName="Malt"
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="dough"
            emoji="🥖"
            value={state.dough}
            labelName="Dough / Bread"
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
      </div>
    </>
  );
}
