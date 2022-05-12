import ReviewField from "./ReviewField";
import { render, fireEvent } from "@testing-library/react";
import { expect } from "vitest";

const setup = () => {
  const utils = render(
    <ReviewField
      labelName="Palate"
      value="The palate begins with cherries and chocolate before moving on to cinnamon, anise, and some nice rye spice."
    />
  );

  const input = utils.getByLabelText("Palate-field");

  return {
    input,
    ...utils,
  };
};

describe("<ReviewField />", () => {
  test("Should render with provided props", () => {
    const { input, getByText } = setup();
    expect(input).toBeDefined();
    expect(
      getByText(
        `The palate begins with cherries and chocolate before moving on to cinnamon, anise, and some nice rye spice.`
      )
    ).toBeDefined();
  });
});
