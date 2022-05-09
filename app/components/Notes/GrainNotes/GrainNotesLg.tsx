import wheat from "~/images/wheat.png";
import rye from "~/images/rye.png";
import TextReviewInput from "~/components/Form/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput";
import { FormState } from "~/routes/reviews/new";

interface GrainProps {
  state: FormState;
}

export default function GrainNotesLg({ state }: GrainProps) {
  return (
    <>
      <h5 className="text-lg underline">Grain</h5>
      <div>
        <div className="lg:flex">
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
          <TextReviewCustomInput
            name="wheat"
            labelName="Wheat"
            value={state.wheat}
            type="number"
            note="wheat"
            noteSource={wheat}
          />
        </div>
        <div className="lg:flex">
          <TextReviewInput
            name="malt"
            emoji="🍺"
            value={state.malt}
            labelName="Malt"
            type="number"
          />
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
