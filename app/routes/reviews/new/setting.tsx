import { Form, useOutletContext } from "@remix-run/react";
import { ActionFunction, redirect } from "@remix-run/server-runtime";
import SettingForm from "~/components/Form/SettingForm/SettingForm";

import type { ContextType } from "~/routes/reviews/new";
import PrimaryButton from "~/components/Form/PrimaryButton";

export const action: ActionFunction = async ({ request }) => {
  // const formData = await request.formData();
  // const date = formData.get("date")?.toString();
  // const setting = formData.get("setting")?.toString();
  // const glassware = formData.get("glassware")?.toString();
  // const restTime = formData.get("restTime")?.toString();
  // const nose = formData.get("nose")?.toString();
  // const palate = formData.get("palate")?.toString();
  // const finish = formData.get("finish")?.toString();
  // const thoughts = formData.get("thoughts")?.toString();
  // invariant(date, `Date is required`);
  // invariant(setting, `Setting is required`);
  // invariant(glassware, `Glassware is required`);
  // invariant(restTime, `Rest Time is required`);
  // invariant(nose, `Nose is required`);
  // invariant(palate, `Palate is required`);
  // invariant(finish, `Finish is required`);
  // invariant(thoughts, `Thoughts is required`);

  return redirect("/reviews/new/notes");
};

export default function NewSettingRoute() {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <>
      <SettingForm state={state} changeHandler={stateSetter} />
    </>
    // <Form method="post">
    //   <div className="my-2 flex lg:flex-col">
    //     <TextReviewInput
    //       labelName="Date"
    //       name="date"
    //       type="text"
    //       value={state.date}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="📅"
    //     />
    //   </div>
    //   <div className="my-2 lg:flex lg:justify-between">
    //     <TextReviewInput
    //       labelName="Rest Time"
    //       name="restTime"
    //       type="text"
    //       value={state.restTime}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="🛏️"
    //     />
    //     <TextReviewInput
    //       labelName="Glassware"
    //       name="glassware"
    //       type="text"
    //       value={state.glassware}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="🥃"
    //     />
    //   </div>
    //   <div className="my-2 flex lg:flex-col">
    //     <TextReviewInput
    //       labelName="Setting"
    //       name="setting"
    //       type="text"
    //       value={state.setting}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="🌆"
    //     />
    //   </div>

    //   <div className="my-2">
    //     <TextareaReviewInput
    //       name="nose"
    //       labelName="Nose"
    //       value={state.nose}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="👃"
    //     />
    //     <TextareaReviewInput
    //       name="palate"
    //       labelName="Palate"
    //       value={state.palate}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="👅"
    //     />
    //     <TextareaReviewInput
    //       name="finish"
    //       labelName="Finish"
    //       value={state.finish}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="😳"
    //     />
    //     <TextareaReviewInput
    //       name="thoughts"
    //       labelName="Additional Thoughts"
    //       value={state.thoughts}
    //       changeHandler={(e) => stateSetter(e)}
    //       emoji="💭"
    //     />
    //   </div>
    //   <PrimaryButton callToAction="Next" />
    // </Form>
  );
}
