import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

describe("ResponsiveAppBar Component", () => {
  it("renders without crashing", () => {
    render(<ResponsiveAppBar />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays navigation links on larger screens", () => {
    render(<ResponsiveAppBar />);

    expect(screen.getAllByText("Products").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Pricing").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("opens navigation menu on small screens when menu button is clicked", () => {
    render(<ResponsiveAppBar />);

    const menuButton = screen.getByLabelText("account of current user");
    fireEvent.click(menuButton);

    expect(screen.getAllByText("Products").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Pricing").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("opens user settings menu when avatar is clicked", () => {
    render(<ResponsiveAppBar />);

    const avatar = screen.getByAltText("User Avatar");
    fireEvent.click(avatar);

    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
