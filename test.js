const { sort, removeDuplicates, removeDuplicatesAndSort } = require("./code-test");

describe("sort", () => {
    test("returns a list of numbers in descending order", () => {
        const exampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const result = sort(exampleInput);

        expect(result).toEqual(expectedOutput);
    })
})

describe("removeDuplicates", () => {
    test("returns a list of numbers that are not duplicated", () => {
        const exampleInput = [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = removeDuplicates(exampleInput);
 
        expect(result).toEqual(expectedOutput);
    })
})

describe("removeDuplicatesAndSort", () => {
    test("removes duplicates and returns a list of numbers that are in descending order", () => {
        const exampleInput = [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const result = removeDuplicatesAndSort(exampleInput);

        expect(result).toEqual(expectedOutput);
    })
})