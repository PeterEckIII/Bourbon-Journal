import wheat from "~/images/wheat.png";
import rye from "~/images/rye.png";
import TextReviewInput from "~/components/Form/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput";
import { FormState } from "~/routes/reviews/new";

interface GrainProps {
  state: FormState;
}

export default function GrainNotesMd({ state }: GrainProps) {
  return (
    <>
      <h5 className="text-lg underline">Grain</h5>
      <div className="hidden md:flex md:flex-col lg:hidden">
        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            name="corn"
            value={state.corn}
            emoji="🌽"
            labelName="Corn"
            type="number"
          />
          <TextReviewCustomInput
            name="rye"
            labelName="Rye"
            value={state.rye}
            type="number"
            noteSource={rye}
            note="rye"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewCustomInput
            name="wheat"
            labelName="Wheat"
            value={state.wheat}
            type="number"
            note="wheat"
            noteSource={wheat}
          />
          <TextReviewInput
            name="malt"
            emoji="🍺"
            value={state.malt}
            labelName="Malt"
            type="number"
          />
        </div>

        <div className="hidden md:flex lg:hidden">
          <TextReviewInput
            name="dough"
            emoji="🥖"
            value={state.dough}
            labelName="Dough / Bread"
            type="number"
          />
        </div>
      </div>
    </>
  );
}
