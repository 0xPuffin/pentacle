const features = require("../data/featuresMain.json");
const {test, expect} = require("@jest/globals");

test("Check json title say ETH or SOL", () => {
  const data = features;
  expect(data[0].title).toBe("Eth DeFi");
  expect(data[1].title).toBe("Sol DeFi");
});