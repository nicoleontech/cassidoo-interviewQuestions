'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  // createUsername() {
  //   //create a new property on the object to modify the existing one
  //   const username = this.owner.toLowerCase()
  //     .split(' ')
  //     .map(name => name[0])
  //     .join('');
  //   return username;

  // }
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//Better to use a function instead of writting in the global scope

const displayMovements = function (movements) {
  //first empty the container
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {
    //check if deposit or withdrawal
    const checkType = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${checkType}">${index + 1} ${checkType}</div>
      <div class="movements__value">${movement}€</div>
    </div>
  `;

    //add the html in the DIV CONTAINER within the page
    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
}

// displayMovements(account1.movements)


//calcDisplayBalance -->check sto spiti

//LECTURE CHAINING METHODS

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`

  const outcomes = acc.movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} EUR`

  //let's say that this bank pays an interest 1,2% per deposit
  const interest = acc.movements.filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    //But the bank pays this interest only if is at least 1 EUR
    .filter((int, i, arr) => {
      console.log(arr)
      return int >= 1;
    })
    .reduce((acc, inter) => acc + inter, 0);

  labelSumInterest.textContent = `${interest} EUR`;


}
// calcDisplaySummary(account1.movements)

//wE CAN CREATE new properties on the account obj through this function
//because all these different references actually point to the exact same
//objects in the memory heap
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} EUR`;
}




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Computing Usernames with the initial of the names

//loop over array and take out the first letter of each word
//and return a new array with these
//then join it again to a string
//and we can do this after split because split returns an array

//for one user

// const createUsernames = function (user) {
//   const username = user.toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join(''); //the result is an array, so we can call join right after this

//   // console.log(username)
//   return username;
// }

//createUsernames('Steven Thomas William') //'stw'
//IMPORTANT FOR THE RETURN STATEMENT IN FUNCTIONS
/* That is the purpose of the return statement, as the name implies it returns the value. If you do not return it, then it is lost, as username here is a
 local variable (const) and only has the scope and life span of the function.
As my usual metaphor goes: If you phone the pizza shop and order a pizza, they cannot just make the pizza. They have to bring it to you as well,
 or else you will have nothing to eat. 
You won't be happy if they keep it for themselves. Delivering the pizza is the "return" bit of your function.
And so, if a function calculates a value you intend to use outside the function you must always return it. 
the course solutions often resorts to just logging to the console, 
just so we can see the results of something. Which is kind of like sending you a picture of the pizza so that you can see it. 
You still cannot eat it.*/

//Important note:Θα μπορούσα να καλέσω κατευθείαν στην account arr 
//την forEach κλπ αλλά είναι best practice να παίρνω τα δεδομένα αυτά σαν
//input σε μία fn, να κάνω κάτι με αυτά κ ίσως να επιστρέφω κάποιο
//value, από το να τα επεξεργάζομαι κατευθείαν στο global scope


//For all the users in the accounts array
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    //create a new property on the object to modify the existing one
    account.username = account.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })

}

createUsernames(accounts)
console.log(accounts) //a new property was created in each account obj
//here we don't need to return a value, in this function we just create
//a new property to each obj (we produce a side effect). The side effect is that we change/mutate the original accounts arr!!!
//Basically, we just do some work in this function, we don't create a new 
//value to return

//Event Handlers
//Implementing Login

const updateUI = function (acc) {
  displayMovements(acc.movements);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
}

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //here currentAccount isn't a copy of the object itself, it's just a variable
  //which points to the original object in the memory heap
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('login')
    //display ui and welcome msg
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''; //assignment operator works from right to left
    inputLoginPin.blur()


    //display balnce,summary,movements
    updateUI(currentAccount)

  }

})

//Implementing money transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = ''

  if (amount > 0
    && receiverAcc
    && currentAccount.balance >= amount
    && receiverAcc?.username !== currentAccount.username) {
    console.log('valid transfer')
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
})


