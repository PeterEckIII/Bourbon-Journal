import NoteField from "./NoteField";
import { render } from "@testing-library/react";
import { expect } from "vitest";

const setup = () => {
  const utils = render(<NoteField labelName="Strawberry" value={5} />);
  const element = utils.getByLabelText("strawberry-field");
  return {
    element,
    ...utils,
  };
};

describe("<NoteField />", () => {
  test("should first", () => {
    const { element, getByText } = setup();
    expect(element).toBeDefined();
    expect(getByText(`Strawberry: 5`)).toBeDefined();
  });
});
