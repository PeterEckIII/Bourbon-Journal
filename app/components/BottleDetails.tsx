import { Bottle } from "@prisma/client";

type BottleDetailProps = {
  bottle: Bottle;
};

export default function BottleDetails({ bottle }: BottleDetailProps) {
  return (
    <div className="p-1">
      <h4 className="text-l underline">Bottle Details:</h4>
      <div className="m-2 flex flex-col py-5">
        <div>
          <div className="py-1">
            <span className="font-bold">Name</span>: {bottle.name}{" "}
            {bottle.batch !== "N/A" ? bottle.batch : null}{" "}
          </div>
          <div className="py-1">
            <span className="font-bold">Type</span>: {bottle.type}
          </div>
          <div className="py-1">
            <span className="font-bold">Price</span>: {bottle.price}
          </div>
          <div className="py-1">
            <span className="font-bold">Alcohol Percent</span>:{" "}
            {bottle.alcoholPercent}
          </div>
          <div className="py-1">
            <span className="font-bold">Proof</span>: {bottle.proof}pf
          </div>
          <div className="py-1">
            <span className="font-bold">Age</span>: {bottle.age}
          </div>
        </div>
        <div>
          <div className="py-1">
            <span className="font-bold">Year</span>: {bottle.year}
          </div>
          <div className="py-1">
            <span className="font-bold">Batch</span>: {bottle.batch}
          </div>
        </div>
        <div>
          <div className="py-1">
            <span className="font-bold">Distiller</span>: {bottle.distiller}
          </div>
          <div className="py-1">
            <span className="font-bold">Bottler</span>: {bottle.bottler}
          </div>
          <div className="py-1">
            <span className="font-bold">Producer</span>: {bottle.producer}
          </div>
          <div className="py-1">
            <span className="font-bold">Country</span>: {bottle.country}
          </div>
          <div className="py-1">
            <span className="font-bold">Region</span>: {bottle.region}
          </div>
        </div>
      </div>
    </div>
  );
}
