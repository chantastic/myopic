let myopic = require(".");

test("React composition patterns thoughts", () => {
  expect(myopic("The render-prop pattern", "cloneElement")).toBe(
    "The render-prop pattern replaces cloneElement. I don't see any reason to use cloneElement anymore."
  );
});

test("State management thoughts", () => {
  expect(myopic("The new Context API", "Redux")).toBe(
    "The new Context API replaces Redux. I don't see any reason to use Redux anymore."
  );
});