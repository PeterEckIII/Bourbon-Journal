import TextReviewInput from "./TextReviewInput";

interface RatingProps {
  changeHandler: (e: any) => void;
}

export default function Rating({ changeHandler }: RatingProps) {
  return (
    <div className="my-3">
      <h5 className="text-lg underline">Rating</h5>
      <TextReviewInput
        name="value"
        labelName="Value for Money"
        changeHandler={(e) => changeHandler(e)}
        type="number"
      />

      <TextReviewInput
        name="overallRating"
        labelName="Overall Rating"
        changeHandler={(e) => changeHandler(e)}
        type="number"
      />
    </div>
  );
}
