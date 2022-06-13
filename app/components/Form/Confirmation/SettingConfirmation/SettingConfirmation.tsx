import * as React from "react";
import { FormState } from "~/routes/reviews/new";
import DefaultInput from "../DefaultInput/DefaultInput";
import DefaultTextarea from "../DefaultTextarea/DefaultTextarea";

interface ISettingConfirmationProps {
  state: FormState;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function SettingConfirmation({
  state,
  changeHandler,
}: ISettingConfirmationProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          label="Date"
          name="date"
          type="text"
          defaultValue={state.date}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0 ">
        <DefaultInput
          label="Rest Time"
          name="restTime"
          type="text"
          defaultValue={state.restTime}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0 ">
        <DefaultInput
          label="Glassware"
          name="glassware"
          type="text"
          defaultValue={state.glassware}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          label="Setting"
          name="setting"
          type="text"
          defaultValue={state.setting}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <DefaultTextarea
        name="nose"
        label="Nose"
        defaultValue={state.nose}
        changeHandler={(e) => changeHandler(e)}
      />
      <DefaultTextarea
        name="palate"
        label="Palate"
        defaultValue={state.palate}
        changeHandler={(e) => changeHandler(e)}
      />
      <DefaultTextarea
        name="finish"
        label="Finish"
        defaultValue={state.finish}
        changeHandler={(e) => changeHandler(e)}
      />
      <DefaultTextarea
        name="thoughts"
        label="Additional Thoughts"
        defaultValue={state.thoughts}
        changeHandler={(e) => changeHandler(e)}
      />
    </div>
  );
}
