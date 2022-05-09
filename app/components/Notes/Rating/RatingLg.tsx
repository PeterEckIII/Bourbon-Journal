import TextReviewInput from "~/components/Form/TextReviewInput";
import { FormState } from "~/routes/reviews/new";

interface RatingProps {
  state: FormState;
}

export default function RatingLg({ state }: RatingProps) {
  return (
    <>
      <h5 className="text-lg underline">Rating</h5>
      <div className="hidden lg:flex">
        <TextReviewInput
          labelName="Value for Money"
          name="value"
          value={state.value}
          type="number"
          emoji="💰"
        />
        <TextReviewInput
          labelName="Overall Rating"
          name="overallRating"
          value={state.overallRating}
          type="number"
          emoji="💯"
        />
      </div>
    </>
  );
}
