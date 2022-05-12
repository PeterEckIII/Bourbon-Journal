import { FormState } from "~/routes/reviews/new";
import GrainNotesSm from "~/components/Notes/GrainNotes/GrainNotesSm";
import GrainNotesMd from "~/components/Notes/GrainNotes/GrainNotesMd";
import GrainNotesLg from "~/components/Notes/GrainNotes/GrainNotesLg";
import useBreakpoint from "~/utils/useBreakpoint";

interface GrainNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TestGrainNotes({
  state,
  changeHandler,
}: GrainNoteProps) {
  const breakpoint = useBreakpoint() as number;

  return (
    <div className="my-3">
      {breakpoint >= 640 && breakpoint < 768 && (
        <div className="my-3">
          <GrainNotesSm state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 768 && breakpoint < 1024 && (
        <div className="my-3 md:block">
          <GrainNotesMd state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 1024 && (
        <div className="my-3 lg:block">
          <GrainNotesLg state={state} changeHandler={changeHandler} />
        </div>
      )}
    </div>
  );
}
