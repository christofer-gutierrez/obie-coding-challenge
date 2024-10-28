import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StatesDropdown from "./StatesDropdown";

describe("StatesDropdown Component", () => {
  it("renders without crashing", () => {
    const setState = jest.fn();
    render(<StatesDropdown state="IL" setState={setState} />);

    expect(screen.getByLabelText("State")).toBeInTheDocument();
  });

  it("displays all state options when dropdown is opened", () => {
    const setState = jest.fn();
    render(<StatesDropdown state="IL" setState={setState} />);

    fireEvent.mouseDown(screen.getByLabelText("State"));

    expect(screen.getAllByText("Illinois").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Indiana").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Michigan").length).toBeGreaterThan(0);
  });

  it("calls setState with the correct value when a new state is selected", () => {
    const setState = jest.fn();
    render(<StatesDropdown state="IL" setState={setState} />);

    fireEvent.mouseDown(screen.getByLabelText("State"));

    fireEvent.click(screen.getByText("Indiana"));

    expect(setState).toHaveBeenCalledWith("IN");
  });
});
