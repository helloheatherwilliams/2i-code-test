const { example } = require("./code-test");

describe("example", () => {
    test("returns as expected", () => {
        expect(example()).toBe("hello");
    })
})