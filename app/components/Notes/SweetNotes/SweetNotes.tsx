import SweetNotesSm from "./SweetNotesSm";
import SweetNotesMd from "./SweetNotesMd";
import SweetNotesLg from "./SweetNotesLg";
import { FormState } from "~/routes/reviews/new";

interface SweetNoteProps {
  state: FormState;
}

export default function TestSweetNotes({ state }: SweetNoteProps) {
  return (
    <div>
      <div className="my-3 md:hidden">
        <SweetNotesSm state={state} />
      </div>
      <div className="my-3 hidden md:block lg:hidden">
        <SweetNotesMd state={state} />
      </div>
      <div className="my-3 hidden lg:block">
        <SweetNotesLg state={state} />
      </div>
    </div>
  );
}
