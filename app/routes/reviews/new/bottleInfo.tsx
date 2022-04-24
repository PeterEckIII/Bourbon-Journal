import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { Form, useOutletContext } from "@remix-run/react";
import type { ContextType } from "~/routes/reviews/new";
import TextReviewInput from "~/components/TextReviewInput";
import invariant from "tiny-invariant";

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   const name = formData.get("name")?.toString();
//   const type = formData.get("type")?.toString();
//   const distiller = formData.get("distiller")?.toString();
//   const bottler = formData.get("bottler")?.toString();
//   const producer = formData.get("producer")?.toString();
//   const country = formData.get("country")?.toString();
//   const region = formData.get("region")?.toString();
//   const formPrice = formData.get("price")?.toString();
//   const age = formData.get("age")?.toString();
//   const year = formData.get("year")?.toString();
//   const batch = formData.get("batch")?.toString();
//   const alcoholPercent = formData.get("alcoholPercent")?.toString();
//   const proof = formData.get("proof")?.toString();
//   const size = formData.get("size")?.toString();
//   const color = formData.get("color")?.toString();
//   const finishing = formData.get("finishing")?.toString();

//   invariant(name, `Name is required`);
//   invariant(type, `Type is required`);
//   invariant(distiller, `Distiller is required`);
//   invariant(bottler, `Bottler is required`);
//   invariant(producer, `Producer is required`);
//   invariant(country, `Country is required`);
//   invariant(region, `Region is required`);
//   invariant(formPrice, `Price is required`);
//   invariant(age, `Age is required`);
//   invariant(year, `Year is required`);
//   invariant(batch, `Batch is required`);
//   invariant(alcoholPercent, `Alcohol Percent is required`);
//   invariant(proof, `Proof is required`);
//   invariant(size, `Size is required`);
//   invariant(color, `Color is required`);
//   invariant(finishing, `Finishing is required`);

//   return redirect("/reviews/new/addImage");
// };

export default function NewBottleInfoRoute() {
  const { state, stateSetter } = useOutletContext<ContextType>();
  if (state === undefined || !stateSetter) {
    throw new Error(`Error with the Outlet Context`);
  }

  return (
    <Form action="/reviews/new/addImage" className="flex-col lg:flex">
      <div className="my-2 flex lg:flex-col">
        <TextReviewInput
          changeHandler={(e) => stateSetter(e)}
          type="text"
          labelName="Name"
          name="name"
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
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Distiller"
            name="distiller"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Bottler"
            name="bottler"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Producer"
            name="producer"
          />
        </div>
      </div>
      <div className="my-2 lg:flex lg:justify-between">
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Type"
            name="type"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Country of Origin"
            name="country"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Region"
            name="region"
          />
        </div>
      </div>
      <div className="my-2 lg:flex">
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Price"
            name="price"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Age"
            name="age"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Color"
            name="color"
          />
        </div>
      </div>
      <div className="my-2 lg:flex lg:justify-evenly">
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Year"
            name="year"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Batch / Barrel"
            name="batch"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Size"
            name="size"
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-between">
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Alcohol Percent"
            name="alcoholPercent"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Proof"
            name="proof"
          />
        </div>
        <div className="flex">
          <TextReviewInput
            changeHandler={(e) => stateSetter(e)}
            type="text"
            labelName="Finishing"
            name="finishing"
          />
        </div>
      </div>
      <div className="my-2 text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Next
        </button>
      </div>
    </Form>
  );
}
