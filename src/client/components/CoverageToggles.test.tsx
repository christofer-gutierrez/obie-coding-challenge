import { render, screen, fireEvent } from "@testing-library/react";
import CoverageToggles from "./CoverageToggles";

describe("CoverageToggles Component", () => {
  it("renders without crashing", () => {
    const setCoverageType = jest.fn();
    render(
      <CoverageToggles coverageType="Auto" setCoverageType={setCoverageType} />
    );

    expect(screen.getByText("Insurance Coverage")).toBeInTheDocument();
  });

  it("displays all coverage options", () => {
    const setCoverageType = jest.fn();
    render(
      <CoverageToggles coverageType="Auto" setCoverageType={setCoverageType} />
    );

    expect(screen.getByText("Auto")).toBeInTheDocument();
    expect(screen.getByText("Fire")).toBeInTheDocument();
    expect(screen.getByText("Both")).toBeInTheDocument();
  });

  it("calls setCoverageType with the correct value when a radio button is selected", () => {
    const setCoverageType = jest.fn();
    render(
      <CoverageToggles coverageType="Auto" setCoverageType={setCoverageType} />
    );

    fireEvent.click(screen.getByLabelText("Fire"));

    expect(setCoverageType).toHaveBeenCalledWith("Fire");

    fireEvent.click(screen.getByLabelText("Both"));

    expect(setCoverageType).toHaveBeenCalledWith("Both");
  });
});
