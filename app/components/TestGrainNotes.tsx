import EmojiTextInput from "~/components/EmojiTextInput";
import EmojiTextInputCustom from "~/components/EmojiTextInputCustom";
import rye from "~/images/rye.png";
import wheat from "~/images/wheat.png";

interface GrainNoteProps {
  changeHandler: (e: any) => void;
}

export default function TestGrainNotes({ changeHandler }: GrainNoteProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Grains</h5>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="corn"
          labelName="Corn"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌽"
        />
        <EmojiTextInputCustom
          name="rye"
          labelName="Rye"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="rye"
          noteSource={rye}
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <EmojiTextInput
          name="corn"
          labelName="Corn"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌽"
        />
        <EmojiTextInputCustom
          name="rye"
          labelName="Rye"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="rye"
          noteSource={rye}
        />
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="wheat"
            labelName="Wheat"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="wheat"
            noteSource={wheat}
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="wheat"
          labelName="Wheat"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="wheat"
          noteSource={wheat}
        />
        <EmojiTextInput
          name="malt"
          labelName="Malt"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍺"
        />
      </div>
      <div className="hidden lg:flex">
        <EmojiTextInput
          name="malt"
          labelName="Malt"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍺"
        />
        <EmojiTextInput
          name="dough"
          labelName="Bread / Dough"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🥖"
        />
      </div>
      <div className="lg:hidden">
        <EmojiTextInput
          name="dough"
          labelName="Bread / Dough"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🥖"
        />
      </div>
    </div>
  );
}
