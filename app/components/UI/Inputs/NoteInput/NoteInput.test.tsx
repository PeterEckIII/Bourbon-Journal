import NoteInput from "./NoteInput";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";

const setup = () => {
  const handleChange = vi.fn();
  const utils = render(
    <NoteInput
      name="cherry"
      value={0}
      labelName="Cherry"
      emoji="🍒"
      changeHandler={handleChange}
    />
  );
  const input = screen.getByLabelText("Cherry");
  return {
    handleChange,
    input,
    ...utils,
  };
};

describe("<NoteInput>", () => {
  test("Renders correctly with the given props", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "cherry");
  });

  test("Accepts number input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 4 } });
    expect(input).toHaveValue(4);
  });
});
