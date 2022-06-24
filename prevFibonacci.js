//  20/6/2022

//Given a Fibonacci number, give the previous Fibonacci number. If the number given is not a Fibonacci number, return -1.


const previousFibonacci = (num) => Math.round(num / ((1 + Math.sqrt(5)) / 2));


console.log(previousFibonacci(5))
console.log(previousFibonacci(8))