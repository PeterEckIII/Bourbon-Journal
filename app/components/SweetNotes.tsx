import TextReviewInput from "./TextReviewInput";

interface SweetNotesProps {
  changeHandler: (e: any) => void;
}

export default function SweetNotes({ changeHandler }: SweetNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Sweet</h5>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="vanilla"
          labelName="Vanilla"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="caramel"
          labelName="Caramel"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      {/* ON SMALL PLACE ONE TO A COLUMN */}
      {/* ON LARGE PLACE THREE TO A COLUMN */}
      <div className="md:hidden lg:flex lg:justify-between">
        <TextReviewInput
          name="vanilla"
          labelName="Vanilla"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="caramel"
          labelName="Caramel"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        {/* PLACES VALUE IN THIRD COLUMN */}
        <div className="hidden lg:block">
          <TextReviewInput
            name="molasses"
            labelName="Molasses"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      {/* IF MEDIUM MOVE RASPBERRY TO NEXT LINE AND ADD BLACKBERRY TO IT */}
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="molasses"
          labelName="Molasses"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="butterscotch"
          labelName="Butterscotch"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      {/* STOP ITERATION */}
      <div className="lg:flex lg:justify-between">
        <div className="hidden lg:block">
          <TextReviewInput
            name="butterscotch"
            labelName="Butterscotch"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="hidden md:flex md:justify-between lg:hidden">
          <TextReviewInput
            name="honey"
            labelName="Honey"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            name="chocolate"
            labelName="Chocolate"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="md:hidden lg:flex">
          <TextReviewInput
            name="honey"
            labelName="Honey"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            name="chocolate"
            labelName="Chocolate"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="toffee"
          labelName="Toffee"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="sugar"
          labelName="Confectioner's Sugar"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:hidden lg:flex">
        <TextReviewInput
          name="toffee"
          labelName="Toffee"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="sugar"
          labelName="Confectioner's Sugar"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </div>
  );
}
