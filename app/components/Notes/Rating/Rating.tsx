import RatingSm from "./RatingSm";
import RatingMd from "./RatingMd";
import RatingLg from "./RatingLg";
import { FormState } from "~/routes/reviews/new";
import useBreakpoint from "~/utils/useBreakpoint";

interface RatingProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TestRating({ state, changeHandler }: RatingProps) {
  const breakpoint = useBreakpoint() as number;
  return (
    <div>
      {breakpoint >= 640 && breakpoint < 768 && (
        <div className="my-3">
          <RatingSm state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 768 && breakpoint < 1024 && (
        <div className="my-3 md:block">
          <RatingMd state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 1024 && (
        <div className="my-3 lg:block">
          <RatingLg state={state} changeHandler={changeHandler} />
        </div>
      )}
    </div>
  );
}
