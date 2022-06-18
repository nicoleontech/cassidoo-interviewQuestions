// 13/6/2022
/* Create a loooong teeeext generator that takes in a string and an integer n, 
and multiplies the vowels in the string by n. */

const longText = function (str, n) {
  return [...str]
    .map((char) => ("aeiou".includes(char) ? char.repeat(n) : char))
    .join("");
};

console.log(longText("hello world", 3));
console.log(longText("lol", 10));
