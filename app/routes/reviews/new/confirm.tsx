import { v4 as uuid } from "uuid";
import { Form, useOutletContext } from "@remix-run/react";
import { json, redirect, ActionFunction } from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import { createReview } from "~/models/review.server";
import { createBottle } from "~/models/bottle.server";
import { getUser } from "~/session.server";
import type { ContextType } from "../new";

export const action: ActionFunction = async ({ request }) => {
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
  const imageId = formData.get("imageId")?.toString();
  const date = formData.get("date")?.toString();
  const setting = formData.get("setting")?.toString();
  const glassware = formData.get("glassware")?.toString();
  const restTime = formData.get("restTime")?.toString();
  const nose = formData.get("nose")?.toString();
  const palate = formData.get("palate")?.toString();
  const finish = formData.get("finish")?.toString();
  const thoughts = formData.get("thoughts")?.toString();
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
  if (!imageId) {
    return;
  }
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
    typeof overallRating !== "number" ||
    typeof value !== "number"
  ) {
    return json(
      { errors: { message: "One of the values was not a number" } },
      { status: 400 }
    );
  }

  const price = parseFloat(formPrice);

  const user = await getUser(request);
  invariant(user, `User must exist to post a review`);
  const bottleId = uuid();

  const newBottle = await createBottle({
    id: bottleId,
    name,
    type,
    distiller,
    bottler,
    producer,
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
  });

  const today = new Date();
  const reviewId = uuid();

  const newReview = await createReview({
    id: reviewId,
    bottleId: newBottle.id,
    userId: user.id,
    createdAt: today,
    updatedAt: today,
    date,
    imageId,
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
  });
  if (!newReview) throw new Error(`Error posting review. Please try again`);
  if (newReview) return redirect(`/reviews/${newReview.id}`);
};

export default function NewConfirmationRoute() {
  const { state, stateSetter } = useOutletContext<ContextType>();

  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }
  console.log(`State: ${JSON.stringify(state, null, 2)}`);
  return (
    <div>
      <h1>Confirm your Review</h1>
      <div>
        <Form method="post">
          <input type="text" name="name" defaultValue={state.name} />
          <input type="text" name="type" defaultValue={state.type} />
          <input type="text" name="distiller" defaultValue={state.distiller} />
          <input type="text" name="bottler" defaultValue={state.bottler} />
          <input type="text" name="producer" defaultValue={state.producer} />
          <input type="text" name="country" defaultValue={state.country} />
          <input type="text" name="region" defaultValue={state.region} />
          <input type="text" name="price" defaultValue={state.price} />
          <input type="text" name="age" defaultValue={state.age} />
          <input type="text" name="year" defaultValue={state.year} />
          <input type="text" name="batch" defaultValue={state.batch} />
          <input
            type="text"
            name="alcoholPercent"
            defaultValue={state.alcoholPercent}
          />
          <input type="text" name="proof" defaultValue={state.proof} />
          <input type="text" name="size" defaultValue={state.size} />
          <input type="text" name="color" defaultValue={state.color} />
          <input type="text" name="finishing" defaultValue={state.finishing} />
          <input type="text" name="date" defaultValue={state.date} />
          <input type="hidden" name="imageId" defaultValue={state.imageId} />
          <input type="text" name="setting" defaultValue={state.setting} />
          <input type="text" name="glassware" defaultValue={state.glassware} />
          <input type="text" name="restTime" defaultValue={state.restTime} />
          <input type="text" name="nose" defaultValue={state.nose} />
          <input type="text" name="palate" defaultValue={state.palate} />
          <input type="text" name="finish" defaultValue={state.finish} />
          <input type="text" name="thoughts" defaultValue={state.thoughts} />

          <input type="number" name="pepper" defaultValue={state.pepper} />
          <input
            type="number"
            name="bakingSpice"
            defaultValue={state.bakingSpice}
          />
          <input type="number" name="cinnamon" defaultValue={state.cinnamon} />
          <input type="number" name="herbal" defaultValue={state.herbal} />
          <input type="number" name="mint" defaultValue={state.mint} />

          <input type="number" name="cherry" defaultValue={state.cherry} />
          <input
            type="number"
            name="strawberry"
            defaultValue={state.strawberry}
          />
          <input
            type="number"
            name="raspberry"
            defaultValue={state.raspberry}
          />
          <input
            type="number"
            name="blackberry"
            defaultValue={state.blackberry}
          />
          <input
            type="number"
            name="blueberry"
            defaultValue={state.blueberry}
          />
          <input type="number" name="apple" defaultValue={state.apple} />
          <input type="number" name="banana" defaultValue={state.banana} />
          <input type="number" name="grape" defaultValue={state.grape} />
          <input type="number" name="stone" defaultValue={state.stone} />
          <input type="number" name="citrus" defaultValue={state.citrus} />
          <input type="number" name="tropical" defaultValue={state.tropical} />

          <input type="number" name="coffee" defaultValue={state.coffee} />
          <input type="number" name="tobacco" defaultValue={state.tobacco} />
          <input type="number" name="leather" defaultValue={state.leather} />
          <input type="number" name="oak" defaultValue={state.oak} />
          <input type="number" name="toasted" defaultValue={state.toasted} />
          <input type="number" name="smokey" defaultValue={state.smokey} />
          <input type="number" name="peanut" defaultValue={state.peanut} />
          <input type="number" name="almond" defaultValue={state.almond} />
          <input type="number" name="pecan" defaultValue={state.pecan} />
          <input type="number" name="walnut" defaultValue={state.walnut} />
          <input type="number" name="oily" defaultValue={state.oily} />
          <input type="number" name="floral" defaultValue={state.floral} />

          <input type="number" name="corn" defaultValue={state.corn} />
          <input type="number" name="rye" defaultValue={state.rye} />
          <input type="number" name="wheat" defaultValue={state.wheat} />
          <input type="number" name="malt" defaultValue={state.malt} />
          <input type="number" name="dough" defaultValue={state.dough} />

          <input type="number" name="vanilla" defaultValue={state.vanilla} />
          <input type="number" name="caramel" defaultValue={state.caramel} />
          <input type="number" name="molasses" defaultValue={state.molasses} />
          <input
            type="number"
            name="butterscotch"
            defaultValue={state.butterscotch}
          />
          <input type="number" name="honey" defaultValue={state.honey} />
          <input
            type="number"
            name="chocolate"
            defaultValue={state.chocolate}
          />
          <input type="number" name="toffee" defaultValue={state.toffee} />
          <input type="number" name="sugar" defaultValue={state.sugar} />

          <input type="number" name="value" defaultValue={state.value} />
          <input
            type="number"
            name="overallRating"
            defaultValue={state.overallRating}
          />
          <div className="text-right">
            <button
              type="submit"
              className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            >
              Submit Review
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
