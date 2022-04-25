import EmojiTextInput from "./EmojiTextInput";
import EmojiTextInputCustom from "./EmojiTextInputCustom";
import cinnamon from "~/images/cinnamon.webp";
import pepper from "~/images/pepper.webp";
import anise from "~/images/anise.jpeg";
import mint from "~/images/mint.png";

interface SpiceNotesProps {
  changeHandler: (e: any) => void;
}

export default function SpiceNotes({ changeHandler }: SpiceNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Spices</h5>
      <div className="md:flex md:justify-between">
        <EmojiTextInputCustom
          name="pepper"
          labelName="Black Pepper"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="pepper"
          noteSource={pepper}
        />
        <EmojiTextInputCustom
          name="cinnamon"
          labelName="Cinnamon"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="cinnamon"
          noteSource={cinnamon}
        />
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="bakingSpice"
            labelName="Baking Spice"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="baking spice"
            noteSource={anise}
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="bakingSpice"
          labelName="Baking Spice"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="baking spice"
          noteSource={anise}
        />
        <EmojiTextInput
          name="herbal"
          labelName="Herbal"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌿"
        />
      </div>
      <div className="hidden lg:flex">
        <EmojiTextInput
          name="herbal"
          labelName="Herbal"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌿"
        />
        <EmojiTextInputCustom
          name="mint"
          labelName="Mint"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="mint"
          noteSource={mint}
        />
      </div>
      <div className="lg:hidden">
        <EmojiTextInputCustom
          name="mint"
          labelName="Mint"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="mint"
          noteSource={mint}
        />
      </div>
    </div>
  );
}