//CLOSE ACCOUNT :delete that account obj from accounts array
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('delete')
  //check credentials
  if (inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin) {
    // console.log('deleted')
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    // console.log(index)
    accounts.splice(index, 1) //splice mutates the original array, so we don't need to save it somewhere
    //hide the UI
    containerApp.style.opacity = 0;

  }
  inputCloseUsername.value = inputClosePin.value = '';
})





/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0 //we return a boolean value
})

const withdrawals = movements.filter(mov => mov < 0)

//the same with for...of
const depositsFor = []
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov)
  }
}

//reduce method
//accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration number ${i} : ${acc}`)
  return acc + curr //this works because in each call of the callback fn, acc will be the current sum of all the prev values 
}, 0)

//same with for...of
//In for...of we usually need an external variable
let balance2 = 0
for (const mov of movements) {
  balance2 += mov
}





// for (const movement of movements) 
//if we need access to current index
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(` Movement ${i + 1} You deposited ${movement}`)
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`)
  }
}

movements.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement} in the ${arr}`)
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`)
  }
})

//in each iteration, it passes in the current elem of array as an arg
//0:function(200)
//1:function(450)

// const numArr = [4, 5, 5, 7, 8]

// // const numObj = {}
// // for (const [index, num] of numArr.entries()) {
// //   numObj[num] = index
// // }

// let numIndex = []

// const findNum = function (num) {

//   if (!numArr.includes(num)) {
//     return -1
//   } else {
//     numIndex.push(numArr.indexOf(num))
//     return numIndex
//   }

// }

//forEach with Map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//each inner array will be one entry of the map where the one is the key
//and the other is value

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value} in every iteration inside the ${map}`)
})

//forEach with Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

console.log(currenciesUnique)

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key} : ${value} inside the iterable ${set}`)
}) //but there is no key because key is the same with value

//the data of the app is coming from an API in the form of objects



const juliasData1 = [3, 5, 2, 12, 7]
const katesData1 = [4, 1, 15, 8, 3]


const checkDogs = function (dogsJulia, dogsKate) {
  const juliasCopy = dogsJulia.slice()
  juliasCopy.splice(0, 1)
  juliasCopy.splice(-2)
  const juliaKateData = [...juliasCopy, ...dogsKate]
  juliaKateData.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`)
    }
  })
}


// checkDogs(juliasData1, katesData1)


//CHALLENGE 2
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age =>
    age <= 2 ? 2 * age : 16 + age * 4
  )
  console.log(humanAges)
  const agesAbove18 = humanAges.filter(function (humanAge) {
    return humanAge >= 18
  })
  console.log(agesAbove18)

  const avg = agesAbove18.reduce(function (acc, adult, undefined, arr) {
    console.log(`acc: ${acc}
    adult: ${adult}
     arr:  ${arr}`)
    return acc + adult / arr.length
  }, 0)

  console.log(avg)
  return avg
}


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

//calc avg in a different way
//2 3 avg
// 1st way: (2+3)/2
//2nd way: 2/2 + 3/2

//CODING CHALLENGE 3
const calcAverageHumanAge2 = ages => {
  const avgHumanAges = ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, adult, undefined, arr) => acc + adult / arr.length, 0)
  return avgHumanAges;
}
calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])
//////////



//chaining methods
//WE CAN CHAIN ONE METHOD AFTER THE OTHER ONLY IF IT RETURNS AN ARRAY
//So after reduce we can't do this, because reduce returns a single value
//For debugging we can use the array param in each method

//Generally, in js it's a bad practice to chain methods where we mutate the underlying array
//eg using splice or reverse

//Example: all the movements deposits, convert them from eur to usd and then add
const eurToUsd = 1.1

//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => { //h arr edw pou exw access sthn map einai h array pou exei prokypsei apo thn filter, afou exw kanei chain these methods
    console.log(arr)
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0)


