import raspberry from "~/images/raspberry.webp";
import blackberry from "~/images/blackberry.webp";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput";

interface FruitNotesProps {
  state: FormState;
}

export default function FruitNotesMd({ state }: FruitNotesProps) {
  return (
    <>
      <h5 className="text-lg underline">Fruit</h5>
      <div className="hidden md:flex md:flex-col lg:hidden">
        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Cherry"
            emoji="🍒"
            name="cherry"
            value={state.cherry}
            type="number"
          />

          <TextReviewInput
            labelName="Strawberry"
            emoji="🍓"
            name="strawberry"
            value={state.strawberry}
            type="number"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewCustomInput
            name="raspberry"
            labelName="Raspberry"
            value={state.raspberry}
            type="number"
            noteSource={raspberry}
            note="raspberry"
          />
          <TextReviewCustomInput
            name="blackberry"
            labelName="Blackberry"
            value={state.blackberry}
            type="number"
            noteSource={blackberry}
            note="blackberry"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Blueberry"
            emoji="🫐"
            name="blueberry"
            value={state.blueberry}
            type="number"
          />

          <TextReviewInput
            labelName="Apple"
            emoji="🍎"
            name="apple"
            value={state.apple}
            type="number"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Banana"
            emoji="🍌"
            name="banana"
            value={state.banana}
            type="number"
          />
          <TextReviewInput
            labelName="Grape"
            emoji="🍇"
            name="grape"
            value={state.grape}
            type="number"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Stone Fruit"
            emoji="🍑"
            name="stone"
            value={state.stone}
            type="number"
          />

          <TextReviewInput
            labelName="Citrus"
            emoji="🍋"
            name="citrus"
            value={state.citrus}
            type="number"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            labelName="Tropical"
            emoji="🍍"
            name="tropical"
            value={state.tropical}
            type="number"
          />
        </div>
      </div>
    </>
  );
}
