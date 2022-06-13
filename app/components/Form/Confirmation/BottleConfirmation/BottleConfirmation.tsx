import React from "react";
import { FormState } from "~/routes/reviews/new";
import DefaultInput from "../DefaultInput/DefaultInput";

interface IBottleConfirmationProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BottleConfirmation({
  state,
  changeHandler,
}: IBottleConfirmationProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          name="name"
          type="text"
          label="Name"
          defaultValue={state.name}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          name="distiller"
          type="text"
          label="Distiller"
          defaultValue={state.distiller}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Bottler"
          name="bottler"
          defaultValue={state.bottler}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Producer"
          name="producer"
          defaultValue={state.producer}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Type"
          name="type"
          defaultValue={state.type}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Country"
          name="country"
          defaultValue={state.country}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Region"
          name="region"
          defaultValue={state.region}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Price"
          name="price"
          defaultValue={state.price}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Age"
          name="age"
          defaultValue={state.age}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Color"
          name="color"
          defaultValue={state.color}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Year"
          name="year"
          defaultValue={state.year}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Batch / Barrel"
          name="batch"
          defaultValue={state.batch}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Size"
          name="size"
          defaultValue={state.size}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="ABV"
          name="alcoholPercent"
          defaultValue={state.alcoholPercent}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Proof"
          name="proof"
          defaultValue={state.proof}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2 w-full px-3 md:mb-0">
        <DefaultInput
          type="text"
          label="Finishing"
          name="finishing"
          defaultValue={state.finishing}
          changeHandler={(e) => changeHandler(e)}
        />
      </div>
    </div>
  );
}
