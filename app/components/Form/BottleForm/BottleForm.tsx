import type { FormState } from "~/routes/reviews/new";
import TextInput from "~/components/Form/TextInput/TextInput";
import PrimaryButton from "~/components/Form/PrimaryButton";
import PrependedInput from "~/components/Form/PrependedInput/PrependedInput";
import PostpendedInput from "~/components/Form/PostpendedInput/PostpendedInput";
import React from "react";
import { Form } from "@remix-run/react";

interface IBottleFormProps {
  state: FormState;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BottleForm({ state, changeHandler }: IBottleFormProps) {
  return (
    <Form method="post" className="flex w-full flex-col">
      <h2>Bottle Information</h2>
      <div className="-mx-3 my-3 mb-6 flex flex-wrap rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-2 sm:p-6">
        <div className="mb-2 w-full px-3 md:mb-0">
          <TextInput
            type="text"
            labelName="Name"
            name="name"
            value={state.name}
            changeHandler={(e) => changeHandler(e)}
            emoji="📛"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Distiller"
            name="distiller"
            value={state.distiller}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌱"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Bottler"
            name="bottler"
            value={state.bottler}
            changeHandler={(e) => changeHandler(e)}
            emoji="🍾"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Producer"
            name="producer"
            value={state.producer}
            changeHandler={(e) => changeHandler(e)}
            emoji="🏗️"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Type"
            name="type"
            value={state.type}
            changeHandler={(e) => changeHandler(e)}
            emoji="©️"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Country of Origin"
            name="country"
            value={state.country}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌎"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Region"
            name="region"
            value={state.region}
            changeHandler={(e) => changeHandler(e)}
            emoji="🏔️"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <PrependedInput
            prependedCharacter="$"
            type="text"
            labelName="Price"
            name="price"
            value={state.price}
            changeHandler={(e) => changeHandler(e)}
            emoji="💲"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Age"
            name="age"
            value={state.age}
            changeHandler={(e) => changeHandler(e)}
            emoji="👴"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Color"
            name="color"
            value={state.color}
            changeHandler={(e) => changeHandler(e)}
            emoji="🌈"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Year"
            name="year"
            value={state.year}
            changeHandler={(e) => changeHandler(e)}
            emoji="📆"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Batch / Barrel"
            name="batch"
            value={state.batch}
            changeHandler={(e) => changeHandler(e)}
            emoji="2️⃣"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Size"
            name="size"
            value={state.size}
            changeHandler={(e) => changeHandler(e)}
            emoji="🍆"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <PostpendedInput
            postpendedCharacter="%"
            type="text"
            labelName="Alcohol Percent"
            name="alcoholPercent"
            value={state.alcoholPercent}
            changeHandler={(e) => changeHandler(e)}
            emoji="💫"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <PostpendedInput
            postpendedCharacter="pf"
            type="text"
            labelName="Proof"
            name="proof"
            value={state.proof}
            changeHandler={(e) => changeHandler(e)}
            emoji="🔥"
          />
        </div>
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2 lg:w-1/3">
          <TextInput
            type="text"
            labelName="Finishing"
            name="finishing"
            value={state.finishing}
            changeHandler={(e) => changeHandler(e)}
            emoji="🍷"
          />
        </div>
      </div>
      <PrimaryButton callToAction="Next" />
    </Form>
  );
}
