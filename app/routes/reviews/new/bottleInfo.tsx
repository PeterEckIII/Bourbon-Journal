import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { Form, useOutletContext } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";
import TextReviewInput from "~/components/Form/TextReviewInput/TextReviewInput";
import invariant from "tiny-invariant";
import PrimaryButton from "~/components/Form/PrimaryButton";

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

  invariant(name, `Name is required`);
  invariant(type, `Type is required`);
  invariant(distiller, `Distiller is required`);
  invariant(bottler, `Bottler is required`);
  invariant(producer, `Producer is required`);
  invariant(country, `Country is required`);
  invariant(region, `Region is required`);
  invariant(price, `Price is required`);
  invariant(age, `Age is required`);
  invariant(year, `Year is required`);
  invariant(batch, `Batch is required`);
  invariant(alcoholPercent, `Alcohol Percent is required`);
  invariant(proof, `Proof is required`);
  invariant(size, `Size is required`);
  invariant(color, `Color is required`);
  invariant(finishing, `Finishing is required`);

  return redirect("/reviews/new/addImage");
};

export default function NewBottleInfoRoute() {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <Form method="post" className="flex-col lg:flex">
      <div className="my-2 flex lg:flex-col">
        <TextReviewInput
          type="text"
          labelName="Name"
          name="name"
          value={state.name}
          changeHandler={(e) => stateSetter(e)}
          emoji="📛"
        />
        {false && (
          <div className="pt-1 text-red-700" id="body-error">
            Error message goes here
          </div>
        )}
      </div>

      <div className="my-2 lg:flex lg:justify-between">
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Distiller"
            name="distiller"
            value={state.distiller}
            changeHandler={(e) => stateSetter(e)}
            emoji="🌱"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Bottler"
            name="bottler"
            value={state.bottler}
            changeHandler={(e) => stateSetter(e)}
            emoji="🍾"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Producer"
            name="producer"
            value={state.producer}
            changeHandler={(e) => stateSetter(e)}
            emoji="🏗️"
          />
        </div>
      </div>
      <div className="my-2 lg:flex lg:justify-between">
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Type"
            name="type"
            value={state.type}
            changeHandler={(e) => stateSetter(e)}
            emoji="©️"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Country of Origin"
            name="country"
            value={state.country}
            changeHandler={(e) => stateSetter(e)}
            emoji="🌎"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Region"
            name="region"
            value={state.region}
            changeHandler={(e) => stateSetter(e)}
            emoji="🏔️"
          />
        </div>
      </div>
      <div className="my-2 lg:flex">
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Price"
            name="price"
            value={state.price}
            changeHandler={(e) => stateSetter(e)}
            emoji="💲"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Age"
            name="age"
            value={state.age}
            changeHandler={(e) => stateSetter(e)}
            emoji="👴"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Color"
            name="color"
            value={state.color}
            changeHandler={(e) => stateSetter(e)}
            emoji="🌈"
          />
        </div>
      </div>
      <div className="my-2 lg:flex lg:justify-evenly">
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Year"
            name="year"
            value={state.year}
            changeHandler={(e) => stateSetter(e)}
            emoji="📆"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Batch / Barrel"
            name="batch"
            value={state.batch}
            changeHandler={(e) => stateSetter(e)}
            emoji="2️⃣"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Size"
            name="size"
            value={state.size}
            changeHandler={(e) => stateSetter(e)}
            emoji="🍆"
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-between">
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Alcohol Percent"
            name="alcoholPercent"
            value={state.alcoholPercent}
            changeHandler={(e) => stateSetter(e)}
            emoji="💫"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Proof"
            name="proof"
            value={state.proof}
            changeHandler={(e) => stateSetter(e)}
            emoji="🔥"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            type="text"
            labelName="Finishing"
            name="finishing"
            value={state.finishing}
            changeHandler={(e) => stateSetter(e)}
            emoji="🍷"
          />
        </div>
      </div>
      <PrimaryButton callToAction="Next" />
    </Form>
  );
}
