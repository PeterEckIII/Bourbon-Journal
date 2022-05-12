import { FormState } from "~/routes/reviews/new";
import SpiceNotesSm from "./SpiceNotesSm";
import SpiceNotesMd from "./SpiceNotesMd";
import SpiceNotesLg from "./SpiceNotesLg";
import useBreakpoint from "~/utils/useBreakpoint";

interface SpiceNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpiceNotes({ state, changeHandler }: SpiceNoteProps) {
  const breakpoint = useBreakpoint() as number;
  console.log(`Breakpoint: ${breakpoint}`);
  return (
    <div className="my-3">
      {breakpoint >= 640 && breakpoint < 768 && (
        <div className="my-3">
          <SpiceNotesSm state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 768 && breakpoint < 1024 && (
        <div className="my-3 md:block">
          <SpiceNotesMd state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 1024 && (
        <div className="my-3 lg:block">
          <SpiceNotesLg state={state} changeHandler={changeHandler} />
        </div>
      )}
    </div>
  );
}
