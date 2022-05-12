import SweetNotesSm from "./SweetNotesSm";
import SweetNotesMd from "./SweetNotesMd";
import SweetNotesLg from "./SweetNotesLg";
import { FormState } from "~/routes/reviews/new";
import useBreakpoint from "~/utils/useBreakpoint";

interface SweetNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TestSweetNotes({
  state,
  changeHandler,
}: SweetNoteProps) {
  const breakpoint = useBreakpoint() as number;
  return (
    <div>
      {breakpoint >= 640 && breakpoint < 768 && (
        <div className="my-3">
          <SweetNotesSm state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 768 && breakpoint < 1024 && (
        <div className="my-3 md:block">
          <SweetNotesMd state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 1024 && (
        <div className="my-3 lg:block">
          <SweetNotesLg state={state} changeHandler={changeHandler} />
        </div>
      )}
    </div>
  );
}
