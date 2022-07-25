//       25/07/2022
/*
Given two arrays A and B, return the indices at which the two arrays intersect.
If the two arrays have no intersection at all, return null.
Extra credit: how would you change your code if they were linked lists instead of arrays,
if the input were the two head nodes, and you returned the intersection node?
(see https://i.imgur.com/UyglRcN.png if it helps you visualize it)
Example:

let listA = [1,4,5,6]
let listB = [2,3,4,5,6]
 findIntersection(listA, listB)
 [1, 2]
*/
let listA = [1, 4, 5, 6];
let listB = [2, 3, 4, 5, 6];

const findIntersection = function (listA, listB) {
  const i = listA.reduce((commonIndex, curr, index) => {
    listB.map((elem, i) => {
      if (elem === curr) {
        console.log(`index is ${index} and i is ${i}`);      
        return [index, i];
      }
    });
  });
  console.log(i);
  // listB.map((elem, i) => console.log(`elem is ${elem} and index is ${i}`));
};

console.log(findIntersection(listA, listB));
