import { Form } from "@remix-run/react";
import React from "react";
import type { FormState } from "~/routes/reviews/new";
import type { CustomFormData } from "~/utils/helpers.server";
import PrimaryButton from "../PrimaryButton";
import TextareaInput from '~/components/UI/Inputs/TextareaInput/TextareaInput';
import TextInput from "~/components/UI/Inputs/TextInput/TextInput";

interface ISettingFormProps {
  state: FormState;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: CustomFormData;
  formState: string;
}

export default function SettingForm({
  state,
  changeHandler,
  formData,
  formState,
}: ISettingFormProps) {
  return (
    <Form method="post" className="flex w-full flex-col">
      <h2>Setting Information</h2>
      <input type="hidden" name="id" value={formData?.redisId} />
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-full">
          <TextInput
            labelName="Date"
            name="date"
            type="text"
            value={state.date}
            defaultValue={formData?.date}
            changeHandler={(e) => changeHandler(e)}
            emoji="📅"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            labelName="Rest Time"
            name="restTime"
            type="text"
            value={state.restTime}
            defaultValue={formData?.restTime}
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
            defaultValue={formData?.glassware}
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
            defaultValue={formData?.setting}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌆"
          />
        </div>
        <TextareaInput
          name="nose"
          labelName="Nose"
          value={state.nose}
          defaultValue={formData?.nose}
          changeHandler={(e) => changeHandler(e)}
          emoji="👃"
        />
        <TextareaInput
          name="palate"
          labelName="Palate"
          value={state.palate}
          defaultValue={formData?.palate}
          changeHandler={(e) => changeHandler(e)}
          emoji="👅"
        />
        <TextareaInput
          name="finish"
          labelName="Finish"
          value={state.finish}
          defaultValue={formData?.finish}
          changeHandler={(e) => changeHandler(e)}
          emoji="😳"
        />
        <TextareaInput
          name="thoughts"
          labelName="Additional Thoughts"
          value={state.thoughts}
          defaultValue={formData?.thoughts}
          changeHandler={(e) => changeHandler(e)}
          emoji="💭"
        />
      </div>
      <PrimaryButton
        callToAction={formState === "submitting" ? "Loading..." : "Next"}
      />
    </Form>
  );
}
