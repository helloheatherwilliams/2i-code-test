const { sort, removeDuplicates, removeDuplicatesAndSort } = require("./code-test");

describe("sort", () => {
    test("returns a list of numbers in descending order", () => {
        const exampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const result = sort(exampleInput);

        expect(result).toEqual(expectedOutput);
    });

    test("returns a list of numbers in descending order including negatives", () => {
        const exampleInput = [1, 2, 3, -4, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -4];
        const result = sort(exampleInput);

        expect(result).toEqual(expectedOutput);
    })

    test("returns a list of numbers in descending order including decimals", () => {
        const exampleInput = [1, 2, 3, -4.2, 4, 5, 6, 7, 8, 9, 10];
        const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -4.2];
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
    });

    test("when given an empty array returns an empty array", () => {
        const exampleInput = [];
        const expectedOutput = [];
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