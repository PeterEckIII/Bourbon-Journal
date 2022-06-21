import PrimaryButton from "./PrimaryButton";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("<Primary Button />", () => {
  test("Should render the call to action correctly", () => {
    render(<PrimaryButton callToAction="Next" />);
    expect(screen.getByText(/Next/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
