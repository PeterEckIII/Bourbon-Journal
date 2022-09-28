import type { Bottle, Review } from "@prisma/client";
import { redirect, json } from "@remix-run/server-runtime";
import type { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { useActionData, useLoaderData, Form } from "@remix-run/react";
import EditTextReviewInput from "~/components/UI/Inputs/EditTextReviewInput";
import EditTextReviewTextarea from "~/components/UI/Inputs/EditTextReviewTextarea";
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
  const price = formData.get("price")?.toString();
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

  // SPICE
  const pepper = Number(formData.get("pepper")?.toString());
  const bakingSpice = Number(formData.get("bakingSpice")?.toString());
  const cinnamon = Number(formData.get("cinnamon")?.toString());
  const herbal = Number(formData.get("herbal")?.toString());
  const mint = Number(formData.get("mint")?.toString());

  // FRUIT
  const cherry = Number(formData.get("cherry")?.toString());
  const strawberry = Number(formData.get("strawberry")?.toString());
  const raspberry = Number(formData.get("raspberry")?.toString());
  const blackberry = Number(formData.get("blackberry")?.toString());
  const blueberry = Number(formData.get("blueberry")?.toString());
  const apple = Number(formData.get("apple")?.toString());
  const banana = Number(formData.get("banana")?.toString());
  const grape = Number(formData.get("grape")?.toString());
  const stone = Number(formData.get("stone")?.toString());
  const citrus = Number(formData.get("citrus")?.toString());
  const tropical = Number(formData.get("tropical")?.toString());

  // EARTHY
  const coffee = Number(formData.get("coffee")?.toString());
  const tobacco = Number(formData.get("tobacco")?.toString());
  const leather = Number(formData.get("leather")?.toString());
  const oak = Number(formData.get("oak")?.toString());
  const toasted = Number(formData.get("toasted")?.toString());
  const smokey = Number(formData.get("smokey")?.toString());
  const peanut = Number(formData.get("peanut")?.toString());
  const almond = Number(formData.get("almond")?.toString());
  const pecan = Number(formData.get("pecan")?.toString());
  const walnut = Number(formData.get("walnut")?.toString());
  const oily = Number(formData.get("oily")?.toString());
  const floral = Number(formData.get("floral")?.toString());

  // GRAIN
  const corn = Number(formData.get("corn")?.toString());
  const rye = Number(formData.get("rye")?.toString());
  const wheat = Number(formData.get("wheat")?.toString());
  const malt = Number(formData.get("malt")?.toString());
  const dough = Number(formData.get("dough")?.toString());

  const vanilla = Number(formData.get("vanilla")?.toString());
  const caramel = Number(formData.get("caramel")?.toString());
  const molasses = Number(formData.get("molasses")?.toString());
  const butterscotch = Number(formData.get("butterscotch")?.toString());
  const honey = Number(formData.get("honey")?.toString());
  const chocolate = Number(formData.get("chocolate")?.toString());
  const toffee = Number(formData.get("toffee")?.toString());
  const sugar = Number(formData.get("sugar")?.toString());

  const overallRating = Number(formData.get("overallRating")?.toString());
  const value = Number(formData.get("value")?.toString());
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
    typeof pepper !== "number" ||
    typeof bakingSpice !== "number" ||
    typeof cinnamon !== "number" ||
    typeof herbal !== "number" ||
    typeof mint !== "number" ||
    typeof cherry !== "number" ||
    typeof strawberry !== "number" ||
    typeof raspberry !== "number" ||
    typeof blackberry !== "number" ||
    typeof blueberry !== "number" ||
    typeof apple !== "number" ||
    typeof banana !== "number" ||
    typeof grape !== "number" ||
    typeof stone !== "number" ||
    typeof citrus !== "number" ||
    typeof tropical !== "number" ||
    typeof coffee !== "number" ||
    typeof tobacco !== "number" ||
    typeof leather !== "number" ||
    typeof oak !== "number" ||
    typeof toasted !== "number" ||
    typeof smokey !== "number" ||
    typeof peanut !== "number" ||
    typeof almond !== "number" ||
    typeof pecan !== "number" ||
    typeof walnut !== "number" ||
    typeof oily !== "number" ||
    typeof floral !== "number" ||
    typeof peanut !== "number" ||
    typeof corn !== "number" ||
    typeof rye !== "number" ||
    typeof wheat !== "number" ||
    typeof malt !== "number" ||
    typeof dough !== "number" ||
    typeof vanilla !== "number" ||
    typeof caramel !== "number" ||
    typeof molasses !== "number" ||
    typeof butterscotch !== "number" ||
    typeof honey !== "number" ||
    typeof chocolate !== "number" ||
    typeof toffee !== "number" ||
    typeof sugar !== "number" ||
    typeof value !== "number" ||
    typeof overallRating !== "number"
  ) {
    return json(
      { errors: { message: "One of the values was not a number" } },
      { status: 400 }
    );
  }

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
      cherry,
      strawberry,
      raspberry,
      blackberry,
      blueberry,
      apple,
      banana,
      grape,
      stone,
      citrus,
      tropical,
      pepper,
      bakingSpice,
      cinnamon,
      herbal,
      mint,
      coffee,
      tobacco,
      leather,
      oak,
      toasted,
      smokey,
      peanut,
      almond,
      pecan,
      walnut,
      oily,
      floral,
      corn,
      rye,
      wheat,
      malt,
      dough,
      vanilla,
      caramel,
      molasses,
      butterscotch,
      honey,
      chocolate,
      toffee,
      sugar,
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
        {/* NOTES */}
        <EditTextReviewInput
          name="pepper"
          labelName="Black Pepper"
          defaultValue={data ? data?.review.pepper : 0}
          type="number"
        />
        <EditTextReviewInput
          name="cinnamon"
          labelName="Cinnamon"
          defaultValue={data ? data?.review.cinnamon : 0}
          type="number"
        />
        <EditTextReviewInput
          name="bakingSpice"
          labelName="Baking Spice"
          defaultValue={data ? data?.review.bakingSpice : 0}
          type="number"
        />
        <EditTextReviewInput
          name="herbal"
          labelName="Herbal"
          defaultValue={data ? data?.review.herbal : 0}
          type="number"
        />
        <EditTextReviewInput
          name="mint"
          labelName="Mint"
          defaultValue={data ? data?.review.mint : 0}
          type="number"
        />
        <EditTextReviewInput
          name="cherry"
          labelName="Cherry"
          defaultValue={data ? data?.review.cherry : 0}
          type="number"
        />
        <EditTextReviewInput
          name="strawberry"
          labelName="Strawberry"
          defaultValue={data ? data?.review.strawberry : 0}
          type="number"
        />
        <EditTextReviewInput
          name="raspberry"
          labelName="Raspberry"
          defaultValue={data ? data?.review.raspberry : 0}
          type="number"
        />
        <EditTextReviewInput
          name="blackberry"
          labelName="Blackberry"
          defaultValue={data ? data?.review.blackberry : 0}
          type="number"
        />
        <EditTextReviewInput
          name="blueberry"
          labelName="Blueberry"
          defaultValue={data ? data?.review.blueberry : 0}
          type="number"
        />
        <EditTextReviewInput
          name="apple"
          labelName="Apple"
          defaultValue={data ? data?.review.apple : 0}
          type="number"
        />
        <EditTextReviewInput
          name="banana"
          labelName="Banana"
          defaultValue={data ? data?.review.banana : 0}
          type="number"
        />
        <EditTextReviewInput
          name="grape"
          labelName="Grape"
          defaultValue={data ? data?.review.grape : 0}
          type="number"
        />
        <EditTextReviewInput
          name="stone"
          labelName="Stone Fruit"
          defaultValue={data ? data?.review.stone : 0}
          type="number"
        />
        <EditTextReviewInput
          name="citrus"
          labelName="Citrus"
          defaultValue={data ? data?.review.citrus : 0}
          type="number"
        />
        <EditTextReviewInput
          name="tropical"
          labelName="Tropical"
          defaultValue={data ? data?.review.tropical : 0}
          type="number"
        />
        {/* EARTHY */}
        <EditTextReviewInput
          name="coffee"
          labelName="Coffee"
          defaultValue={data ? data?.review.coffee : 0}
          type="number"
        />
        <EditTextReviewInput
          name="tobacco"
          labelName="Tobacco Leaf"
          defaultValue={data ? data?.review.tobacco : 0}
          type="number"
        />
        <EditTextReviewInput
          name="leather"
          labelName="Leather"
          defaultValue={data ? data?.review.leather : 0}
          type="number"
        />
        <EditTextReviewInput
          name="oak"
          labelName="Oak"
          defaultValue={data ? data?.review.oak : 0}
          type="number"
        />
        <EditTextReviewInput
          name="toasted"
          labelName="Toasted"
          defaultValue={data ? data?.review.toasted : 0}
          type="number"
        />
        <EditTextReviewInput
          name="smokey"
          labelName="Smokey"
          defaultValue={data ? data?.review.smokey : 0}
          type="number"
        />
        <EditTextReviewInput
          name="peanut"
          labelName="Peanut"
          defaultValue={data ? data?.review.peanut : 0}
          type="number"
        />
        <EditTextReviewInput
          name="almond"
          labelName="Almond"
          defaultValue={data ? data?.review.almond : 0}
          type="number"
        />

        <EditTextReviewInput
          name="pecan"
          labelName="Pecan"
          defaultValue={data ? data?.review.pecan : 0}
          type="number"
        />
        <EditTextReviewInput
          name="walnut"
          labelName="Walnut"
          defaultValue={data ? data?.review.walnut : 0}
          type="number"
        />
        <EditTextReviewInput
          name="oily"
          labelName="Oily"
          defaultValue={data ? data?.review.oily : 0}
          type="number"
        />
        <EditTextReviewInput
          name="floral"
          labelName="Floral"
          defaultValue={data ? data?.review.floral : 0}
          type="number"
        />
        {/* GRAINS */}
        <EditTextReviewInput
          name="corn"
          labelName="Corn"
          defaultValue={data ? data?.review.corn : 0}
          type="number"
        />
        <EditTextReviewInput
          name="rye"
          labelName="Rye"
          defaultValue={data ? data?.review.rye : 0}
          type="number"
        />
        <EditTextReviewInput
          name="wheat"
          labelName="Wheat"
          defaultValue={data ? data?.review.wheat : 0}
          type="number"
        />
        <EditTextReviewInput
          name="malt"
          labelName="Malt"
          defaultValue={data ? data?.review.malt : 0}
          type="number"
        />

        <EditTextReviewInput
          name="dough"
          labelName="Bread / Dough"
          defaultValue={data ? data?.review.dough : 0}
          type="number"
        />

        <EditTextReviewInput
          name="vanilla"
          labelName="Vanilla"
          defaultValue={data ? data?.review.vanilla : 0}
          type="number"
        />

        <EditTextReviewInput
          name="caramel"
          labelName="Caramel"
          defaultValue={data ? data?.review.caramel : 0}
          type="number"
        />

        <EditTextReviewInput
          name="molasses"
          labelName="Molasses"
          defaultValue={data ? data?.review.molasses : 0}
          type="number"
        />

        <EditTextReviewInput
          name="butterscotch"
          labelName="Butterscotch"
          defaultValue={data ? data?.review.butterscotch : 0}
          type="number"
        />

        <EditTextReviewInput
          name="honey"
          labelName="Honey"
          defaultValue={data ? data?.review.honey : 0}
          type="number"
        />
        <EditTextReviewInput
          name="chocolate"
          labelName="Chocolate"
          defaultValue={data ? data?.review.chocolate : 0}
          type="number"
        />
        <EditTextReviewInput
          name="toffee"
          labelName="Toffee"
          defaultValue={data ? data?.review.toffee : 0}
          type="number"
        />
        <EditTextReviewInput
          name="sugar"
          labelName="Confectioner's Sugar"
          defaultValue={data ? data?.review.sugar : 0}
          type="number"
        />
        <EditTextReviewInput
          name="value"
          labelName="Value for Money"
          defaultValue={data ? data?.review.value : 0}
          type="number"
        />

        <EditTextReviewInput
          name="overallRating"
          labelName="Overall Rating"
          defaultValue={data ? data?.review.overallRating : 0}
          type="number"
        />
        <div className="text-right">
          <button
            id="update-button"
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
