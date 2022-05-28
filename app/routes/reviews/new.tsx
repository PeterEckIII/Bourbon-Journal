import * as React from "react";
import { Outlet } from "@remix-run/react";

export type FormState = {
  name: string;
  type: string;
  distiller: string;
  bottler: string;
  producer: string;
  country: string;
  region: string;
  price: string;
  age: string;
  year: string;
  batch: string;
  alcoholPercent: string;
  proof: string;
  size: string;
  color: string;
  finishing: string;
  imageId: string;

  date: string;
  setting: string;
  glassware: string;
  restTime: string;
  nose: string;
  palate: string;
  finish: string;
  thoughts: string;
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
  pepper: number;
  bakingSpice: number;
  cinnamon: number;
  herbal: number;
  mint: number;
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
  corn: number;
  rye: number;
  wheat: number;
  malt: number;
  dough: number;
  vanilla: number;
  caramel: number;
  molasses: number;
  butterscotch: number;
  honey: number;
  chocolate: number;
  toffee: number;
  sugar: number;
  overallRating: number;
  value: number;
};

export type ContextType = {
  state: FormState;
  stateSetter?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormState?: React.Dispatch<React.SetStateAction<FormState>>;
};

const initialState: FormState = {
  name: "",
  type: "",
  distiller: "",
  bottler: "",
  producer: "",
  country: "",
  region: "",
  price: "",
  age: "",
  year: "",
  batch: "",
  alcoholPercent: "",
  proof: "",
  size: "",
  color: "",
  finishing: "",
  imageId: "",

  date: "",
  setting: "",
  glassware: "",
  restTime: "",
  nose: "",
  palate: "",
  finish: "",
  thoughts: "",
  cherry: 0,
  strawberry: 0,
  raspberry: 0,
  blackberry: 0,
  blueberry: 0,
  apple: 0,
  banana: 0,
  grape: 0,
  stone: 0,
  citrus: 0,
  tropical: 0,
  pepper: 0,
  bakingSpice: 0,
  cinnamon: 0,
  herbal: 0,
  mint: 0,
  coffee: 0,
  tobacco: 0,
  leather: 0,
  oak: 0,
  toasted: 0,
  smokey: 0,
  peanut: 0,
  almond: 0,
  pecan: 0,
  walnut: 0,
  oily: 0,
  floral: 0,
  corn: 0,
  rye: 0,
  wheat: 0,
  malt: 0,
  dough: 0,
  vanilla: 0,
  caramel: 0,
  molasses: 0,
  butterscotch: 0,
  honey: 0,
  chocolate: 0,
  toffee: 0,
  sugar: 0,
  overallRating: 0,
  value: 0,
};

export default function NewReviewPage() {
  const [formState, setFormState] = React.useState<FormState>(initialState);

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const context: ContextType = {
    state: formState,
    stateSetter: handleValueChange,
    setFormState: setFormState,
  };

  return (
    <div className="m-4 w-full p-4">
      <Outlet context={context} />
    </div>
  );
}
