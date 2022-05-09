import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput";

interface SweetProps {
  state: FormState;
}

export default function SweetNotesLg({ state }: SweetProps) {
  return (
    <>
      <h5 className="text-lg underline">Sweet</h5>
      <div>
        <div className="lg:flex">
          <TextReviewInput
            labelName="Vanilla"
            emoji="🍦"
            name="vanilla"
            value={state.vanilla}
            type="number"
          />
          <TextReviewInput
            labelName="Caramel"
            emoji="🍮"
            name="caramel"
            value={state.caramel}
            type="number"
          />
          <TextReviewInput
            name="molasses"
            labelName="Molasses"
            value={state.molasses}
            type="number"
            emoji="🥞"
          />
        </div>
        <div className="lg:flex">
          <TextReviewInput
            name="butterscotch"
            labelName="Butterscotch"
            value={state.butterscotch}
            type="number"
            emoji="🧈"
          />
          <TextReviewInput
            labelName="Honey"
            emoji="🍯"
            name="honey"
            value={state.honey}
            type="number"
          />
          <TextReviewInput
            labelName="Chocolate"
            emoji="🍫"
            name="chocolate"
            value={state.chocolate}
            type="number"
          />
        </div>
        <div className="lg:flex">
          <TextReviewInput
            name="toffee"
            labelName="Toffee"
            value={state.toffee}
            type="number"
            emoji="🍬"
          />
          <TextReviewInput
            labelName="Powdered Sugar"
            emoji="🥄"
            name="sugar"
            value={state.sugar}
            type="number"
          />
        </div>
      </div>
    </>
  );
}
