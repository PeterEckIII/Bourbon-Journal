import { Bottle, Review } from "@prisma/client";

type SettingDetailsProps = {
  review: Review;
  bottle: Bottle;
};

export default function SettingDetails({
  review,
  bottle,
}: SettingDetailsProps) {
  return (
    <div className="flex flex-col">
      <h4 className="text-2xl underline">Review</h4>
      <div className="flex flex-col flex-wrap py-2">
        <div className=" py-1">
          <span className="font-bold">Color</span>: {bottle.color}
        </div>
        <div className="py-1">
          <span className="font-bold">Glassware</span>: {review.glassware}
        </div>
        <div className="py-1">
          <span className="font-bold">Rest Time</span>: {review.restTime}
        </div>
        <div className="py-1">
          <span className="font-bold">Finishing</span>: {bottle.finishing}
        </div>
      </div>
      <div className="flex py-1">
        <div>
          <span className="font-bold">Setting</span>: {review.setting}
        </div>
      </div>
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
  );
}
