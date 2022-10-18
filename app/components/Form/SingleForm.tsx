import type { ContextType, FormState } from "~/routes/reviews/new";
import TextInput from "~/components/UI/Inputs/TextInput/TextInput";
import PrimaryButton from "~/components/Form/Button";
import PrependedInput from "~/components/UI/Inputs/PrependedInput/PrependedInput";
import PostpendedInput from "~/components/UI/Inputs/PostpendedInput/PostpendedInput";
import React from "react";
import { Form, useOutletContext } from "@remix-run/react";
import { ValidatedForm, validationError } from "remix-validated-form";
import type { CustomFormData } from "~/utils/helpers.server";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import FloatingInput from "../UI/Inputs/FloatingInput/FloatingInput";

export const validator = withZod(
  z.object({
    name: z.string().min(1, { message: "Bottle name is required" }),
    type: z.string().min(1, { message: "Type of liquor is required" }),
    distiller: z.string().min(1, { message: "Distiller is required" }),
    producer: z.string().min(1, { message: "Producer is required" }),
    bottler: z.string().min(1, { message: "Bottler is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    region: z.string().min(1, { message: "Region is required" }),
    price: z.string().min(1, { message: "Price is required" }),
    age: z.string().min(1, { message: "Age is required" }),
    color: z.string().min(1, { message: "Color is required" }),
    year: z.string().min(1, { message: "Year is required" }),
    batch: z
      .string()
      .min(1, { message: "Batch is required (enter N/A if none)" }),
    size: z.string().min(1, { message: "Size is required" }),
    alcoholPercent: z
      .string()
      .min(1, { message: "Alcohol percentage is required" }),
    proof: z.string().min(1, { message: "Proof is required" }),
    finishing: z
      .string()
      .min(1, { message: "Finishing is required (enter N/A if none)" }),
  })
);

export default function SingleForm() {
  const { state, stateSetter } = useOutletContext<ContextType>();
  return (
    <div className="mx-10 rounded-md bg-gray-200 py-6 antialiased sm:px-6 lg:px-8">
      {/* BOTTLE FORM */}
      <div className="bg-gray-100 shadow-md">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="p-4 md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Bottle
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This section is for information about the bottle you're
                reviewing.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 md:col-span-5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="distiller"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Distillery
                      </label>
                      <input
                        type="text"
                        name="distiller"
                        id="distiller"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="producer"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Producer
                      </label>
                      <input
                        type="text"
                        name="producer"
                        id="producer"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="bottler"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bottler
                      </label>
                      <input
                        type="text"
                        name="bottler"
                        id="bottler"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Region
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="size"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Size
                      </label>
                      <input
                        type="text"
                        name="size"
                        id="size"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="color"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        id="color"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="batch"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Batch / Barrel
                      </label>
                      <input
                        type="text"
                        name="batch"
                        id="batch"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Year
                      </label>
                      <input
                        type="text"
                        name="year"
                        id="year"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="alcoholPercent"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ABV
                      </label>
                      <input
                        type="text"
                        name="alcoholPercent"
                        id="alcoholPercent"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="proof"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Proof
                      </label>
                      <input
                        type="text"
                        name="proof"
                        id="proof"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-5 lg:col-span-5">
                      <label
                        htmlFor="finishing"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Finishing
                      </label>
                      <input
                        type="text"
                        name="finishing"
                        id="finishing"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* SETTING / REVIEW FORM */}
      <div className="mt-10 bg-gray-100 shadow-md sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="p-6 md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Your Review
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This section is for the actual review.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 md:col-span-4 lg:col-span-4">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <label
                        htmlFor="restTime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Rest Time
                      </label>
                      <input
                        type="text"
                        name="restTime"
                        id="restTime"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <label
                        htmlFor="glassware"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Glassware
                      </label>
                      <input
                        type="text"
                        name="glassware"
                        id="glassware"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-5">
                      <label
                        htmlFor="setting"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Setting
                      </label>
                      <input
                        type="text"
                        name="setting"
                        id="setting"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="nose"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Nose{" "}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="nose"
                          name="nose"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="palate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Palate{" "}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="palate"
                          name="palate"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="finish"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Finish{" "}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="finish"
                          name="finish"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="thoughts"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Final Thoughts{" "}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="thoughts"
                          name="thoughts"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* TASTING NOTES FORM */}
      <div className="mt-10 bg-gray-100 shadow-md sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="p-6 md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Tasting Notes
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Add specific tasting notes to your review from an array of
                classic whiskey notes.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <div className="py-4">
                        <h4 className="text-lg underline">Spice</h4>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="pepper"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Pepper
                          </label>
                          <input
                            type="number"
                            name="pepper"
                            id="pepper"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="bakingSpice"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Baking Spices
                          </label>
                          <input
                            type="number"
                            name="bakingSpice"
                            id="bakingSpice"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="cinnamon"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Cinnamon
                          </label>
                          <input
                            type="number"
                            name="cinnamon"
                            id="cinnamon"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="herbal"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Herbal
                          </label>
                          <input
                            type="number"
                            name="herbal"
                            id="herbal"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="mint"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Mint
                          </label>
                          <input
                            type="number"
                            name="mint"
                            id="mint"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="py-4">
                        <h4 className="text-lg underline">Fruit</h4>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="cherry"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Cherry
                          </label>
                          <input
                            type="number"
                            name="cherry"
                            id="cherry"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="strawberry"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Strawberry
                          </label>
                          <input
                            type="number"
                            name="strawberry"
                            id="strawberry"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="raspberry"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Raspberry
                          </label>
                          <input
                            type="number"
                            name="raspberry"
                            id="raspberry"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="blackberry"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Blackberry
                          </label>
                          <input
                            type="number"
                            name="blackberry"
                            id="blackberry"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="blueberry"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Blueberry
                          </label>
                          <input
                            type="number"
                            name="blueberry"
                            id="blueberry"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="apple"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Apple
                          </label>
                          <input
                            type="number"
                            name="apple"
                            id="apple"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="grape"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Grape
                          </label>
                          <input
                            type="number"
                            name="grape"
                            id="grape"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="banana"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Banana
                          </label>
                          <input
                            type="number"
                            name="banana"
                            id="banana"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="stone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Stone Fruit
                          </label>
                          <input
                            type="number"
                            name="stone"
                            id="stone"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="citrus"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Citrus
                          </label>
                          <input
                            type="number"
                            name="citrus"
                            id="citrus"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="tropical"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tropical
                          </label>
                          <input
                            type="number"
                            name="tropical"
                            id="tropical"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="py-4">
                        <h4 className="text-lg underline">Earth</h4>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="coffee"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Coffee
                          </label>
                          <input
                            type="number"
                            name="coffee"
                            id="coffee"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="tobacco"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tobacco
                          </label>
                          <input
                            type="number"
                            name="tobacco"
                            id="tobacco"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="leather"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Leather
                          </label>
                          <input
                            type="number"
                            name="leather"
                            id="leather"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="oak"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Oak
                          </label>
                          <input
                            type="number"
                            name="oak"
                            id="oak"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="toasted"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Toasted
                          </label>
                          <input
                            type="number"
                            name="toasted"
                            id="toasted"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="smokey"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Smokey
                          </label>
                          <input
                            type="number"
                            name="smokey"
                            id="smokey"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="peanut"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Peanut
                          </label>
                          <input
                            type="number"
                            name="peanut"
                            id="peanut"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="almond"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Almond
                          </label>
                          <input
                            type="number"
                            name="almond"
                            id="almond"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="pecan"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Pecan
                          </label>
                          <input
                            type="number"
                            name="pecan"
                            id="pecan"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="walnut"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Walnut
                          </label>
                          <input
                            type="number"
                            name="walnut"
                            id="walnut"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="oily"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Oily
                          </label>
                          <input
                            type="number"
                            name="oily"
                            id="oily"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="floral"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Floral
                          </label>
                          <input
                            type="number"
                            name="floral"
                            id="floral"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="py-4">
                        <h4 className="text-lg underline">Grain</h4>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="corn"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Corn
                          </label>
                          <input
                            type="number"
                            name="corn"
                            id="corn"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="rye"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Rye
                          </label>
                          <input
                            type="number"
                            name="rye"
                            id="rye"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="wheat"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Wheat
                          </label>
                          <input
                            type="number"
                            name="wheat"
                            id="wheat"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="malt"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Malt
                          </label>
                          <input
                            type="number"
                            name="malt"
                            id="malt"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="dough"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Dough
                          </label>
                          <input
                            type="number"
                            name="dough"
                            id="dough"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="py-4">
                        <h4 className="text-lg underline">Sweet</h4>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="vanilla"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Vanilla
                          </label>
                          <input
                            type="number"
                            name="vanilla"
                            id="vanilla"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="caramel"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Caramel
                          </label>
                          <input
                            type="number"
                            name="caramel"
                            id="caramel"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="molasses"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Molasses
                          </label>
                          <input
                            type="number"
                            name="molasses"
                            id="molasses"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="butterscotch"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Butterscotch
                          </label>
                          <input
                            type="number"
                            name="butterscotch"
                            id="butterscotch"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="honey"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Honey
                          </label>
                          <input
                            type="number"
                            name="honey"
                            id="honey"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="chocolate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Chocolate
                          </label>
                          <input
                            type="number"
                            name="chocolate"
                            id="chocolate"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="toffee"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Toffee
                          </label>
                          <input
                            type="number"
                            name="toffee"
                            id="toffee"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <label
                            htmlFor="sugar"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Sugar
                          </label>
                          <input
                            type="number"
                            name="sugar"
                            id="sugar"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="py-4">
                        <h4 className="text-lg underline">Overall</h4>
                      </div>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-3 lg:col-span-2">
                          <label
                            htmlFor="value"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Value
                          </label>
                          <input
                            type="number"
                            name="value"
                            id="value"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-3 lg:col-span-2">
                          <label
                            htmlFor="overallRating"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Rating
                          </label>
                          <input
                            type="number"
                            name="overallRating"
                            id="overallRating"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
================ BOTTLE PHOTO ================
<div>
  <label className="block text-sm font-medium text-gray-700"> Bottle Photo </label>
  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div className="space-y-1 text-center">
      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div className="flex text-sm text-gray-600">
        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <span>Upload a file</span>
          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
        </label>
        <p className="pl-1">or drag and drop</p>
      </div>
      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
    </div>
  </div>
  </div>
*/
