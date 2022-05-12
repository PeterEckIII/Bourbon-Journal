import TextareaReviewInput from "./TextareaReviewInput";
import { render, fireEvent } from "@testing-library/react";
import { expect } from "vitest";

const setup = () => {
  const utils = render(
    <TextareaReviewInput
      labelName="Nose"
      name="nose"
      value=""
      emoji="👃"
      changeHandler={vi.fn()}
    />
  );
  const input = utils.getByLabelText("nose-input");
  return {
    input,
    ...utils,
  };
};

describe("<TextareaReviewInput />", () => {
  test("Should render with provided props", () => {
    const { input, getByDisplayValue } = setup();
    expect(input).toBeDefined();
    expect(getByDisplayValue("")).toBeDefined();
    expect("👃").toBeDefined();
  });
  test("Should react to change in input", () => {
    const { input, getByDisplayValue } = setup();
    expect(input).toBeDefined();
    fireEvent.change(input, {
      target: { value: "The nose is great on this one!" },
    });
    expect(getByDisplayValue("The nose is great on this one!")).toBeDefined();
  });
  test("Should allow editing the field if a value is already present", () => {
    const { getByDisplayValue, getByLabelText } = render(
      <TextareaReviewInput
        labelName="Nose"
        name="nose"
        value="This nose is AMAZING!!!"
        emoji="👃"
        changeHandler={vi.fn()}
      />
    );
    const input = getByLabelText("nose-input");
    expect(getByDisplayValue("This nose is AMAZING!!!")).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });
    expect(getByDisplayValue("")).toBeDefined();
    fireEvent.change(input, {
      target: { value: "Honestly I'm not impressed" },
    });
    expect(getByDisplayValue("Honestly I'm not impressed")).toBeDefined();
  });
});
