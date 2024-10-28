import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./ObieLogo";
import ObieLogo from "../assets/logo-copy.png";

describe("Logo Component", () => {
  it("renders the logo image correctly", () => {
    render(<Logo />);

    const logoImage = screen.getByAltText("My Logo");

    expect(logoImage).toBeInTheDocument();

    expect(logoImage).toHaveAttribute("src", ObieLogo);
    expect(logoImage).toHaveClass("logo");
  });
});
