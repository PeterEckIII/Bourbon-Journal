import { redirect } from "@remix-run/server-runtime";
import type { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";
import BottleForm from "~/components/Form/BottleForm/BottleForm";
import {
  getDataFromRedis,
  pollForKeys,
  saveToRedis,
} from "~/utils/redis.server";
import { generateCode } from "~/utils/helpers.server";
import type { CustomFormData } from "~/utils/helpers.server";
import { v4 as uuid } from "uuid";
import { getSession } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const distiller = formData.get("distiller")?.toString();
  const bottler = formData.get("bottler")?.toString();
  const producer = formData.get("producer")?.toString();
  const country = formData.get("country")?.toString();
  const region = formData.get("region")?.toString();
  const price = formData.get("price")?.toString();
  const age = formData.get("age")?.toString();
  const year = formData.get("year")?.toString();
  const batch = formData.get("batch")?.toString();
  const alcoholPercent = formData.get("alcoholPercent")?.toString();
  const proof = formData.get("proof")?.toString();
  const size = formData.get("size")?.toString();
  const color = formData.get("color")?.toString();
  const finishing = formData.get("finishing")?.toString();

  if (
    typeof name !== "string" ||
    typeof type !== "string" ||
    typeof distiller !== "string" ||
    typeof producer !== "string" ||
    typeof bottler !== "string" ||
    typeof country !== "string" ||
    typeof region !== "string" ||
    typeof price !== "string" ||
    typeof age !== "string" ||
    typeof year !== "string" ||
    typeof batch !== "string" ||
    typeof alcoholPercent !== "string" ||
    typeof proof !== "string" ||
    typeof size !== "string" ||
    typeof color !== "string" ||
    typeof finishing !== "string"
  ) {
    throw Error(`Invalid input in bottle form!`);
  }

  const formId = formData.get("id");
  let id = "";

  if (typeof formId === "string" && formId !== "") {
    console.log(formId);
    id = formId;

    const formDataObject = await getDataFromRedis(id);
    if (!formDataObject) {
      throw Error(`Form data not found`);
    }

    formDataObject.name = name;
    formDataObject.type = type;
    formDataObject.distiller = distiller;
    formDataObject.producer = producer;
    formDataObject.bottler = bottler;
    formDataObject.country = country;
    formDataObject.region = region;
    formDataObject.price = price;
    formDataObject.age = age;
    formDataObject.year = year;
    formDataObject.batch = batch;
    formDataObject.alcoholPercent = alcoholPercent;
    formDataObject.proof = proof;
    formDataObject.size = size;
    formDataObject.color = color;
    formDataObject.finishing = finishing;

    await saveToRedis(formDataObject);
  } else {
    id = generateCode(6);

    const formDataObject: CustomFormData = {
      redisId: id,
      name,
      type,
      distiller,
      producer,
      bottler,
      country,
      region,
      price,
      age,
      year,
      batch,
      alcoholPercent,
      proof,
      size,
      color,
      finishing,
    };

    await saveToRedis(formDataObject);
  }
  return redirect(`/reviews/new/addImage?id=${id}`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (typeof id !== "string" || !id) {
    return null;
  }

  const formData = await getDataFromRedis(id);

  if (!formData) {
    return null;
  }

  return formData;
};

export default function NewBottleInfoRoute() {
  const data = useLoaderData<CustomFormData | null>();
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <div>
      <BottleForm formData={data} state={state} changeHandler={stateSetter} />
    </div>
  );
}
