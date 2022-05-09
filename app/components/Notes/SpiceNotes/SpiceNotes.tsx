import { FormState } from "~/routes/reviews/new";
import SpiceNotesSm from "./SpiceNotesSm";
import SpiceNotesMd from "./SpiceNotesMd";
import SpiceNotesLg from "./SpiceNotesLg";

interface SpiceNotesProps {
  state: FormState;
}

export default function SpiceNotes({ state }: SpiceNotesProps) {
  return (
    <div className="my-3">
      <div className="my-3 md:hidden">
        <SpiceNotesSm state={state} />
      </div>
      <div className="my-3 hidden md:block lg:hidden">
        <SpiceNotesMd state={state} />
      </div>
      <div className="my-3 hidden lg:block">
        <SpiceNotesLg state={state} />
      </div>
    </div>
  );
}
