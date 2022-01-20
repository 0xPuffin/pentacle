import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "../components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

test("renders a message", () => {
  const { container, getByText } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(container.firstChild).toHaveClass(`p-header`);
});
