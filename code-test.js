// Assumption: Array contains only numbers
// Assumption: Array does not contain big ints

const sort = (arr) => arr.sort((a, b) => b - a);

const removeDuplicates = (arr) => {
    const newArr = [];

    arr.forEach(num => !newArr.includes(num) ? newArr.push(num) : null)

    return newArr;   
};

const removeDuplicatesAndSort = (arr) => sort(removeDuplicates(arr)); 

module.exports = { sort, removeDuplicates, removeDuplicatesAndSort };

