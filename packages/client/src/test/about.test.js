import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { About } from "../pages/about";
import { BrowserRouter as Router } from "react-router-dom";

test("renders a message", () => {
  const {container} = render(<Router><About /></Router>)
  expect(container.firstChild).toHaveClass(`p-about`)
});
