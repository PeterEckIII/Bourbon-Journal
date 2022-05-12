import { FormState } from "~/routes/reviews/new";
import FruitNotesSm from "./FruitNotesSm";
import FruitNotesMd from "./FruitNotesMd";
import FruitNotesLg from "./FruitNotesLg";
import useBreakpoint from "~/utils/useBreakpoint";
import React from "react";

interface FruitNoteProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FruitNotes({ state, changeHandler }: FruitNoteProps) {
  const breakpoint = useBreakpoint() as number;
  return (
    <div>
      {breakpoint >= 640 && breakpoint < 768 && (
        <div className="my-3">
          <FruitNotesSm state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 768 && breakpoint < 1024 && (
        <div className="my-3 md:block">
          <FruitNotesMd state={state} changeHandler={changeHandler} />
        </div>
      )}
      {breakpoint >= 1024 && (
        <div className="my-3 lg:block">
          <FruitNotesLg state={state} changeHandler={changeHandler} />
        </div>
      )}
    </div>
  );
}
