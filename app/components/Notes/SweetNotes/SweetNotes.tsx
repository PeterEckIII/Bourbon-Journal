import { FormState } from "~/routes/reviews/new";
import NoteInput from "~/components/Form/NoteInput/NoteInput";

interface ISweetNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SweetNotes({ state, changeHandler }: ISweetNoteProps) {
  return (
    <>
      <h4>Sweet Notes</h4>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Vanilla"
            emoji="🍦"
            name="vanilla"
            value={state.vanilla}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Caramel"
            emoji="🍮"
            name="caramel"
            value={state.caramel}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="molasses"
            labelName="Molasses"
            value={state.molasses}
            changeHandler={(e) => changeHandler(e)}
            emoji="🥞"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="butterscotch"
            labelName="Butterscotch"
            value={state.butterscotch}
            changeHandler={(e) => changeHandler(e)}
            emoji="🧈"
          />
        </div>

        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Honey"
            emoji="🍯"
            name="honey"
            value={state.honey}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Chocolate"
            emoji="🍫"
            name="chocolate"
            value={state.chocolate}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            name="toffee"
            labelName="Toffee"
            value={state.toffee}
            changeHandler={(e) => changeHandler(e)}
            emoji="🍬"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Powdered Sugar"
            emoji="🥄"
            name="sugar"
            value={state.sugar}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
      </div>
    </>
  );
}
