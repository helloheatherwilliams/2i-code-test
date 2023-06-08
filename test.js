const { sort, removeDuplicates } = require("./code-test");

describe("sort", () => {
    test("returns a list of numbers in descending order", () => {
        const exampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

        expect(sort(exampleInput)).toEqual(expectedOutput);
    })
})

describe("removeDuplicates", () => {
    test("returns a list of numbers that are not duplicated", () => {
        const exampleInput = [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        expect(removeDuplicates(exampleInput)).toEqual(expectedOutput);
    })
})