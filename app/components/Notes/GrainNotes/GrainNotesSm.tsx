import rye from "~/images/rye.png";
import wheat from "~/images/wheat.png";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput";

interface GrainNoteProps {
  state: FormState;
}

export default function GrainNotesSm({ state }: GrainNoteProps) {
  return (
    <>
      <h5 className="text-lg underline">Grain</h5>
      <div className="flex flex-col">
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
    </>
  );
}
