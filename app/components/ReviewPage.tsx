import { Bottle, Review } from "@prisma/client";
import BottleDetails from "./BottleDetails";
import SettingDetails from "./SettingDetails";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { Form } from "@remix-run/react";
import NotesDetails from "./NotesDetails";
import ReviewImage from "./ReviewImage";

interface ReviewPageProps {
  bottle?: Bottle;
  review?: Review;
  imageUrl?: string;
  handleEditClick: () => void;
}

export default function ReviewPage({
  bottle,
  review,
  imageUrl,
  handleEditClick,
}: ReviewPageProps) {
  if (!bottle || !review || !imageUrl || !handleEditClick) {
    throw new Error(`Error with props!`);
  }
  return (
    // CONTAINER
    <div className="my-2 flex flex-col">
      <h3 className="text-2xl font-bold">
        {bottle.name} {bottle.batch?.startsWith("N") ? null : bottle.batch}
      </h3>
      <div className="flex pl-2">
        <p className="py-4">{review.date} </p>
      </div>
      <div className="align-center my-2 flex">
        <BottleDetails bottle={bottle} />
        <ReviewImage imageUrl={imageUrl} bottleName={bottle.name} />
      </div>
      <div className="flex">
        <div className="flex w-1/3 flex-col">
          <SettingDetails bottle={bottle} review={review} />
        </div>
        <div className="flex w-2/3">
          <NotesDetails
            fruit={{
              cherry: review.cherry,
              strawberry: review.strawberry,
              raspberry: review.raspberry,
              blackberry: review.blackberry,
              blueberry: review.blueberry,
              apple: review.apple,
              banana: review.banana,
              grape: review.grape,
              stone: review.stone,
              citrus: review.citrus,
              tropical: review.tropical,
            }}
            spice={{
              pepper: review.pepper,
              bakingSpice: review.bakingSpice,
              cinnamon: review.cinnamon,
              herbal: review.herbal,
              mint: review.mint,
            }}
            earthy={{
              coffee: review.coffee,
              tobacco: review.tobacco,
              leather: review.leather,
              oak: review.oak,
              toasted: review.toasted,
              smokey: review.smokey,
              peanut: review.peanut,
              almond: review.almond,
              pecan: review.pecan,
              walnut: review.walnut,
              oily: review.oily,
              floral: review.floral,
            }}
            grain={{
              corn: review.corn,
              rye: review.rye,
              wheat: review.wheat,
              malt: review.malt,
              dough: review.dough,
            }}
            sweet={{
              vanilla: review.vanilla,
              caramel: review.caramel,
              molasses: review.molasses,
              butterscotch: review.butterscotch,
              honey: review.honey,
              chocolate: review.chocolate,
              toffee: review.toffee,
              sugar: review.sugar,
            }}
            rating={{
              value: review.value,
              overallRating: review.overallRating,
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col ">
        <div>
          <div className="my-3 rounded border-2 py-3 pl-2">
            <span className="font-bold underline">Nose</span>:
            <div>{review.nose}</div>
          </div>
          <div className="my-3 rounded border-2 py-3 pl-2">
            <span className="font-bold underline">Palate</span>:{" "}
            <div>{review.palate}</div>
          </div>
          <div className="my-3 rounded border-2 py-3 pl-2">
            <span className="font-bold underline">Finish</span>:{" "}
            <div>{review.finish}</div>
          </div>
          <div className="my-3 rounded border-2 py-3 pl-2">
            <span className="font-bold underline">Final Thoughts</span>:{" "}
            <div>{review.thoughts}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="m-1 inline text-right">
          <button
            onClick={handleEditClick}
            className="my-4 rounded bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 focus:bg-blue-400"
          >
            <EditIcon /> Edit
          </button>
        </div>
        <Form method="post" className="m-1 inline text-right">
          <input type="hidden" name="_deleted" value="_deleted" />
          <button
            type="submit"
            className="my-4 rounded bg-red-500 py-2 px-4 text-white hover:bg-red-700 focus:bg-red-400"
          >
            <DeleteIcon /> Delete
          </button>
        </Form>
      </div>
    </div>
  );
}
