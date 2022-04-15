import { Form, useActionData, useOutletContext } from "@remix-run/react";
import { ActionFunction, json, redirect } from "@remix-run/server-runtime";
import TextReviewInput from "~/components/TextReviewInput";
import type { ContextType } from "~/routes/reviews/new";

type ActionData = {
  errors?: {
    cherry: string;
    strawberry: string;
    raspberry: string;
    blackberry: string;
    blueberry: string;
    apple: string;
    banana: string;
    grape: string;
    stone: string;
    citrus: string;
    tropical: string;
    pepper: string;
    bakingSpice: string;
    cinnamon: string;
    herbal: string;
    mint: string;
    coffee: string;
    tobacco: string;
    leather: string;
    oak: string;
    toasted: string;
    smokey: string;
    peanut: string;
    almond: string;
    pecan: string;
    walnut: string;
    oily: string;
    floral: string;
    corn: string;
    rye: string;
    wheat: string;
    malt: string;
    dough: string;
    vanilla: string;
    caramel: string;
    molasses: string;
    butterscotch: string;
    honey: string;
    chocolate: string;
    toffee: string;
    sugar: string;
    overallRating?: string;
    value?: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
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
    typeof overallRating !== "number" ||
    typeof value !== "number"
  ) {
    return json(
      { errors: { message: "One of the values was not a number" } },
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
        name="pepper"
        labelName="Black Pepper"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="cinnamon"
        labelName="Cinnamon"
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
        name="herbal"
        labelName="Herbal"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="mint"
        labelName="Mint"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="cherry"
        labelName="Cherry"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="strawberry"
        labelName="Strawberry"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="raspberry"
        labelName="Raspberry"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="blackberry"
        labelName="Blackberry"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="blueberry"
        labelName="Blueberry"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="apple"
        labelName="Apple"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="banana"
        labelName="Banana"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="grape"
        labelName="Grape"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="stone"
        labelName="Stone Fruit"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="citrus"
        labelName="Citrus"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="tropical"
        labelName="Tropical"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      {/* EARTHY */}
      <TextReviewInput
        name="coffee"
        labelName="Coffee"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="tobacco"
        labelName="Tobacco Leaf"
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
        name="oak"
        labelName="Oak"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="toasted"
        labelName="Toasted"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="smokey"
        labelName="Smokey"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="peanut"
        labelName="Peanut"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="almond"
        labelName="Almond"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="pecan"
        labelName="Pecan"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="walnut"
        labelName="Walnut"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="oily"
        labelName="Oily"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      <TextReviewInput
        name="floral"
        labelName="Floral"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />
      {/* GRAINS */}
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
        name="dough"
        labelName="Bread / Dough"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="vanilla"
        labelName="Vanilla"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="caramel"
        labelName="Caramel"
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
        name="butterscotch"
        labelName="Butterscotch"
        changeHandler={(e) => stateSetter(e)}
        type="number"
      />

      <TextReviewInput
        name="honey"
        labelName="Honey"
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
        name="sugar"
        labelName="Confectioner's Sugar"
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
