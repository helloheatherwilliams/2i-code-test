const { sort } = require("./code-test");

describe("sort", () => {
    test("returns a list of numbers in descending order", () => {
        const exampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

        expect(sort(exampleInput)).toEqual(expectedOutput);
    })
})