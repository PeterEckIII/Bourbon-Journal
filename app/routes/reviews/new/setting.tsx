import { useLoaderData, useOutletContext } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import type { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import SettingForm from "~/components/Form/SettingForm/SettingForm";

import type { ContextType } from "~/routes/reviews/new";
import {
  getDataFromRedis,
  requireFormData,
  saveToRedis,
} from "~/utils/redis.server";
import type { CustomFormData } from "~/utils/helpers.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const redisId = formData.get("id")?.toString();
  const date = formData.get("date")?.toString();
  const setting = formData.get("setting")?.toString();
  const glassware = formData.get("glassware")?.toString();
  const restTime = formData.get("restTime")?.toString();
  const nose = formData.get("nose")?.toString();
  const palate = formData.get("palate")?.toString();
  const finish = formData.get("finish")?.toString();
  const thoughts = formData.get("thoughts")?.toString();

  if (
    typeof redisId !== "string" ||
    typeof date !== "string" ||
    typeof setting !== "string" ||
    typeof glassware !== "string" ||
    typeof restTime !== "string" ||
    typeof nose !== "string" ||
    typeof palate !== "string" ||
    typeof finish !== "string" ||
    typeof thoughts !== "string"
  ) {
    throw new Error(`Invalid inputs on Settings form!`);
  }

  const customFormData = await getDataFromRedis(redisId);

  if (!customFormData) {
    throw Error(`Form data note found!`);
  }

  customFormData.date = date;
  customFormData.setting = setting;
  customFormData.glassware = glassware;
  customFormData.restTime = restTime;
  customFormData.nose = nose;
  customFormData.palate = palate;
  customFormData.finish = finish;
  customFormData.thoughts = thoughts;

  saveToRedis(customFormData);

  return redirect(`/reviews/new/notes?id=${customFormData.redisId}`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const formData = await requireFormData(request);
  return formData;
};

export default function NewSettingRoute() {
  const formData = useLoaderData<CustomFormData>();
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <>
      <SettingForm
        formData={formData}
        state={state}
        changeHandler={stateSetter}
      />
    </>
  );
}
