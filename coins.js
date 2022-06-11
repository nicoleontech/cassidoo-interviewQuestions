//     6/6/2022

/*Given an int array coins and an int amount,
 return an array of coins that add up to amount (and an empty array if it’s an impossible combination).*/

let coins = [2, 3, 5, 7];
let amount = 17;

const coinCombo = function (coins, amount) {
  let results = [];
  let currResults = [];
  let arrayOfj = [];

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      arrayOfj.push(coins[j]);
    }
    const chunk = arrayOfj.slice(0, coins.length);
    let remainder = amount - coins[i];
    if (
      chunk.some((item, i) => chunk.slice(i + 1).includes(remainder - item))
    ) {
      currResults.push([coins[i], chunk[i], remainder - chunk[i]]);
    }
    if (currResults.length >= 1) {
      results = currResults.pop();
    }
  }
  return results;
};

console.log(coinCombo(coins, amount)); //[7,7,3]

console.log(coinCombo([2, 3, 5], 11)); // [3,3,5]
