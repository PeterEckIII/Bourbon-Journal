import NoteInput from "~/components/Form/NoteInput/NoteInput";
import { FormState } from "~/routes/reviews/new";

interface IRatingProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Rating({ state, changeHandler }: IRatingProps) {
  return (
    <>
      <h4>Rating</h4>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2">
          <NoteInput
            labelName="Value for Money"
            name="value"
            value={state.value}
            changeHandler={(e) => changeHandler(e)}
            emoji="💰"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2">
          <NoteInput
            labelName="Overall Rating"
            name="overallRating"
            value={state.overallRating}
            changeHandler={(e) => changeHandler(e)}
            emoji="💯"
          />
        </div>
      </div>
    </>
  );
}
