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
            <span className="font-bold">Name</span>:{" "}
            <span className="">{bottle.name}</span>{" "}
            {bottle.batch !== "N/A" ? bottle.batch : null}{" "}
          </div>
          <div className="py-1">
            <span className="font-bold">Type</span>:{" "}
            <span className="">{bottle.type}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Price</span>:{" "}
            <span className="">{bottle.price}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">ABV</span>:{" "}
            <span className="">{bottle.alcoholPercent}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Proof</span>:{" "}
            <span className="">{bottle.proof}</span> proof
          </div>
          <div className="py-1">
            <span className="font-bold">Age</span>:{" "}
            <span className="">{bottle.age}</span>
          </div>
        </div>
        <div>
          <div className="py-1">
            <span className="font-bold">Year</span>:{" "}
            <span className="">{bottle.year}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Batch</span>:{" "}
            <span className="">{bottle.batch}</span>
          </div>
        </div>
        <div>
          <div className="py-1">
            <span className="font-bold">Distiller</span>:{" "}
            <span className="">{bottle.distiller}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Bottler</span>:{" "}
            <span className="">{bottle.bottler}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Producer</span>:{" "}
            <span className="">{bottle.producer}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Country</span>:{" "}
            <span className="">{bottle.country}</span>
          </div>
          <div className="py-1">
            <span className="font-bold">Region</span>:{" "}
            <span className="">{bottle.region}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
