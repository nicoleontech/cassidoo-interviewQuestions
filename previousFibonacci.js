//  20/6/2022

//Given a Fibonacci number, give the previous Fibonacci number. If the number given is not a Fibonacci number, return -1.

const previousFibonacci = (num) => {
  if (
    Number.isInteger(Math.sqrt(5 * num * num + 4)) ||
    Number.isInteger(Math.sqrt(5 * num * num - 4))
  ) {
    return Math.round(num / ((1 + Math.sqrt(5)) / 2));
  } else {
    return -1;
  }
};

console.log(previousFibonacci(89)); //55
console.log(previousFibonacci(610)); //377
console.log(previousFibonacci(1596)); //-1
