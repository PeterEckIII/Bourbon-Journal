import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";
import { FormState } from "~/routes/reviews/new";

interface RatingProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RatingMd({ state, changeHandler }: RatingProps) {
  return (
    <>
      <h5 className="text-lg underline">Rating</h5>
      <div className="hidden md:flex md:flex-col">
        <TextReviewInput
          labelName="Value for Money"
          name="value"
          value={state.value}
          type="number"
          changeHandler={(e) => changeHandler(e)}
          emoji="💰"
        />
        <TextReviewInput
          labelName="Overall Rating"
          name="overallRating"
          value={state.overallRating}
          type="number"
          changeHandler={(e) => changeHandler(e)}
          emoji="💯"
        />
      </div>
    </>
  );
}
