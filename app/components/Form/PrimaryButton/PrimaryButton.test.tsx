import PrimaryButton from "./PrimaryButton";
import { render } from "@testing-library/react";
import { expect } from "vitest";

describe("<Primary Button />", () => {
  test("Should render the call to action correctly", () => {
    const { getByText, getByRole } = render(
      <PrimaryButton callToAction="Next" />
    );
    expect(getByText(/Next/)).toBeDefined();
    expect(getByRole("button")).toBeDefined();
  });
});
