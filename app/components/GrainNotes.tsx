import TextReviewInput from "./TextReviewInput";

interface GrainNotesProps {
  changeHandler: (e: any) => void;
}

export default function GrainNotes({ changeHandler }: GrainNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Grains</h5>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="corn"
          labelName="Corn"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="rye"
          labelName="Rye"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <TextReviewInput
          name="corn"
          labelName="Corn"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="rye"
          labelName="Rye"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <div className="hidden lg:block">
          <TextReviewInput
            name="wheat"
            labelName="Wheat"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="wheat"
          labelName="Wheat"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="malt"
          labelName="Malt"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="hidden lg:flex">
        <TextReviewInput
          name="malt"
          labelName="Malt"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="dough"
          labelName="Bread / Dough"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="lg:hidden">
        <TextReviewInput
          name="dough"
          labelName="Bread / Dough"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </div>
  );
}
