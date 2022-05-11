import { Bottle, Review } from "@prisma/client";
import BottleDetails from "./BottleDetails";
import SettingDetails from "./SettingDetails";
import EditIcon from "~/components/Icons/EditIcon";
import DeleteIcon from "~/components/Icons/DeleteIcon";
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
      <div className="align-center my-2 -mb-4 flex">
        <BottleDetails bottle={bottle} />
        <div className="-mt-6">
          <ReviewImage imageUrl={imageUrl} bottleName={bottle.name} />
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <SettingDetails bottle={bottle} review={review} />
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
      <div className="flex">
        <NotesDetails
          fruit={{
            cherry: review.cherry as number,
            strawberry: review.strawberry as number,
            raspberry: review.raspberry as number,
            blackberry: review.blackberry as number,
            blueberry: review.blueberry as number,
            apple: review.apple as number,
            banana: review.banana as number,
            grape: review.grape as number,
            stone: review.stone as number,
            citrus: review.citrus as number,
            tropical: review.tropical as number,
          }}
          spice={{
            pepper: review.pepper as number,
            bakingSpice: review.bakingSpice as number,
            cinnamon: review.cinnamon as number,
            herbal: review.herbal as number,
            mint: review.mint as number,
          }}
          earthy={{
            coffee: review.coffee as number,
            tobacco: review.tobacco as number,
            leather: review.leather as number,
            oak: review.oak as number,
            toasted: review.toasted as number,
            smokey: review.smokey as number,
            peanut: review.peanut as number,
            almond: review.almond as number,
            pecan: review.pecan as number,
            walnut: review.walnut as number,
            oily: review.oily as number,
            floral: review.floral as number,
          }}
          grain={{
            corn: review.corn as number,
            rye: review.rye as number,
            wheat: review.wheat as number,
            malt: review.malt as number,
            dough: review.dough as number,
          }}
          sweet={{
            vanilla: review.vanilla as number,
            caramel: review.caramel as number,
            molasses: review.molasses as number,
            butterscotch: review.butterscotch as number,
            honey: review.honey as number,
            chocolate: review.chocolate as number,
            toffee: review.toffee as number,
            sugar: review.sugar as number,
          }}
          rating={{
            value: review.value as number,
            overallRating: review.overallRating as number,
          }}
        />
      </div>
      <div className="flex justify-end">
        <div className="m-1 inline text-right">
          <button
            id="edit-button"
            onClick={handleEditClick}
            className="my-4 rounded bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 focus:bg-blue-400"
          >
            <EditIcon /> Edit
          </button>
        </div>
        <Form method="post" className="m-1 inline text-right">
          <input type="hidden" name="_deleted" value="_deleted" />
          <button
            id="delete-button"
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
