import "@testing-library/jest-dom";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import HeroSection from "../components/HeroSection";

describe("Hero Section Component", () => {
  it("Should render Hero Section component", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const heroElement = screen.getByTestId("hero-section");
    expect(heroElement).toHaveTextContent("Little Lemon");
  });

  it("Should render Little Lemon", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const heroTitle = screen.getByTestId("hero-title");
    expect(heroTitle).toHaveTextContent("Little Lemon");
  });
});
