import cinnamon from "~/images/cinnamon.webp";
import pepper from "~/images/pepper.webp";
import anise from "~/images/anise.jpeg";
import mint from "~/images/mint.png";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput";

interface SpiceProps {
  state: FormState;
}

export default function SpiceNotesLg({ state }: SpiceProps) {
  return (
    <>
      <h5 className="text-lg underline">Spice</h5>
      <div>
        <div className="lg:flex">
          <TextReviewCustomInput
            noteSource={pepper}
            note="pepper"
            name="pepper"
            labelName="Black Pepper"
            value={state.pepper}
            type="number"
          />

          <TextReviewCustomInput
            noteSource={cinnamon}
            note="cinnamon"
            name="cinnamon"
            labelName="Cinnamon"
            value={state.cinnamon}
            type="number"
          />

          <TextReviewCustomInput
            noteSource={anise}
            note="bakingSpice"
            name="bakingSpice"
            labelName="Baking Spice"
            value={state.bakingSpice}
            type="number"
          />
        </div>
        <div className="lg:flex">
          <TextReviewInput
            name="herbal"
            labelName="Herbal"
            value={state.herbal}
            type="number"
            emoji="🌿"
          />

          <TextReviewCustomInput
            noteSource={mint}
            note="mint"
            name="mint"
            labelName="Mint"
            value={state.mint}
            type="number"
          />
        </div>
      </div>
    </>
  );
}
