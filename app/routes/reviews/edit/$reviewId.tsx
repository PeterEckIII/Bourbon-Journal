import type { Bottle, Review } from "@prisma/client";
import {
  LoaderFunction,
  ActionFunction,
  redirect,
  json,
} from "@remix-run/server-runtime";
import {
  useOutletContext,
  useActionData,
  useLoaderData,
  Form,
} from "@remix-run/react";
import TextareaReviewInput from "~/components/TextareaReviewInput";
import TextReviewInput from "~/components/TextReviewInput";
import { editReview, getReview } from "~/models/review.server";
import { requireUserId } from "~/session.server";
import { ContextType } from "../new";

type LoaderData = {
  review: Review;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const reviewId = params.reviewId as string;
  if (!userId) {
    return redirect("/login");
  }
  const review = await getReview({ id: reviewId, userId });
  if (!review) {
    throw new Error(`Error -- no review with that ID`);
  }
  return json<LoaderData>({ review });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = requireUserId(request);
  const form = await request.formData();
  if (!userId) {
    return redirect("/login");
  }
  const entries = form.entries();
  console.log(`Form Entries: ${JSON.stringify(entries, null, 2)}`);

  return json({ entries });
};

export default function EditReviewRoute() {
  const actionData = useActionData();
  const data = useLoaderData<LoaderData>();
  if (!data || data === undefined) {
    throw new Error(`Error! No data for this review ID`);
  }

  const { stateSetter } = useOutletContext<ContextType>();
  if (!stateSetter) throw new Error(`Error!`);
  return (
    <div className="flex">
      <Form method="post">
        <TextReviewInput
          name="name"
          type="text"
          labelName="Name"
          changeHandler={(e) => stateSetter(e)}
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Type"
          name="type"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Distiller"
          name="distiller"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Bottler"
          name="bottler"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Producer"
          name="producer"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Country of Origin"
          name="country"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Region"
          name="region"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Price"
          name="price"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Age"
          name="age"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Year"
          name="year"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Batch / Barrel"
          name="batch"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Alcohol Percent"
          name="alcoholPercent"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Proof"
          name="proof"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Size"
          name="size"
        />
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Color"
          name="Finishing"
        />
        <TextReviewInput
          labelName="Date"
          name="date"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
        <TextReviewInput
          labelName="Setting"
          name="setting"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
        <TextReviewInput
          labelName="Glassware"
          name="glassware"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
        <TextReviewInput
          labelName="Rest Time"
          name="restTime"
          changeHandler={(e) => stateSetter(e)}
          type="text"
        />
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
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}
