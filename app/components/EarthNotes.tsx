import TextReviewInput from "~/components/TextReviewInput";

interface EarthNotesProps {
  changeHandler: (e: any) => void;
}

export default function EarthNotes({ changeHandler }: EarthNotesProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Earthy</h5>
      <div className="md:flex md:justify-between">
        <TextReviewInput
          name="coffee"
          labelName="Coffee"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="tobacco"
          labelName="Tobacco Leaf"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <div className="hidden lg:block">
          <TextReviewInput
            name="leather"
            labelName="Leather"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="leather"
          labelName="Leather"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />

        <TextReviewInput
          name="oak"
          labelName="Oak"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="hidden lg:flex">
        <TextReviewInput
          name="oak"
          labelName="Oak"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="toasted"
          labelName="Toasted"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="smokey"
          labelName="Smokey"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="toasted"
          labelName="Toasted"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="smokey"
          labelName="Smokey"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="peanut"
          labelName="Peanut"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="almond"
          labelName="Almond"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:hidden lg:flex lg:justify-between">
        <TextReviewInput
          name="peanut"
          labelName="Peanut"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="almond"
          labelName="Almond"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <div className="hidden lg:block">
          <TextReviewInput
            name="pecan"
            labelName="Pecan"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
      </div>
      <div className="md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="pecan"
          labelName="Pecan"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="walnut"
          labelName="Walnut"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="hidden md:flex md:justify-between lg:hidden">
        <TextReviewInput
          name="oily"
          labelName="Oily"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="floral"
          labelName="Floral"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
      <div className="md:hidden lg:flex">
        <div className="hidden md:block">
          <TextReviewInput
            name="walnut"
            labelName="Walnut"
            changeHandler={(e) => changeHandler(e)}
            type="number"
          />
        </div>
        <TextReviewInput
          name="oily"
          labelName="Oily"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
        <TextReviewInput
          name="floral"
          labelName="Floral"
          changeHandler={(e) => changeHandler(e)}
          type="number"
        />
      </div>
    </div>
  );
}
