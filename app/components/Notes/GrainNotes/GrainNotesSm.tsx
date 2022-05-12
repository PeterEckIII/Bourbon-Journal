import rye from "~/images/rye.png";
import wheat from "~/images/wheat.png";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput/TextReviewCustomInput";
interface GrainNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GrainNotesSm({ state, changeHandler }: GrainNoteProps) {
  return (
    <>
      <h5 className="text-lg underline">Grain</h5>
      <div className="flex flex-col">
        <TextReviewInput
          name="corn"
          value={state.corn}
          emoji="🌽"
          labelName="Corn"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewCustomInput
          name="rye"
          labelName="Rye"
          value={state.rye}
          changeHandler={(e) => changeHandler(e)}
          type="number"
          noteSource={rye}
          note="rye"
        />
        <TextReviewCustomInput
          name="wheat"
          labelName="Wheat"
          value={state.wheat}
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="wheat"
          noteSource={wheat}
        />
        <TextReviewInput
          name="malt"
          emoji="🍺"
          value={state.malt}
          labelName="Malt"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="dough"
          emoji="🥖"
          value={state.dough}
          labelName="Dough / Bread"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </>
  );
}
