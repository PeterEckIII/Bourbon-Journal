import TextReviewCustomInput from "./TextReviewCustomInput";
import { render, fireEvent } from "@testing-library/react";
import raspberry from "~/images/raspberry.png";
import { expect } from "vitest";

const setup = () => {
  const utils = render(
    <TextReviewCustomInput
      name="raspberry"
      value={0}
      changeHandler={vi.fn()}
      labelName="Raspberry"
      type="number"
      note="raspberry"
      noteSource={raspberry}
    />
  );
  const input = utils.getByLabelText("Raspberry");
  return {
    input,
    ...utils,
  };
};

describe("<TextReviewCustomInput />", () => {
  test("Should render with provided props", async () => {
    const { input, getByDisplayValue } = setup();
    expect(input).toBeDefined();
    expect(getByDisplayValue(0)).toBeDefined();
    expect(raspberry).toBeDefined();
  });
  test("Should react to change in input", () => {
    const { input, getByDisplayValue } = setup();
    fireEvent.change(input, { target: { value: "5" } });
    expect(getByDisplayValue(5)).toBeDefined();
  });
});
