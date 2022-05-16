//   16/05/2022
//Given two integer arrays of size n, return a new array of size n such that n consists of only unique elements and the sum of all its elements is maximum.

let arr1 = [7, 4, 10, 0, 1];
let arr2 = [9, 7, 2, 3, 6];

const maximizedArray = function (arr1, arr2) {
    const uniqueSorted = [...(new Set([...arr1, ...arr2]))].sort((a, b) => a - b);
    let result = [];
    result.push(uniqueSorted.slice(-arr1.length));
    return result;
}

console.log(maximizedArray(arr1, arr2));
