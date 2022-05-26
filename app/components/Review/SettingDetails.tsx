import { Bottle, Review } from "@prisma/client";
import ReviewField from "~/components/Review/ReviewField";

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
        <ReviewField labelName="Glassware" value={review.glassware as string} />
        <ReviewField labelName="Rest Time" value={review.restTime as string} />
        <ReviewField labelName="Color" value={bottle.color as string} />
        <ReviewField labelName="Finishing" value={bottle.finishing as string} />
      </div>
      <div className="flex py-1">
        <div>
          <span className="font-bold">Setting</span>: {review.setting}
        </div>
      </div>
    </div>
  );
}
