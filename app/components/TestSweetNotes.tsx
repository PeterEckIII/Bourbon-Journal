import EmojiTextInput from "~/components/EmojiTextInput";
import EmojiTextInputCustom from "~/components/EmojiTextInputCustom";
import molasses from "~/images/molasses.webp";
import toffee from "~/images/toffee.png";
import butter from "~/images/butter.png";

interface SweetNoteProps {
  changeHandler: (e: any) => void;
}

export default function TestSweetNotes({ changeHandler }: SweetNoteProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Sweet</h5>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInput
          name="vanilla"
          labelName="Vanilla"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍦"
        />
        <EmojiTextInput
          name="caramel"
          labelName="Caramel"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍮"
        />
      </div>
      {/* ON SMALL PLACE ONE TO A COLUMN */}
      {/* ON LARGE PLACE THREE TO A COLUMN */}
      <div className="md:hidden lg:flex lg:justify-between">
        <EmojiTextInput
          name="vanilla"
          labelName="Vanilla"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍦"
        />
        <EmojiTextInput
          name="caramel"
          labelName="Caramel"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🍮"
        />
        {/* PLACES VALUE IN THIRD COLUMN */}
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="molasses"
            labelName="Molasses"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="molasses"
            noteSource={molasses}
          />
        </div>
      </div>
      {/* IF MEDIUM MOVE RASPBERRY TO NEXT LINE AND ADD BLACKBERRY TO IT */}
      <div className="md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="molasses"
          labelName="Molasses"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="molasses"
          noteSource={molasses}
        />
        <EmojiTextInputCustom
          name="butterscotch"
          labelName="Butterscotch"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="butterscotch"
          noteSource={butter}
        />
      </div>
      {/* STOP ITERATION */}
      <div className="lg:flex lg:justify-between">
        <div className="hidden lg:block">
          <EmojiTextInputCustom
            name="butterscotch"
            labelName="Butterscotch"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            note="butterscotch"
            noteSource={butter}
          />
        </div>
        <div className="hidden md:flex md:justify-between lg:hidden">
          <EmojiTextInput
            name="honey"
            labelName="Honey"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍯"
          />
          <EmojiTextInput
            name="chocolate"
            labelName="Chocolate"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍫"
          />
        </div>
        <div className="md:hidden lg:flex">
          <EmojiTextInput
            name="honey"
            labelName="Honey"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍯"
          />
          <EmojiTextInput
            name="chocolate"
            labelName="Chocolate"
            changeHandler={(e) => changeHandler(e)}
            type="number"
            emoji="🍫"
          />
        </div>
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <EmojiTextInputCustom
          name="toffee"
          labelName="Toffee"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="toffee"
          noteSource={toffee}
        />
        <EmojiTextInput
          name="sugar"
          labelName="Confectioner's Sugar"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🥄"
        />
      </div>
      <div className="md:hidden lg:flex">
        <EmojiTextInputCustom
          name="toffee"
          labelName="Toffee"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          note="toffee"
          noteSource={toffee}
        />
        <EmojiTextInput
          name="sugar"
          labelName="Confectioner's Sugar"
          changeHandler={(e) => changeHandler(e)}
          type="number"
          emoji="🥄"
        />
      </div>
    </div>
  );
}
