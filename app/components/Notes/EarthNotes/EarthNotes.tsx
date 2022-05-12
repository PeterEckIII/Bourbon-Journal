import { FormState } from "~/routes/reviews/new";
import EarthNotesSm from "~/components/Notes/EarthNotes/EarthNotesSm";
import EarthNotesMd from "~/components/Notes/EarthNotes/EarthNotesMd";
import EarthNotesLg from "~/components/Notes/EarthNotes/EarthNotesLg";
import useBreakpoint from "~/utils/useBreakpoint";

interface EarthNotesProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TestEarthyNotes({
  state,
  changeHandler,
}: EarthNotesProps) {
  const breakpoint = useBreakpoint() as number;
  return (
    <div className="my-3">
      {breakpoint >= 640 && breakpoint < 768 && (
        <div className="my-3">
          <EarthNotesSm state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 768 && breakpoint < 1024 && (
        <div className="my-3 md:block">
          <EarthNotesMd state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 1024 && (
        <div className="my-3 lg:block">
          <EarthNotesLg state={state} changeHandler={changeHandler} />
        </div>
      )}
    </div>
  );
}
