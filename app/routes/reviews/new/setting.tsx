import { Form, useOutletContext } from "@remix-run/react";
import { ActionFunction, redirect } from "@remix-run/server-runtime";
import TextareaReviewInput from "~/components/TextareaReviewInput";
import TextReviewInput from "~/components/TextReviewInput";
import invariant from "tiny-invariant";

import type { ContextType } from "~/routes/reviews/new";

// type ActionData = {
//   errors?: {
//     date?: string;
//     setting?: string;
//     glassware?: string;
//     restTime?: string;
//     nose?: string;
//     palate?: string;
//     finish?: string;
//     thoughts?: string;
//   };
// };

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const date = formData.get("date")?.toString();
  const setting = formData.get("setting")?.toString();
  const glassware = formData.get("glassware")?.toString();
  const restTime = formData.get("restTime")?.toString();
  const nose = formData.get("nose")?.toString();
  const palate = formData.get("palate")?.toString();
  const finish = formData.get("finish")?.toString();
  const thoughts = formData.get("thoughts")?.toString();
  invariant(date, `Date is required`);
  invariant(setting, `Setting is required`);
  invariant(glassware, `Glassware is required`);
  invariant(restTime, `Rest Time is required`);
  invariant(nose, `Nose is required`);
  invariant(palate, `Palate is required`);
  invariant(finish, `Finish is required`);
  invariant(thoughts, `Thoughts is required`);

  return redirect("/reviews/new/notes");
};

export default function NewSettingRoute() {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <Form method="post">
      <div className="my-2 flex lg:flex-col">
        <TextReviewInput
          labelName="Date"
          name="date"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
      </div>
      <div className="my-2 lg:flex lg:justify-between">
        <TextReviewInput
          labelName="Rest Time"
          name="restTime"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
        <TextReviewInput
          labelName="Glassware"
          name="glassware"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
      </div>
      <div className="my-2 flex lg:flex-col">
        <TextReviewInput
          labelName="Setting"
          name="setting"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
      </div>

      <div className="my-2">
        <TextareaReviewInput
          name="nose"
          labelName="Nose"
          changeHandler={(e) => stateSetter(e)}
        />
        <TextareaReviewInput
          name="palate"
          labelName="Palate"
          changeHandler={(e) => stateSetter(e)}
        />
        <TextareaReviewInput
          name="finish"
          labelName="Finish"
          changeHandler={(e) => stateSetter(e)}
        />
        <TextareaReviewInput
          name="thoughts"
          labelName="Additional Thoughts"
          changeHandler={(e) => stateSetter(e)}
        />
      </div>
      <div className="my-2 text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Next
        </button>
      </div>
    </Form>
  );
}
