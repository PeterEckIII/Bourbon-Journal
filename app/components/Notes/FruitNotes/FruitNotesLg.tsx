import raspberry from "~/images/raspberry.webp";
import blackberry from "~/images/blackberry.webp";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput/TextReviewCustomInput";

interface FruitNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FruitNotesLg({ state, changeHandler }: FruitNoteProps) {
  return (
    <>
      <h5 className="text-lg underline">Fruit</h5>
      <div>
        <div className="lg:flex">
          <TextReviewInput
            labelName="Cherry"
            emoji="🍒"
            name="cherry"
            value={state.cherry}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />

          <TextReviewInput
            labelName="Strawberry"
            emoji="🍓"
            name="strawberry"
            value={state.strawberry}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewCustomInput
            name="raspberry"
            labelName="Raspberry"
            value={state.raspberry}
            changeHandler={(e) => changeHandler(e)}
            type="number"
            noteSource={raspberry}
            note="raspberry"
          />
        </div>
        <div className="lg:flex">
          <TextReviewCustomInput
            name="blackberry"
            labelName="Blackberry"
            value={state.blackberry}
            changeHandler={(e) => changeHandler(e)}
            type="number"
            noteSource={blackberry}
            note="blackberry"
          />
          <TextReviewInput
            labelName="Blueberry"
            emoji="🫐"
            name="blueberry"
            value={state.blueberry}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />

          <TextReviewInput
            labelName="Apple"
            emoji="🍎"
            name="apple"
            value={state.apple}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="lg:flex">
          <TextReviewInput
            labelName="Banana"
            emoji="🍌"
            name="banana"
            value={state.banana}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            labelName="Grape"
            emoji="🍇"
            name="grape"
            value={state.grape}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />

          <TextReviewInput
            labelName="Stone Fruit"
            emoji="🍑"
            name="stone"
            value={state.stone}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="lg:flex">
          <TextReviewInput
            labelName="Citrus"
            emoji="🍋"
            name="citrus"
            value={state.citrus}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            labelName="Tropical"
            emoji="🍍"
            name="tropical"
            value={state.tropical}
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
    </>
  );
}
