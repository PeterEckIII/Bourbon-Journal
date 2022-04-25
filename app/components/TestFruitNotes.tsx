import EmojiTextInput from "~/components/EmojiTextInput";
import EmojiTextInputCustom from "~/components/EmojiTextInputCustom";
import raspberry from "~/images/raspberry.webp";
import blackberry from "~/images/blackberry.webp";

interface FruitNotesProps {
  changeHandler: (e: any) => void;
}

export default function FruitNotes({ changeHandler }: FruitNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Fruit</h5>
      {/* START ITERATION */}
      {/* ON MEDIUM PLACE TWO TO A COLUMN */}
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="cherry"
          labelName="Cherry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍒"
        />
        <EmojiTextInput
          name="strawberry"
          labelName="Strawberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍓"
        />
      </div>
      {/* ON SMALL PLACE ONE TO A COLUMN */}
      {/* ON LARGE PLACE THREE TO A COLUMN */}
      <div className="md:hidden lg:flex lg:justify-between">
        <EmojiTextInput
          name="cherry"
          labelName="Cherry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍒"
        />
        <EmojiTextInput
          name="strawberry"
          labelName="Strawberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍓"
        />
        {/* PLACES VALUE IN THIRD COLUMN */}
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="raspberry"
            labelName="Raspberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="raspberry"
            noteSource={raspberry}
          />
        </div>
      </div>
      {/* IF MEDIUM MOVE RASPBERRY TO NEXT LINE AND ADD BLACKBERRY TO IT */}
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="raspberry"
          labelName="Raspberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="raspberry"
          noteSource={raspberry}
        />
        <EmojiTextInputCustom
          name="blackberry"
          labelName="Blackberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="blackberry"
          noteSource={blackberry}
        />
      </div>
      {/* STOP ITERATION */}
      <div className="lg:flex lg:justify-between">
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="blackberry"
            labelName="Blackberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="blackberry"
            noteSource={blackberry}
          />
        </div>
        <div className="hidden md:flex md:justify-between lg:hidden">
          <EmojiTextInput
            name="blueberry"
            labelName="Blueberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🫐"
          />
          <EmojiTextInput
            name="apple"
            labelName="Apple"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍎"
          />
        </div>
        <div className="md:hidden lg:flex">
          <EmojiTextInput
            name="blueberry"
            labelName="Blueberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🫐"
          />
          <EmojiTextInput
            name="apple"
            labelName="Apple"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍎"
          />
        </div>
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="banana"
          labelName="Banana"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍌"
        />
        <EmojiTextInput
          name="grape"
          labelName="Grape"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍇"
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <EmojiTextInput
          name="banana"
          labelName="Banana"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍌"
        />
        <EmojiTextInput
          name="grape"
          labelName="Grape"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍇"
        />
        <div className="hidden lg:block">
          <EmojiTextInput
            name="stone"
            labelName="Stone Fruit"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍑"
          />
        </div>
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="stone"
          labelName="Stone Fruit"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍑"
        />
        <EmojiTextInput
          name="citrus"
          labelName="Citrus"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍋"
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <EmojiTextInput
          name="stone"
          labelName="Stone Fruit"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍑"
        />
        <EmojiTextInput
          name="citrus"
          labelName="Citrus"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍋"
        />
        <div className="hidden lg:block">
          <EmojiTextInput
            name="tropical"
            labelName="Tropical"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍍"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <EmojiTextInput
          name="tropical"
          labelName="Tropical"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍍"
        />
      </div>
    </div>
  );
}
