import raspberry from "~/images/raspberry.webp";
import blackberry from "~/images/blackberry.webp";
import { FormState } from "~/routes/reviews/new";
import NoteInput from "~/components/Form/NoteInput/NoteInput";
import NoteInputCustom from "~/components/Form/NoteInputCustom/NoteInputCustom";

interface IFruitNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FruitNotes({ state, changeHandler }: IFruitNoteProps) {
  return (
    <>
      <h4>Fruit Notes</h4>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Cherry"
            emoji="🍒"
            name="cherry"
            value={state.cherry}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Strawberry"
            emoji="🍓"
            name="strawberry"
            value={state.strawberry}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            name="raspberry"
            labelName="Raspberry"
            value={state.raspberry}
            changeHandler={(e) => changeHandler(e)}
            noteSource={raspberry}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInputCustom
            name="blackberry"
            labelName="Blackberry"
            value={state.blackberry}
            changeHandler={(e) => changeHandler(e)}
            noteSource={blackberry}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Blueberry"
            emoji="🫐"
            name="blueberry"
            value={state.blueberry}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Apple"
            emoji="🍎"
            name="apple"
            value={state.apple}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Banana"
            emoji="🍌"
            name="banana"
            value={state.banana}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Grape"
            emoji="🍇"
            name="grape"
            value={state.grape}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Stone Fruit"
            emoji="🍑"
            name="stone"
            value={state.stone}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Citrus"
            emoji="🍋"
            name="citrus"
            value={state.citrus}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <NoteInput
            labelName="Tropical"
            emoji="🍍"
            name="tropical"
            value={state.tropical}
            changeHandler={(e) => changeHandler(e)}
          />
        </div>
      </div>
    </>
  );
}
