import EmojiTextInput from "~/components/EmojiTextInput";
import EmojiTextInputCustom from "~/components/EmojiTextInputCustom";
import leather from "~/images/leather.webp";
import smokey from "~/images/smokey.png";
import almond from "~/images/almond.png";
import pecan from "~/images/pecan.png";
import walnut from "~/images/walnut.webp";

interface EarthNotesProps {
  changeHandler: (e: any) => void;
}

export default function TestEarthyNotes({ changeHandler }: EarthNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Earthy</h5>
      <div className="md:flex md:justify-between">
        <EmojiTextInput
          name="coffee"
          labelName="Coffee"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="☕"
        />
        <EmojiTextInput
          name="tobacco"
          labelName="Tobacco Leaf"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🚬"
        />
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="leather"
            labelName="Leather"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="leather"
            noteSource={leather}
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="leather"
          labelName="Leather"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="leather"
          noteSource={leather}
        />

        <EmojiTextInput
          name="oak"
          labelName="Oak"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🪵"
        />
      </div>
      <div className="hidden lg:flex">
        <EmojiTextInput
          name="oak"
          labelName="Oak"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🪵"
        />
        <EmojiTextInput
          name="toasted"
          labelName="Toasted"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍞"
        />
        <EmojiTextInputCustom
          name="smokey"
          labelName="Smokey"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="smokey"
          noteSource={smokey}
        />
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="toasted"
          labelName="Toasted"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍞"
        />
        <EmojiTextInputCustom
          name="smokey"
          labelName="Smokey"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="smokey"
          noteSource={smokey}
        />
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="peanut"
          labelName="Peanut"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🥜"
        />
        <EmojiTextInputCustom
          name="almond"
          labelName="Almond"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="almond"
          noteSource={almond}
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <EmojiTextInput
          name="peanut"
          labelName="Peanut"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🥜"
        />
        <EmojiTextInputCustom
          name="almond"
          labelName="Almond"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="almond"
          noteSource={almond}
        />
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="pecan"
            labelName="Pecan"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="pecan"
            noteSource={pecan}
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="pecan"
          labelName="Pecan"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="pecan"
          noteSource={pecan}
        />
        <EmojiTextInputCustom
          name="walnut"
          labelName="Walnut"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="walnut"
          noteSource={walnut}
        />
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="oily"
          labelName="Oily"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🛢️"
        />
        <EmojiTextInput
          name="floral"
          labelName="Floral"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌹"
        />
      </div>
      <div className="md:hidden lg:flex">
        <div className="hidden md:block">
          <EmojiTextInputCustom
            name="walnut"
            labelName="Walnut"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="walnut"
            noteSource={walnut}
          />
        </div>
        <EmojiTextInput
          name="oily"
          labelName="Oily"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🛢️"
        />
        <EmojiTextInput
          name="floral"
          labelName="Floral"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🌹"
        />
      </div>
    </div>
  );
}
