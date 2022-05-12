import cinnamon from "~/images/cinnamon.webp";
import pepper from "~/images/pepper.webp";
import anise from "~/images/anise.jpeg";
import mint from "~/images/mint.png";
import { FormState } from "~/routes/reviews/new";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput/TextReviewCustomInput";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";

interface SpiceNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpiceNotesMd({ state, changeHandler }: SpiceNoteProps) {
  return (
    <>
      <h5 className="text-lg underline">Spice</h5>
      <div className="hidden md:flex md:flex-col lg:hidden">
        <div className="hidden md:flex lg:hidden">
          <TextReviewCustomInput
            noteSource={pepper}
            note="pepper"
            name="pepper"
            labelName="Black Pepper"
            value={state.pepper}
            changeHandler={(e) => changeHandler(e)}
            type="text"
          />

          <TextReviewCustomInput
            noteSource={cinnamon}
            note="cinnamon"
            name="cinnamon"
            labelName="Cinnamon"
            value={state.cinnamon}
            changeHandler={(e) => changeHandler(e)}
            type="text"
          />
        </div>
        <div className="hidden md:flex lg:hidden">
          <TextReviewCustomInput
            noteSource={anise}
            note="bakingSpice"
            name="bakingSpice"
            labelName="Baking Spice"
            value={state.bakingSpice}
            changeHandler={(e) => changeHandler(e)}
            type="text"
          />

          <TextReviewInput
            name="herbal"
            labelName="Herbal"
            value={state.herbal}
            changeHandler={(e) => changeHandler(e)}
            type="text"
            emoji="🌿"
          />
        </div>
        <div className="hidden md:flex lg:hidden">
          <TextReviewCustomInput
            noteSource={mint}
            note="mint"
            name="mint"
            labelName="Mint"
            value={state.mint}
            changeHandler={(e) => changeHandler(e)}
            type="text"
          />
        </div>
      </div>
    </>
  );
}
