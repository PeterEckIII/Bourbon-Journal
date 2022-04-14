interface NotesDetailsProps {
  fruit: {
    redFruit: number;
    darkFruit: number;
    berryFruit: number;
    citrusFruit: number;
    stoneFruit: number;
    driedFruit: number;
  };
  spice: {
    corn: number;
    rye: number;
    wheat: number;
    malt: number;
    bakingSpice: number;
  };
  earthy: {
    oak: number;
    earthy: number;
    nutty: number;
    floral: number;
    herbaceous: number;
  };
  sweet: {
    chocolate: number;
    toffee: number;
    molasses: number;
  };
  other: {
    baked: number;
    buttery: number;
    tobacco: number;
    leather: number;
  };
  rating: {
    value: number;
    overallRating: number;
  };
}

export default function NotesDetails({
  fruit,
  spice,
  earthy,
  sweet,
  other,
  rating,
}: NotesDetailsProps) {
  return (
    <div className="flex flex-col justify-between">
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Fruit</h4>
        <ul>
          <li>Red: {fruit.redFruit}</li>
          <li>Berries: {fruit.berryFruit}</li>
          <li>Dark: {fruit.darkFruit}</li>
          <li>Citrus: {fruit.citrusFruit}</li>
          <li>Stone: {fruit.stoneFruit}</li>
          <li>Dried: {fruit.driedFruit}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Spice</h4>
        <ul>
          <li>Corn: {spice.corn}</li>
          <li>Rye: {spice.rye}</li>
          <li>Wheat: {spice.wheat}</li>
          <li>Malt: {spice.malt}</li>
          <li>Baking Spice: {spice.bakingSpice}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Sweet</h4>
        <ul>
          <li>Chocolate: {sweet.chocolate}</li>
          <li>Molasses: {sweet.molasses}</li>
          <li>Toffee: {sweet.toffee}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Earthy</h4>
        <ul>
          <li>Oaky: {earthy.oak}</li>
          <li>Earthy: {earthy.earthy}</li>
          <li>Nutty: {earthy.nutty}</li>
          <li>Floral: {earthy.floral}</li>
          <li>Herbaceous: {earthy.herbaceous}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Other</h4>
        <ul>
          <li>Baked: {other.baked}</li>
          <li>Butter: {other.buttery}</li>
          <li>Tobacco: {other.tobacco}</li>
          <li>Leather: {other.leather}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Rating</h4>
        <ul>
          <li>Value for Money: {rating.value}</li>
          <li>Overall Rating: {rating.overallRating}</li>
        </ul>
      </div>
    </div>
  );
}
