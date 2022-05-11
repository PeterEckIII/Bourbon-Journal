import cinnamon from "~/images/cinnamon.webp";
import pepper from "~/images/pepper.webp";
import anise from "~/images/anise.jpeg";
import mint from "~/images/mint.png";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput/TextReviewCustomInput";

interface SpiceNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpiceNotesSm({ state, changeHandler }: SpiceNoteProps) {
  return (
    <>
      <h5 className="text-lg underline">Spice</h5>
      <div className="flex flex-col">
        <TextReviewCustomInput
          noteSource={pepper}
          note="pepper"
          name="pepper"
          labelName="Black Pepper"
          value={state.pepper}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />

        <TextReviewCustomInput
          noteSource={cinnamon}
          note="cinnamon"
          name="cinnamon"
          labelName="Cinnamon"
          value={state.cinnamon}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />

        <TextReviewCustomInput
          noteSource={anise}
          note="bakingSpice"
          name="bakingSpice"
          labelName="Baking Spice"
          value={state.bakingSpice}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />

        <TextReviewInput
          name="herbal"
          labelName="Herbal"
          value={state.herbal}
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌿"
        />

        <TextReviewCustomInput
          noteSource={mint}
          note="mint"
          name="mint"
          labelName="Mint"
          value={state.mint}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </>
  );
}
