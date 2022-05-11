import TextReviewInput from "./TextReviewInput";
import { render, fireEvent } from "@testing-library/react";
import { expect } from "vitest";

const setup = () => {
  const utils = render(
    <TextReviewInput
      labelName="Distiller"
      name="distiller"
      type="text"
      value=""
      changeHandler={vi.fn()}
      emoji="🌱"
    />
  );
  const input = utils.getByLabelText("distiller-input");
  return {
    input,
    ...utils,
  };
};

describe("<TextReviewInput />", () => {
  test("Should render with provided props", async () => {
    const { input } = setup();
    expect(input).toBeDefined();
  });
  test("Should react to change in value", async () => {
    const { input, getByDisplayValue } = setup();
    fireEvent.change(input, { target: { value: "Buffalo Trace" } });
    expect(getByDisplayValue("Buffalo Trace")).toBeDefined();
  });
  test("Should allow clearing of the input and retyping", () => {
    const { getByLabelText, getByDisplayValue } = render(
      <TextReviewInput
        labelName="Distiller"
        name="distiller"
        type="text"
        value="Heaven Hill"
        changeHandler={vi.fn()}
        emoji="🌱"
      />
    );
    const input = getByLabelText("distiller-input");
    expect(getByDisplayValue("Heaven Hill")).toBeDefined();
    fireEvent.change(input, { target: { value: "" } });
    expect(getByDisplayValue("")).toBeDefined();
    fireEvent.change(input, { target: { value: "Buffalo Trace" } });
    expect(getByDisplayValue("Buffalo Trace")).toBeDefined();
  });
});
