import React from "react";
import { FormState } from "~/routes/reviews/new";
import DefaultNoteInput from "../DefaultNoteInput/DefaultNoteInput";

interface INoteConfirmationProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NoteConfirmation({
  state,
  changeHandler,
}: INoteConfirmationProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="my-4 w-full px-3 md:mb-0">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Earth Notes
          </summary>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Coffee"
              name="coffee"
              defaultValue={state.coffee}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Tobacco Leaf"
              name="tobacco"
              defaultValue={state.tobacco}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              name="leather"
              label="Leather"
              defaultValue={state.leather}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Oak"
              name="oak"
              defaultValue={state.oak}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Toasted"
              name="toasted"
              defaultValue={state.toasted}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Smokey"
              name="smokey"
              defaultValue={state.smokey}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Peanut"
              name="peanut"
              defaultValue={state.peanut}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Almond"
              name="almond"
              defaultValue={state.almond}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Pecan"
              name="pecan"
              defaultValue={state.pecan}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Walnut"
              name="walnut"
              defaultValue={state.walnut}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Oily"
              name="oily"
              defaultValue={state.oily}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Floral"
              name="floral"
              defaultValue={state.floral}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
        </details>
      </div>
      <div className="my-4 w-full px-3 md:mb-0">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Fruit Notes
          </summary>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Cherry"
              name="cherry"
              defaultValue={state.cherry}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Strawberry"
              name="strawberry"
              defaultValue={state.strawberry}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              name="raspberry"
              label="Raspberry"
              defaultValue={state.raspberry}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              name="blackberry"
              label="Blackberry"
              defaultValue={state.blackberry}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Blueberry"
              name="blueberry"
              defaultValue={state.blueberry}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Apple"
              name="apple"
              defaultValue={state.apple}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Banana"
              name="banana"
              defaultValue={state.banana}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Grape"
              name="grape"
              defaultValue={state.grape}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Stone Fruit"
              name="stone"
              defaultValue={state.stone}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Citrus"
              name="citrus"
              defaultValue={state.citrus}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Tropical"
              name="tropical"
              defaultValue={state.tropical}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
        </details>
      </div>
      <div className="my-4 w-full px-4 md:mb-0">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Grain Notes
          </summary>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="corn"
              defaultValue={state.corn}
              label="Corn"
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="rye"
              label="Rye"
              defaultValue={state.rye}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="wheat"
              label="Wheat"
              defaultValue={state.wheat}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="malt"
              defaultValue={state.malt}
              label="Malt"
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="dough"
              defaultValue={state.dough}
              label="Dough / Bread"
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
        </details>
      </div>
      <div className="my-4 w-full px-4 md:mb-0">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Spice Notes
          </summary>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="pepper"
              label="Black Pepper"
              defaultValue={state.pepper}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="cinnamon"
              label="Cinnamon"
              defaultValue={state.cinnamon}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="bakingSpice"
              label="Baking Spice"
              defaultValue={state.bakingSpice}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>

          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="herbal"
              label="Herbal"
              defaultValue={state.herbal}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="mint"
              label="Mint"
              defaultValue={state.mint}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
        </details>
      </div>
      <div className="my-4 w-full px-4 md:mb-0">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Sweet Notes
          </summary>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              label="Vanilla"
              name="vanilla"
              defaultValue={state.vanilla}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              label="Caramel"
              name="caramel"
              defaultValue={state.caramel}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="molasses"
              label="Molasses"
              defaultValue={state.molasses}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="butterscotch"
              label="Butterscotch"
              defaultValue={state.butterscotch}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>

          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              label="Honey"
              name="honey"
              defaultValue={state.honey}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              label="Chocolate"
              name="chocolate"
              defaultValue={state.chocolate}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              name="toffee"
              label="Toffee"
              defaultValue={state.toffee}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3">
            <DefaultNoteInput
              label="Powdered Sugar"
              name="sugar"
              defaultValue={state.sugar}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
        </details>
      </div>
      <div className="my-4 w-full px-4 md:mb-0">
        <details>
          <summary className="w-full cursor-pointer select-none py-3 px-4 outline-none">
            Rating
          </summary>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Value for Money"
              name="value"
              defaultValue={state.value}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
          <div className="mb-2 w-full px-3 md:mb-0">
            <DefaultNoteInput
              label="Overall Rating"
              name="overallRating"
              defaultValue={state.overallRating}
              changeHandler={(e) => changeHandler(e)}
            />
          </div>
        </details>
      </div>
    </div>
  );
}
