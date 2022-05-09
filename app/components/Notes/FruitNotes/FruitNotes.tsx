import { FormState } from "~/routes/reviews/new";
import FruitNotesSm from "./FruitNotesSm";
import FruitNotesMd from "./FruitNotesMd";
import FruitNotesLg from "./FruitNotesLg";

interface FruitNotesProps {
  state: FormState;
}

export default function FruitNotes({ state }: FruitNotesProps) {
  return (
    <div>
      <div className="my-3 md:hidden">
        <FruitNotesSm state={state} />
      </div>
      <div className="my-3 hidden md:block lg:hidden">
        <FruitNotesMd state={state} />
      </div>
      <div className="my-3 hidden lg:block">
        <FruitNotesLg state={state} />
      </div>
    </div>
  );
}
