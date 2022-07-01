//   27/06/2022
// Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.

let str = "abppplee";
let dict = ["able", "ale", "apple", "bale", "kangaroo"];

const longestWord = function (str, dict) {
  let matchedWords = [];
  return dict
    .filter((word) => {
      if (str.includes(...word)) {
        matchedWords.push(word);
        return matchedWords;
      }
    })
    .sort((a, b) => b.length - a.length)
    .at(0);
};

console.log(longestWord(str, dict)); //apple
