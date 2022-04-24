import TextReviewInput from "~/components/TextReviewInput";

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
        <TextReviewInput
          name="cherry"
          labelName="Cherry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="strawberry"
          labelName="Strawberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      {/* ON SMALL PLACE ONE TO A COLUMN */}
      {/* ON LARGE PLACE THREE TO A COLUMN */}
      <div className="md:hidden lg:flex lg:justify-between">
        <TextReviewInput
          name="cherry"
          labelName="Cherry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="strawberry"
          labelName="Strawberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        {/* PLACES VALUE IN THIRD COLUMN */}
        <div className="hidden lg:block">
          <TextReviewInput
            name="raspberry"
            labelName="Raspberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      {/* IF MEDIUM MOVE RASPBERRY TO NEXT LINE AND ADD BLACKBERRY TO IT */}
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="raspberry"
          labelName="Raspberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="blackberry"
          labelName="Blackberry"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      {/* STOP ITERATION */}
      <div className="lg:flex lg:justify-between">
        <div className="hidden lg:block">
          <TextReviewInput
            name="blackberry"
            labelName="Blackberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="hidden md:flex md:justify-between lg:hidden">
          <TextReviewInput
            name="blueberry"
            labelName="Blueberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            name="apple"
            labelName="Apple"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <div className="md:hidden lg:flex">
          <TextReviewInput
            name="blueberry"
            labelName="Blueberry"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
          <TextReviewInput
            name="apple"
            labelName="Apple"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="banana"
          labelName="Banana"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="grape"
          labelName="Grape"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <TextReviewInput
          name="banana"
          labelName="Banana"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="grape"
          labelName="Grape"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <div className="hidden lg:block">
          <TextReviewInput
            name="stone"
            labelName="Stone Fruit"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="stone"
          labelName="Stone Fruit"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="citrus"
          labelName="Citrus"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <TextReviewInput
          name="stone"
          labelName="Stone Fruit"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="citrus"
          labelName="Citrus"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <div className="hidden lg:block">
          <TextReviewInput
            name="tropical"
            labelName="Tropical"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <TextReviewInput
          name="tropical"
          labelName="Tropical"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </div>
  );
}
