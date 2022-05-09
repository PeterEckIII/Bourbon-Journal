import { FormState } from "~/routes/reviews/new";
import EarthNotesSm from "~/components/Notes/EarthNotes/EarthNotesSm";
import EarthNotesMd from "~/components/Notes/EarthNotes/EarthNotesMd";
import EarthNotesLg from "~/components/Notes/EarthNotes/EarthNotesLg";

interface EarthNotesProps {
  state: FormState;
}

export default function TestEarthyNotes({ state }: EarthNotesProps) {
  return (
    <div>
      <div className="md:hidden">
        <EarthNotesSm state={state} />
      </div>
      <div className="hidden md:block lg:hidden">
        <EarthNotesMd state={state} />
      </div>
      <div className="hidden lg:flex">
        <EarthNotesLg state={state} />
      </div>
    </div>
  );
}
