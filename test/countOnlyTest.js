const assert = require("chai").assert;
const countOnly = require("../countOnly");
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns {Jason: 1} when looking for ['Jason']", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true}), {Jason: 1});
  });
  it("returns {} when looking for ['Karima']", () => {
    assert.deepEqual(countOnly(firstNames, { "Karima": true}), {});
  });
  it("returns {Fang: 2} when looking for ['Fang']", () => {
    assert.deepEqual(countOnly(firstNames, {"Fang": true}), {Fang: 2});
  });
});