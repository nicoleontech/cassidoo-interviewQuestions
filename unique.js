//   30/05/2022

/*This week’s question:
Write a function that determines if all the characters in a given string are unique. 
Can you do this without making any new variables? 
You choose if you want to include capitalization in your consideration for this one, as a fun challenge.*/

const allUnique = function (str) {
  // 1st solution : return new Set(str.toLowerCase()).size === str.length;
  //2nd solution:
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
};

console.log(allUnique("Cassidy"));
console.log(allUnique("cat & dog"));
console.log(allUnique("cat+dog"));
console.log(allUnique("Cc"));
