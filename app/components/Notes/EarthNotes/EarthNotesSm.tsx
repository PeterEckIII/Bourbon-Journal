import leather from "~/images/leather.webp";
import almond from "~/images/almond.png";
import pecan from "~/images/pecan.png";
import walnut from "~/images/walnut.webp";
import { FormState } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";
import TextReviewCustomInput from "~/components/Form/TextReviewCustomInput/TextReviewCustomInput";

interface EarthNotesProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EarthNotesSm({
  state,
  changeHandler,
}: EarthNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Earthy</h5>
      <div className="flex flex-col">
        <TextReviewInput
          labelName="Coffee"
          emoji="☕"
          name="coffee"
          value={state.coffee}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          labelName="Tobacco Leaf"
          emoji="🍁"
          name="tobacco"
          value={state.tobacco}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewCustomInput
          name="leather"
          labelName="Leather"
          value={state.leather}
          changeHandler={(e) => changeHandler(e)}
          type="number"
          noteSource={leather}
          note="leather"
        />
        <TextReviewInput
          labelName="Oak"
          emoji="🪵"
          name="oak"
          value={state.oak}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          labelName="Toasted"
          emoji="🍞"
          name="toasted"
          value={state.toasted}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />

        <TextReviewInput
          labelName="Smokey"
          emoji="💨"
          name="smokey"
          value={state.smokey}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          labelName="Peanut"
          emoji="🥜"
          name="peanut"
          value={state.peanut}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewCustomInput
          labelName="Almond"
          note="almond"
          noteSource={almond}
          name="almond"
          value={state.almond}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewCustomInput
          labelName="Pecan"
          note="pecan"
          noteSource={pecan}
          name="pecan"
          value={state.pecan}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewCustomInput
          labelName="Walnut"
          note="walnut"
          noteSource={walnut}
          name="walnut"
          value={state.walnut}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          labelName="Oily"
          emoji="🛢️"
          name="oily"
          value={state.oily}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          labelName="Floral"
          emoji="🌹"
          name="floral"
          value={state.floral}
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </div>
  );
}
