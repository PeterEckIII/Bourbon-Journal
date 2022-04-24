import TextReviewInput from "./TextReviewInput";

interface SpiceNotesProps {
  changeHandler: (e: any) => void;
}

export default function SpiceNotes({ changeHandler }: SpiceNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Spices</h5>
      <div className="md:flex md:justify-between">
        <TextReviewInput
          name="pepper"
          labelName="Black Pepper"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="cinnamon"
          labelName="Cinnamon"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <div className="hidden lg:block">
          <TextReviewInput
            name="bakingSpice"
            labelName="Baking Spice"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="bakingSpice"
          labelName="Baking Spice"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="herbal"
          labelName="Herbal"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="hidden lg:flex">
        <TextReviewInput
          name="herbal"
          labelName="Herbal"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="mint"
          labelName="Mint"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="lg:hidden">
        <TextReviewInput
          name="mint"
          labelName="Mint"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </div>
  );
}
