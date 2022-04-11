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

  baked: number;
  buttery: number;
  chocolate: number;
  toffee: number;
  corn: number;
  rye: number;
  wheat: number;
  malt: number;
  bakingSpice: number;
  molasses: number;
  nutty: number;
  oaky: number;
  redFruit: number;
  darkFruit: number;
  berryFruit: number;
  citrusFruit: number;
  stoneFruit: number;
  driedFruit: number;
  earthy: number;
  tobacco: number;
  leather: number;
  floral: number;
  herbaceous: number;
  overallRating: number;
  value: number;
};

export type ContextType = {
  state: FormState;
  stateSetter?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  baked: 0,
  buttery: 0,
  chocolate: 0,
  toffee: 0,
  corn: 0,
  rye: 0,
  wheat: 0,
  malt: 0,
  bakingSpice: 0,
  molasses: 0,
  nutty: 0,
  oaky: 0,
  redFruit: 0,
  darkFruit: 0,
  berryFruit: 0,
  citrusFruit: 0,
  stoneFruit: 0,
  driedFruit: 0,
  earthy: 0,
  tobacco: 0,
  leather: 0,
  floral: 0,
  herbaceous: 0,
  overallRating: 0,
  value: 0,
};

export default function NewReviewPage() {
  const [formState, setFormState] = React.useState<FormState>(initialState);

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;
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
    <div className="m-4 p-4">
      <h1>New Review</h1>
      <Outlet context={context} />
    </div>
  );
}
