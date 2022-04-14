import type { Bottle, Review } from "@prisma/client";
import {
  LoaderFunction,
  ActionFunction,
  redirect,
  json,
} from "@remix-run/server-runtime";
import { useActionData, useLoaderData, Form } from "@remix-run/react";
import EditTextReviewInput from "~/components/EditTextReviewInput";
import EditTextReviewTextarea from "~/components/EditTextReviewTextarea";
import { editReview, getReview } from "~/models/review.server";
import { requireUserId } from "~/session.server";
import { editBottle, getBottle } from "~/models/bottle.server";
import invariant from "tiny-invariant";

type LoaderData = {
  review: Review;
  bottle: Bottle;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const reviewId = params.reviewId as string;
  if (!userId) {
    return redirect("/login");
  }
  const review = await getReview({ id: reviewId, userId });
  if (!review || review.bottleId === null) {
    throw new Error(`Error -- no review with that ID`);
  }
  const bottle = await getBottle(review.bottleId);
  if (!bottle) {
    throw new Error(`No bottle associated with that review`);
  }
  return json<LoaderData>({ review, bottle });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  if (!userId) {
    return redirect("/login");
  }
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const distiller = formData.get("distiller")?.toString();
  const bottler = formData.get("bottler")?.toString();
  const producer = formData.get("producer")?.toString();
  const country = formData.get("country")?.toString();
  const region = formData.get("region")?.toString();
  const formPrice = formData.get("price")?.toString();
  const age = formData.get("age")?.toString();
  const year = formData.get("year")?.toString();
  const batch = formData.get("batch")?.toString();
  const alcoholPercent = formData.get("alcoholPercent")?.toString();
  const proof = formData.get("proof")?.toString();
  const size = formData.get("size")?.toString();
  const color = formData.get("color")?.toString();
  const finishing = formData.get("finishing")?.toString();
  const imageId = formData.get("imageId")?.toString() as string | null;
  const date = formData.get("date")?.toString();
  const setting = formData.get("setting")?.toString();
  const glassware = formData.get("glassware")?.toString();
  const restTime = formData.get("restTime")?.toString();
  const nose = formData.get("nose")?.toString();
  const palate = formData.get("palate")?.toString();
  const finish = formData.get("finish")?.toString();
  const thoughts = formData.get("thoughts")?.toString();
  const bottleId = formData.get("bottleId")?.toString();
  const reviewId = formData.get("reviewId")?.toString();
  const createdAt = formData.get("createdAt")?.toString();
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
  invariant(name, `Name is required`);
  invariant(type, `Type is required`);
  invariant(distiller, `Distiller is required`);
  invariant(bottler, `Bottler is required`);
  invariant(producer, `Producer is required`);
  invariant(country, `Country is required`);
  invariant(region, `Region is required`);
  invariant(formPrice, `Price is required`);
  invariant(age, `Age is required`);
  invariant(year, `Year is required`);
  invariant(batch, `Batch is required`);
  invariant(alcoholPercent, `Alcohol Percent is required`);
  invariant(proof, `Proof is required`);
  invariant(size, `Size is required`);
  invariant(color, `Color is required`);
  invariant(finishing, `Finishing is required`);
  invariant(date, `Date is required`);
  invariant(setting, `Setting is required`);
  invariant(glassware, `Glassware is required`);
  invariant(restTime, `Rest Time is required`);
  invariant(nose, `Nose is required`);
  invariant(palate, `Palate is required`);
  invariant(finish, `Finish is required`);
  invariant(thoughts, `Thoughts is required`);
  invariant(createdAt, `CreatedAt is required`);
  invariant(imageId, `ImageId is required`);
  invariant(bottleId, "No bottle with id {null}");
  invariant(reviewId, "No review with id {null}");

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
    return json(
      { errors: { message: "One of the values was not a number" } },
      { status: 400 }
    );
  }

  const price = parseFloat(formPrice);

  const today = new Date();
  const createdDate = new Date(createdAt);

  const newReview = await editReview(
    {
      date,
      setting,
      glassware,
      restTime,
      nose,
      palate,
      finish,
      thoughts,
      baked,
      buttery,
      chocolate,
      toffee,
      corn,
      rye,
      wheat,
      malt,
      bakingSpice,
      molasses,
      nutty,
      oaky,
      redFruit,
      darkFruit,
      berryFruit,
      citrusFruit,
      stoneFruit,
      driedFruit,
      earthy,
      tobacco,
      leather,
      floral,
      herbaceous,
      overallRating,
      value,
      userId,
      bottleId,
      imageId,
      id: reviewId,
      createdAt: createdDate,
      updatedAt: today,
    },
    userId
  );
  const newBottle = await editBottle({
    id: bottleId,
    name,
    type,
    distiller,
    bottler,
    producer,
    country,
    region,
    age,
    year,
    batch,
    alcoholPercent,
    proof,
    price,
    size,
    color,
    finishing,
  });
  if (!newBottle || !newReview) {
    return new Error(`ERROR UPDATING REVIEW`);
  }
  return redirect(`/reviews/${newReview.id}`);
};

