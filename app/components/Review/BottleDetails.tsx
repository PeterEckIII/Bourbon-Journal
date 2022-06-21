import type { Bottle } from "@prisma/client";
import ReviewField from "./ReviewField/ReviewField";

type BottleDetailProps = {
  bottle: Bottle;
};

export default function BottleDetails({ bottle }: BottleDetailProps) {
  return (
    <div className="p-1">
      <div className="m-2 flex flex-col py-5">
        <div id="bottleDetails">
          <ReviewField labelName="Type" value={bottle.type as string} />
          <ReviewField labelName="Price" value={bottle.price as string} />
          <ReviewField
            labelName="ABV"
            value={bottle.alcoholPercent as string}
          />
          <ReviewField labelName="Proof" value={bottle.proof as string} />
          <ReviewField labelName="Age" value={bottle.age as string} />
        </div>
        <div>
          <ReviewField labelName="Year" value={bottle.year as string} />
          <ReviewField labelName="Batch" value={bottle.batch ?? ""} />
        </div>
        <div>
          <ReviewField
            labelName="Distiller"
            value={bottle.distiller as string}
          />
          <ReviewField labelName="Bottler" value={bottle.bottler as string} />
          <ReviewField labelName="Producer" value={bottle.producer as string} />
          <ReviewField labelName="Country" value={bottle.country as string} />
          <ReviewField labelName="Region" value={bottle.region as string} />
        </div>
      </div>
    </div>
  );
}
