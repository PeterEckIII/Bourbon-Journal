import { Form, Link } from "@remix-run/react";
import NoteTabs from "~/components/Review/NoteTabs/NoteTabs";
import type { CustomFormData } from "~/utils/helpers.server";
import PrimaryButton from "../PrimaryButton";

interface IConfirmFormProps {
  formData: CustomFormData;
  imageId: string;
}

export default function ConfirmForm({ formData, imageId }: IConfirmFormProps) {
  return (
    <div className="my-2 flex flex-col">
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">
          {formData.name}{" "}
          {(formData.batch !== "None" && formData.batch !== "N/A") || "n/a"
            ? formData.batch
            : ""}{" "}
        </h1>
        <p>{formData.date}</p>
        <input type="hidden" name="imageId" value={imageId} />
        <h4 className="mb-4 text-left text-2xl">Bottle Information</h4>
        <div className="my-4 flex rounded-lg border border-gray-200 bg-white shadow-md">
          <div className="flex w-1/2 flex-col border-r-2 bg-yellow-50">
            <div className="border py-1 text-center">Type</div>
            <div className="border py-1 text-center">Price</div>
            <div className="border py-1 text-center">ABV</div>
            <div className="border py-1 text-center">Proof</div>
            <div className="border py-1 text-center">Age</div>
            <div className="border py-1 text-center">Year</div>
            <div className="border py-1 text-center">Batch</div>
            <div className="border py-1 text-center">Distiller</div>
            <div className="border py-1 text-center">Bottler</div>
            <div className="border py-1 text-center">Producer</div>
            <div className="border py-1 text-center">Country</div>
            <div className="border py-1 text-center">Region</div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div className="border py-1 text-center">{formData.type}</div>
            <div className="border py-1 text-center">{formData.price}</div>
            <div className="border py-1 text-center">
              {formData.alcoholPercent}
            </div>
            <div className="border py-1 text-center">{formData.proof}</div>
            <div className="border py-1 text-center">{formData.age}</div>
            <div className="border py-1 text-center">{formData.year}</div>
            <div className="border py-1 text-center">{formData.batch}</div>
            <div className="border py-1 text-center">{formData.distiller}</div>
            <div className="border py-1 text-center">{formData.bottler}</div>
            <div className="border py-1 text-center">{formData.producer}</div>
            <div className="border py-1 text-center">{formData.country}</div>
            <div className="border py-1 text-center">{formData.region}</div>
          </div>
        </div>
        <div className="my-2 text-right">
          <Link
            prefetch="intent"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            to={`/review/new/bottleInfo?id=${formData.redisId}`}
          >
            Edit Bottle Information
          </Link>
        </div>

        {/* SETTING */}
        <h5 className="my-2 text-left text-2xl">Your Review</h5>
        <div className="my-2 flex flex-col">
          <div className="text-md flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h6 className="-mt-2 mb-2 text-center text-lg underline">
              Details
            </h6>
            <div className="mb-2 flex justify-between p-2">
              <div className="w-1/2 border-r-2 pr-2">
                <div className="p-2">
                  <div>
                    <strong>Glassware</strong>{" "}
                    <span className="block">{formData.glassware}</span>
                  </div>
                </div>
                <div className="p-2">
                  <div>
                    <strong>Color</strong>
                    <span className="block"> {formData.color}</span>
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <div className="p-2">
                  <strong>Rest Time</strong>
                  <span className="block">{formData.restTime}</span>
                </div>
                <div className="p-2">
                  <strong>Finishing</strong>
                  <span className="block">{formData.finishing}</span>
                </div>
              </div>
            </div>
            <hr className="pt-2" />
            <div className="pt-4 text-sm">
              <strong>Setting</strong>: {formData.setting}
            </div>
          </div>
          <div className="text-md mt-6 flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h6 className="my-2">Nose</h6>
            {formData.nose}
          </div>
          <div className="text-md mt-6 flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h6 className="my-2">Palate</h6>
            {formData.palate}
          </div>
          <div className="text-md mt-6 flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h6 className="my-2">Finish</h6>
            {formData.finish}
          </div>
          <div className="text-md mt-6 flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h6 className="my-2">Final Thoughts</h6>
            {formData.thoughts}
          </div>
        </div>
        <div className="my-2 text-right">
          <Link
            prefetch="intent"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            to={`/review/new/setting?id=${formData.redisId}`}
          >
            Edit Your Review
          </Link>
        </div>
        {/* TASTING NOTES */}
        <h5 className="my-2 text-left text-2xl">Tasting Notes</h5>
        <div className="flex">
          <NoteTabs
            fruit={{
              cherry: formData.cherry as number,
              strawberry: formData.strawberry as number,
              raspberry: formData.raspberry as number,
              blackberry: formData.blackberry as number,
              blueberry: formData.blueberry as number,
              apple: formData.apple as number,
              banana: formData.banana as number,
              grape: formData.grape as number,
              stone: formData.stone as number,
              citrus: formData.citrus as number,
              tropical: formData.tropical as number,
            }}
            spice={{
              pepper: formData.pepper as number,
              bakingSpice: formData.bakingSpice as number,
              cinnamon: formData.cinnamon as number,
              herbal: formData.herbal as number,
              mint: formData.mint as number,
            }}
            earthy={{
              coffee: formData.coffee as number,
              tobacco: formData.tobacco as number,
              leather: formData.leather as number,
              oak: formData.oak as number,
              toasted: formData.toasted as number,
              smokey: formData.smokey as number,
              peanut: formData.peanut as number,
              almond: formData.almond as number,
              pecan: formData.pecan as number,
              walnut: formData.walnut as number,
              oily: formData.oily as number,
              floral: formData.floral as number,
            }}
            grain={{
              corn: formData.corn as number,
              rye: formData.rye as number,
              wheat: formData.wheat as number,
              malt: formData.malt as number,
              dough: formData.dough as number,
            }}
            sweet={{
              vanilla: formData.vanilla as number,
              caramel: formData.caramel as number,
              molasses: formData.molasses as number,
              butterscotch: formData.butterscotch as number,
              honey: formData.honey as number,
              chocolate: formData.chocolate as number,
              toffee: formData.toffee as number,
              sugar: formData.sugar as number,
            }}
            rating={{
              value: formData.value as number,
              overallRating: formData.overallRating as number,
            }}
          />
        </div>
        <div className="my-2 text-right">
          <Link
            prefetch="intent"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            to={`/review/new/notes?id=${formData.redisId}`}
          >
            Edit Tasting Notes
          </Link>
        </div>
      </div>
      <Form method="post">
        <input type="hidden" name="id" value={formData.redisId} />
        <input type="hidden" name="imageId" value={imageId} />
        <PrimaryButton callToAction="Submit" />
      </Form>
    </div>
  );
}
