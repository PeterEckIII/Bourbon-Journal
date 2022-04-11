import { Form, useActionData, useOutletContext } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/server-runtime";
import TextReviewInput from "~/components/TextReviewInput";
import type { ContextType } from "~/routes/reviews/new";

type ActionData = {
  errors?: {
    baked?: string;
    buttery?: string;
    chocolate?: string;
    toffee?: string;
    corn?: string;
    rye?: string;
    wheat?: string;
    malt?: string;
    bakingSpice?: string;
    molasses?: string;
    nutty?: string;
    oaky?: string;
    redFruit?: string;
    darkFruit?: string;
    berryFruit?: string;
    citrusFruit?: string;
    stoneFruit?: string;
    driedFruit?: string;
    earthy?: string;
    tobacco?: string;
    leather?: string;
    floral?: string;
    herbaceous?: string;
    overallRating?: string;
    value?: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const baked = Number(formData.get("baked")?.toString());
  const buttery = Number(formData.get("buttery")?.toString());
  const chocolate = Number(formData.get("chocolate")?.toString());
  const toffee = Number(formData.get("toffee")?.toString());
  const corn = Number(formData.get("corn")?.toString());
  const rye = Number(formData.get("rye")?.toString());
  const wheat = Number(formData.get("wheat")?.toString());
  const malt = Number(formData.get("malt")?.toString());
  const bakingSpice = Number(formData.get("bakingSpice")?.toString());
  const molasses = Number(formData.get("molasses")?.toString());
  const nutty = Number(formData.get("nutty")?.toString());
  const oaky = Number(formData.get("oaky")?.toString());
  const redFruit = Number(formData.get("redFruit")?.toString());
  const darkFruit = Number(formData.get("darkFruit")?.toString());
  const berryFruit = Number(formData.get("berryFruit")?.toString());
  const citrusFruit = Number(formData.get("citrusFruit")?.toString());
  const stoneFruit = Number(formData.get("stoneFruit")?.toString());
  const driedFruit = Number(formData.get("driedFruit")?.toString());
  const earthy = Number(formData.get("earthy")?.toString());
  const tobacco = Number(formData.get("tobacco")?.toString());
  const leather = Number(formData.get("leather")?.toString());
  const floral = Number(formData.get("floral")?.toString());
  const herbaceous = Number(formData.get("herbaceous")?.toString());
  const overallRating = Number(formData.get("overallRating")?.toString());
  const value = Number(formData.get("value")?.toString());

  if (
    typeof baked !== "number" ||
    typeof buttery !== "number" ||
    typeof chocolate !== "number" ||
    typeof toffee !== "number" ||
    typeof corn !== "number" ||
    typeof rye !== "number" ||
    typeof wheat !== "number" ||
    typeof malt !== "number" ||
    typeof bakingSpice !== "number" ||
    typeof molasses !== "number" ||
    typeof nutty !== "number" ||
    typeof oaky !== "number" ||
    typeof redFruit !== "number" ||
    typeof darkFruit !== "number" ||
    typeof berryFruit !== "number" ||
    typeof citrusFruit !== "number" ||
    typeof stoneFruit !== "number" ||
    typeof driedFruit !== "number" ||
    typeof earthy !== "number" ||
    typeof tobacco !== "number" ||
    typeof leather !== "number" ||
    typeof floral !== "number" ||
    typeof herbaceous !== "number" ||
    typeof overallRating !== "number" ||
    typeof value !== "number"
  ) {
    return json<ActionData>(
      { errors: { baked: "Invalid type" } },
      { status: 400 }
    );
  }
  return redirect(`/reviews/new/confirm`);
};

export default function NewNotesRoute() {
  const actionData = useActionData() as ActionData;
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <Form method="post">
      <TextReviewInput
        name="baked"
        labelName="Baked"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="buttery"
        labelName="Buttery"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="chocolate"
        labelName="Chocolate"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="toffee"
        labelName="Toffee"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="corn"
        labelName="Corn"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="rye"
        labelName="Rye"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="wheat"
        labelName="Wheat"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="malt"
        labelName="Malt"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="bakingSpice"
        labelName="Baking Spice"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="molasses"
        labelName="Molasses"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="nutty"
        labelName="Nutty"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="oaky"
        labelName="Oaky"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="redFruit"
        labelName="redFruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="darkFruit"
        labelName="Dark Fruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="berryFruit"
        labelName="Berry Fruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="citrusFruit"
        labelName="Citrus Fruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="stoneFruit"
        labelName="Stone Fruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="driedFruit"
        labelName="Dried Fruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="earthy"
        labelName="Earthy"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="tobacco"
        labelName="Tobacco"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="leather"
        labelName="Leather"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="floral"
        labelName="Floral"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="herbaceous"
        labelName="Herbaceous"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="value"
        labelName="Value for Money"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="overallRating"
        labelName="Overall Rating"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Review
        </button>
      </div>
    </Form>
  );
}