export default function EditReviewRoute() {
  const actionData = useActionData();
  if (!actionData) console.log(`ERROR: NO ACTION DATA!`);
  console.log(`Action Data: ${JSON.stringify(actionData, null, 2)}`);
  const data = useLoaderData<LoaderData>();
  if (!data || data === undefined) {
    throw new Error(`Error! No data for this review ID`);
  }
  if (!data?.bottle) {
    throw new Error(`Error getting bottle`);
  }

  return (
    <div className="flex">
      <Form method="post">
        <EditTextReviewInput
          name="name"
          type="text"
          labelName="Name"
          defaultValue={data ? data?.bottle.name : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Type"
          name="type"
          defaultValue={data ? data?.bottle.type : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Distiller"
          name="distiller"
          defaultValue={data?.bottle.distiller}
        />
        <EditTextReviewInput
          type="text"
          labelName="Bottler"
          name="bottler"
          defaultValue={data ? data?.bottle.bottler : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Producer"
          name="producer"
          defaultValue={data ? data?.bottle.producer : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Country of Origin"
          name="country"
          defaultValue={data ? data?.bottle.country : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Region"
          name="region"
          defaultValue={data ? data?.bottle.bottler : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Price"
          name="price"
          defaultValue={data ? data?.bottle.price : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Age"
          name="age"
          defaultValue={data ? data?.bottle.age : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Year"
          name="year"
          defaultValue={data ? data?.bottle.year : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Batch / Barrel"
          name="batch"
          defaultValue={data ? data?.bottle.batch : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="ABV"
          name="alcoholPercent"
          defaultValue={data ? data?.bottle.alcoholPercent : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Proof"
          name="proof"
          defaultValue={data ? data?.bottle.proof : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Size"
          name="size"
          defaultValue={data ? data?.bottle.size : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Color"
          name="color"
          defaultValue={data ? data?.bottle.color : ""}
        />
        <EditTextReviewInput
          type="text"
          labelName="Finishing"
          name="finishing"
          defaultValue={data ? data?.bottle.finishing : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="bottleId"
          defaultValue={data ? data?.review.bottleId : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="bottleId"
          defaultValue={data ? data?.review.bottleId : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="reviewId"
          defaultValue={data ? data?.review.id : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="createdAt"
          defaultValue={data ? data?.review.createdAt.toString() : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="updatedAt"
          defaultValue={data ? data?.review.updatedAt.toString() : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="bottleId"
          defaultValue={data ? data?.review.bottleId : ""}
        />
        <EditTextReviewInput
          type="hidden"
          labelName=""
          name="imageId"
          defaultValue={data ? data?.review.imageId : ""}
        />
        <EditTextReviewInput
          labelName="Date"
          name="date"
          type="text"
          defaultValue={data ? data?.review.date : ""}
        />
        <EditTextReviewInput
          labelName="Setting"
          name="setting"
          type="text"
          defaultValue={data ? data?.review.setting : ""}
        />
        <EditTextReviewInput
          labelName="Glassware"
          name="glassware"
          type="text"
          defaultValue={data ? data?.review.glassware : ""}
        />
        <EditTextReviewInput
          labelName="Rest Time"
          name="restTime"
          type="text"
          defaultValue={data ? data?.review.restTime : ""}
        />
        <EditTextReviewTextarea
          name="nose"
          labelName="Nose"
          defaultValue={data ? data?.review.nose : ""}
        />
        <EditTextReviewTextarea
          name="palate"
          labelName="Palate"
          defaultValue={data ? data?.review.palate : ""}
        />
        <EditTextReviewTextarea
          name="finish"
          labelName="Finish"
          defaultValue={data ? data?.review.finish : ""}
        />
        <EditTextReviewTextarea
          name="thoughts"
          labelName="Additional Thoughts"
          defaultValue={data ? data?.review.thoughts : ""}
        />
        <EditTextReviewInput
          name="baked"
          labelName="Baked"
          type="number"
          defaultValue={data ? data?.review.baked : 0}
        />
        <EditTextReviewInput
          name="buttery"
          labelName="Buttery"
          type="number"
          defaultValue={data ? data?.review.buttery : 0}
        />
        <EditTextReviewInput
          name="chocolate"
          labelName="Chocolate"
          type="number"
          defaultValue={data ? data?.review.chocolate : 0}
        />
        <EditTextReviewInput
          name="toffee"
          labelName="Toffee"
          type="number"
          defaultValue={data ? data?.review.toffee : 0}
        />
        <EditTextReviewInput
          name="corn"
          labelName="Corn"
          type="number"
          defaultValue={data ? data?.review.corn : 0}
        />
        <EditTextReviewInput
          name="rye"
          labelName="Rye"
          type="number"
          defaultValue={data ? data?.review.rye : 0}
        />
        <EditTextReviewInput
          name="wheat"
          labelName="Wheat"
          type="number"
          defaultValue={data ? data?.review.wheat : 0}
        />
        <EditTextReviewInput
          name="malt"
          labelName="Malt"
          type="number"
          defaultValue={data ? data?.review.malt : 0}
        />
        <EditTextReviewInput
          name="bakingSpice"
          labelName="Baking Spice"
          type="number"
          defaultValue={data ? data?.review.bakingSpice : 0}
        />
        <EditTextReviewInput
          name="molasses"
          labelName="Molasses"
          type="number"
          defaultValue={data ? data?.review.molasses : 0}
        />
        <EditTextReviewInput
          type="number"
          name="nutty"
          labelName="Nutty"
          defaultValue={data ? data?.review.nutty : 0}
        />
        <EditTextReviewInput
          name="oaky"
          labelName="Oaky"
          type="number"
          defaultValue={data ? data?.review.oaky : 0}
        />
        <EditTextReviewInput
          name="redFruit"
          labelName="redFruit"
          type="number"
          defaultValue={data ? data?.review.redFruit : 0}
        />
        <EditTextReviewInput
          name="darkFruit"
          labelName="Dark Fruit"
          type="number"
          defaultValue={data ? data?.review.darkFruit : 0}
        />
        <EditTextReviewInput
          name="berryFruit"
          labelName="Berry Fruit"
          type="number"
          defaultValue={data ? data?.review.berryFruit : 0}
        />
        <EditTextReviewInput
          name="citrusFruit"
          labelName="Citrus Fruit"
          type="number"
          defaultValue={data ? data?.review.citrusFruit : 0}
        />
        <EditTextReviewInput
          name="stoneFruit"
          labelName="Stone Fruit"
          type="number"
          defaultValue={data ? data?.review.stoneFruit : 0}
        />

        <EditTextReviewInput
          name="driedFruit"
          labelName="Dried Fruit"
          type="number"
          defaultValue={data ? data?.review.driedFruit : 0}
        />

        <EditTextReviewInput
          name="earthy"
          labelName="Earthy"
          type="number"
          defaultValue={data ? data?.review.earthy : 0}
        />

        <EditTextReviewInput
          name="tobacco"
          labelName="Tobacco"
          type="number"
          defaultValue={data ? data?.review.tobacco : 0}
        />

        <EditTextReviewInput
          name="leather"
          labelName="Leather"
          type="number"
          defaultValue={data ? data?.review.leather : 0}
        />

        <EditTextReviewInput
          name="floral"
          labelName="Floral"
          type="number"
          defaultValue={data ? data?.review.floral : 0}
        />

        <EditTextReviewInput
          name="herbaceous"
          labelName="Herbaceous"
          type="number"
          defaultValue={data ? data?.review.herbaceous : 0}
        />
        <EditTextReviewInput
          name="value"
          labelName="Value for Money"
          type="number"
          defaultValue={data ? data?.review.value : 0}
        />
        <EditTextReviewInput
          name="overallRating"
          labelName="Overall Rating"
          type="number"
          defaultValue={data ? data?.review.overallRating : 0}
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
