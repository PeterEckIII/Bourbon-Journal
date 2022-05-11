import molasses from "~/images/molasses.webp";
import toffee from "~/images/toffee.png";
import { FormState } from "~/routes/reviews/new";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput/TextReviewCustomInput";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";

interface SweetNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SweetNotesMd({ state, changeHandler }: SweetNoteProps) {
  return (
    <>
      <h5 className="text-lg underline">Sweet</h5>
      <div className="hidden md:flex md:flex-col lg:hidden">
        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Vanilla"
            emoji="🍦"
            name="vanilla"
            value={state.vanilla}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            labelName="Caramel"
            emoji="🍮"
            name="caramel"
            value={state.caramel}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            name="molasses"
            labelName="Molasses"
            value={state.molasses}
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🥞"
          />
          <TextReviewInput
            name="butterscotch"
            labelName="Butterscotch"
            value={state.butterscotch}
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🧈"
          />
        </div>
        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Honey"
            emoji="🍯"
            name="honey"
            value={state.honey}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            labelName="Chocolate"
            emoji="🍫"
            name="chocolate"
            value={state.chocolate}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            name="toffee"
            labelName="Toffee"
            value={state.toffee}
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍬"
          />
          <TextReviewInput
            labelName="Powdered Sugar"
            emoji="🥄"
            name="sugar"
            value={state.sugar}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
    </>
  );
}
