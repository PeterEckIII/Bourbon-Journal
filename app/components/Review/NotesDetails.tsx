interface NotesDetailsProps {
  fruit: {
    cherry: number;
    strawberry: number;
    raspberry: number;
    blackberry: number;
    blueberry: number;
    apple: number;
    banana: number;
    grape: number;
    stone: number;
    citrus: number;
    tropical: number;
  };
  spice: {
    pepper: number;
    bakingSpice: number;
    cinnamon: number;
    herbal: number;
    mint: number;
  };
  earthy: {
    coffee: number;
    tobacco: number;
    leather: number;
    oak: number;
    toasted: number;
    smokey: number;
    peanut: number;
    almond: number;
    pecan: number;
    walnut: number;
    oily: number;
    floral: number;
  };
  grain: {
    corn: number;
    rye: number;
    wheat: number;
    malt: number;
    dough: number;
  };
  sweet: {
    vanilla: number;
    caramel: number;
    molasses: number;
    butterscotch: number;
    honey: number;
    chocolate: number;
    toffee: number;
    sugar: number;
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
  grain,
  sweet,
  rating,
}: NotesDetailsProps) {
  return (
    <div className="flex justify-between">
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Fruit</h4>
        <ul className="">
          <li className="my-2 py-2">Cherry: {fruit.cherry}</li>
          <li className="my-2 py-2">Strawberry: {fruit.strawberry}</li>
          <li className="my-2 py-2">Raspberry: {fruit.raspberry}</li>
          <li className="my-2 py-2">Blackberry: {fruit.blackberry}</li>
          <li className="my-2 py-2">Blueberry: {fruit.blueberry}</li>
          <li className="my-2 py-2">Apple: {fruit.apple}</li>
          <li className="my-2 py-2">Banana: {fruit.banana}</li>
          <li className="my-2 py-2">Grape: {fruit.grape}</li>
          <li className="my-2 py-2">Stone Fruit: {fruit.stone}</li>
          <li className="my-2 py-2">Citrus: {fruit.citrus}</li>
          <li className="my-2 py-2">Tropical: {fruit.tropical}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Spice</h4>
        <ul>
          <li className="my-2 py-2">Black Pepper: {spice.pepper}</li>
          <li className="my-2 py-2">Baking Spice: {spice.bakingSpice}</li>
          <li className="my-2 py-2">Cinnamon: {spice.cinnamon}</li>
          <li className="my-2 py-2">Herbal: {spice.herbal}</li>
          <li className="my-2 py-2">Mint: {spice.mint}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Sweet</h4>
        <ul>
          <li className="my-2 py-2">Vanilla: {sweet.vanilla}</li>
          <li className="my-2 py-2">Caramel: {sweet.caramel}</li>
          <li className="my-2 py-2">Molasses: {sweet.molasses}</li>
          <li className="my-2 py-2">Butterscotch: {sweet.butterscotch}</li>
          <li className="my-2 py-2">Honey: {sweet.honey}</li>
          <li className="my-2 py-2">Chocolate: {sweet.chocolate}</li>
          <li className="my-2 py-2">Toffee: {sweet.toffee}</li>
          <li className="my-2 py-2">Sugar: {sweet.sugar}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Earthy</h4>
        <ul>
          <li className="my-2 py-2">Coffee: {earthy.coffee}</li>
          <li className="my-2 py-2">Tobacco: {earthy.tobacco}</li>
          <li className="my-2 py-2">Leather: {earthy.leather}</li>
          <li className="my-2 py-2">Oak: {earthy.oak}</li>
          <li className="my-2 py-2">Toasted: {earthy.toasted}</li>
          <li className="my-2 py-2">Smokey: {earthy.smokey}</li>
          <li className="my-2 py-2">Peanut: {earthy.peanut}</li>
          <li className="my-2 py-2">Almond: {earthy.almond}</li>
          <li className="my-2 py-2">Pecan: {earthy.pecan}</li>
          <li className="my-2 py-2">Walnut: {earthy.walnut}</li>
          <li className="my-2 py-2">Floral: {earthy.floral}</li>
          <li className="my-2 py-2">Oily: {earthy.oily}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Grain</h4>
        <ul>
          <li className="my-2 py-2">Corn: {grain.corn}</li>
          <li className="my-2 py-2">Rye: {grain.rye}</li>
          <li className="my-2 py-2">Wheat: {grain.wheat}</li>
          <li className="my-2 py-2">Malt: {grain.malt}</li>
          <li className="my-2 py-2">Dough: {grain.dough}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Rating</h4>
        <ul>
          <li className="my-2 py-2">Value for Money: {rating.value}</li>
          <li className="my-2 py-2">Overall Rating: {rating.overallRating}</li>
        </ul>
      </div>
    </div>
  );
}
