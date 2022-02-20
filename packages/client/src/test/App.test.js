import "@testing-library/jest-dom";
import {test} from "@jest/globals";

const render = require('@testing-library/react');
const Footer = require("../components/footer/Footer");

test("it renders the footer", () => {
  const { container } = render(Footer);
  expect(container.contains('footer')).toBe(true)
});
