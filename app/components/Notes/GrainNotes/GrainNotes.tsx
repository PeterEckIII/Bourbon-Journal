import { FormState } from "~/routes/reviews/new";
import GrainNotesSm from "~/components/Notes/GrainNotes/GrainNotesSm";
import GrainNotesMd from "~/components/Notes/GrainNotes/GrainNotesMd";
import GrainNotesLg from "~/components/Notes/GrainNotes/GrainNotesLg";

interface GrainNoteProps {
  state: FormState;
}

export default function TestGrainNotes({ state }: GrainNoteProps) {
  return (
    <div className="my-3">
      <div className="md:hidden">
        <GrainNotesSm state={state} />
      </div>
      <div className="hidden md:block lg:hidden">
        <GrainNotesMd state={state} />
      </div>
      <div className="hidden lg:block">
        <GrainNotesLg state={state} />
      </div>
    </div>
  );
}
