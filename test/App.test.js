import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import Dummy from "../src/Dummy";

describe.skip("App", () => {
  it("renders Vite + React", () => {
    render(<App />);
    expect(screen.getByText(/Vite + React/)).toContain("Vite + React");
  });
  it.skip("counts the number of clicks", () => {});
});

describe("Dummy", () => {
  it("exists", () => {
    render(<Dummy />);

    expect(screen.getByText(/dummy/)).not.toBeNull();
  });
});
