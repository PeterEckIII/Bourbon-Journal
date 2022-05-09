import RatingSm from "./RatingSm";
import RatingMd from "./RatingMd";
import RatingLg from "./RatingLg";
import { FormState } from "~/routes/reviews/new";

interface RatingProps {
  state: FormState;
}

export default function TestRating({ state }: RatingProps) {
  return (
    <div className="my-3">
      <div className="md:hidden">
        <RatingSm state={state} />
      </div>
      <div className="hidden md:block lg:hidden">
        <RatingMd state={state} />
      </div>
      <div className="hidden lg:block">
        <RatingLg state={state} />
      </div>
    </div>
  );
}
