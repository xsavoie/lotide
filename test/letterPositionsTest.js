const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPosition", () => {
  it("returns { x: [ 0 ], a: [ 1 ], v: [ 2 ], i: [ 3 ], e: [ 4 ], r: [ 5 ] } for 'xavier'", () => {
    assert.deepEqual(letterPositions('xavier'), { x: [ 0 ], a: [ 1 ], v: [ 2 ], i: [ 3 ], e: [ 4 ], r: [ 5 ] });
  });
  it("returns {} for ''", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});