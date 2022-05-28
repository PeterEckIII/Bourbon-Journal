import { Form } from "@remix-run/react";
import React from "react";
import { FormState } from "~/routes/reviews/new";
import TextareaInput from "../TextareaInput/TextareaInput";
import TextInput from "../TextInput/TextInput";

interface ISettingFormProps {
  state: FormState;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function SettingForm({
  state,
  changeHandler,
}: ISettingFormProps) {
  return (
    <Form method="post" className="flex w-full flex-col">
      <h2>Setting Information</h2>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-full">
          <TextInput
            labelName="Date"
            name="date"
            type="text"
            value={state.date}
            changeHandler={(e) => changeHandler(e)}
            emoji="📅"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            labelName="Color"
            name="color"
            type="text"
            value={state.color}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌈"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            labelName="Rest Time"
            name="restTime"
            type="text"
            value={state.restTime}
            changeHandler={(e) => changeHandler(e)}
            emoji="🛏️"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            labelName="Glassware"
            name="glassware"
            type="text"
            value={state.glassware}
            changeHandler={(e) => changeHandler(e)}
            emoji="🥃"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0">
          <TextInput
            labelName="Setting"
            name="setting"
            type="text"
            value={state.setting}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌆"
          />
        </div>
        <TextareaInput
          name="nose"
          labelName="Nose"
          value={state.nose}
          changeHandler={(e) => changeHandler(e)}
          emoji="👃"
        />
        <TextareaInput
          name="palate"
          labelName="Palate"
          value={state.palate}
          changeHandler={(e) => changeHandler(e)}
          emoji="👅"
        />
        <TextareaInput
          name="finish"
          labelName="Finish"
          value={state.finish}
          changeHandler={(e) => changeHandler(e)}
          emoji="😳"
        />
        <TextareaInput
          name="thoughts"
          labelName="Additional Thoughts"
          value={state.thoughts}
          changeHandler={(e) => changeHandler(e)}
          emoji="💭"
        />
      </div>
    </Form>
  );
}
