//   2/5/22
/*Implement a simple version of autocomplete, where given an input string s and a dictionary of words dict, 
return the word(s) in dict that partially match s (or an empty string if nothing matches).*/

let dict = ["apple", "banana", "cranberry", "strawberry"];

const autoComplete = function (input) {
  const s = input.toLowerCase();
  let result = [];
  for (let word of dict) {
    for (let i = 0; i <= word.length; i++) {
      if (word.includes(s)) {
        result.push(word);
        break;
      }
    }
  }
  return result;
};

console.log(autoComplete("app"));
console.log(autoComplete("berry"));
console.log(autoComplete("fart"));
