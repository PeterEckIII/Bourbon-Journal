import TextInput from "./TextInput";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";

test("Renders with the given props", async () => {
  const handleChange = vi.fn();
  render(
    <TextInput
      labelName="Batch"
      name="batch"
      type="text"
      value=""
      placeholder="Z503"
      changeHandler={handleChange}
      emoji="#️⃣"
    />
  );
  const input = screen.getByLabelText("Batch");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "batch");
});

test("Accepts text input", () => {
  const handleChange = vi.fn();
  render(
    <TextInput
      labelName="Batch"
      name="batch"
      type="text"
      value=""
      placeholder="Z503"
      changeHandler={handleChange}
      emoji="#️⃣"
    />
  );
  const input = screen.getByLabelText("Batch");
  fireEvent.change(input, { target: { value: "A122" } });
  expect(input).toHaveValue("A122");
});
