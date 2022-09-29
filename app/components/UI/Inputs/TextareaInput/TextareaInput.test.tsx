import TextareaInput from "./TextareaInput";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";

test("Renders the component ", () => {
  const handleChange = vi.fn();
  render(
    <TextareaInput
      labelName="Palate"
      changeHandler={handleChange}
      name="palate"
      value=""
      emoji="👅"
    />
  );

  const input = screen.getByLabelText("Palate");
  expect(input).toBeInTheDocument();
});

test("Accepts text input", () => {
  const handleChange = vi.fn();
  render(
    <TextareaInput
      labelName="Palate"
      changeHandler={handleChange}
      name="palate"
      value=""
      emoji="👅"
    />
  );

  const input = screen.getByLabelText("Palate");
  fireEvent.change(input, {
    target: {
      value:
        "Black peppercorns, cinnamon, caramel, salty tortilla chips, fudge, pecans, confectioners sugar, light clove.",
    },
  });
  expect(input).toHaveValue(
    "Black peppercorns, cinnamon, caramel, salty tortilla chips, fudge, pecans, confectioners sugar, light clove."
  );
});
