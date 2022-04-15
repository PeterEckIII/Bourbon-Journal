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
    <div className="flex flex-col justify-between">
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Fruit</h4>
        <ul>
          <li>Cherry: {fruit.cherry}</li>
          <li>Strawberry: {fruit.strawberry}</li>
          <li>Raspberry: {fruit.raspberry}</li>
          <li>Blackberry: {fruit.blackberry}</li>
          <li>Blueberry: {fruit.blueberry}</li>
          <li>Apple: {fruit.apple}</li>
          <li>Banana: {fruit.banana}</li>
          <li>Grape: {fruit.grape}</li>
          <li>Stone Fruit: {fruit.stone}</li>
          <li>Citrus: {fruit.citrus}</li>
          <li>Tropical: {fruit.tropical}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Spice</h4>
        <ul>
          <li>Black Pepper: {spice.pepper}</li>
          <li>Baking Spice: {spice.bakingSpice}</li>
          <li>Cinnamon: {spice.cinnamon}</li>
          <li>Herbal: {spice.herbal}</li>
          <li>Mint: {spice.mint}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Sweet</h4>
        <ul>
          <li>Vanilla: {sweet.vanilla}</li>
          <li>Caramel: {sweet.caramel}</li>
          <li>Molasses: {sweet.molasses}</li>
          <li>Butterscotch: {sweet.butterscotch}</li>
          <li>Honey: {sweet.honey}</li>
          <li>Chocolate: {sweet.chocolate}</li>
          <li>Toffee: {sweet.toffee}</li>
          <li>Sugar: {sweet.sugar}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Earthy</h4>
        <ul>
          <li>Coffee: {earthy.coffee}</li>
          <li>Tobacco: {earthy.tobacco}</li>
          <li>Leather: {earthy.leather}</li>
          <li>Oak: {earthy.oak}</li>
          <li>Toasted: {earthy.toasted}</li>
          <li>Smokey: {earthy.smokey}</li>
          <li>Peanut: {earthy.peanut}</li>
          <li>Almond: {earthy.almond}</li>
          <li>Pecan: {earthy.pecan}</li>
          <li>Walnut: {earthy.walnut}</li>
          <li>Floral: {earthy.floral}</li>
          <li>Oily: {earthy.oily}</li>
        </ul>
      </div>
      <div className="m-2 border-2 p-2">
        <h4 className="underline">Grain</h4>
        <ul>
          <li>Corn: {grain.corn}</li>
          <li>Rye: {grain.rye}</li>
          <li>Wheat: {grain.wheat}</li>
          <li>Malt: {grain.malt}</li>
          <li>Dough: {grain.dough}</li>
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
