//Equal Pay Exercise

let receipts = [
  { name: "Ximena", paid: 45 },
  { name: "Clara", paid: 130 },
  { name: "Ximena", paid: 100 },
  { name: "Cassidy", paid: 140 },
  { name: "Cassidy", paid: 76 },
  { name: "Clara", paid: 29 },
  { name: "Ximena", paid: 20 },
];

const whoOws = function (receipts) {
  const unique = new Set(receipts.map((item) => item.name));
  let eachTotalPaid = {};

  for (let receipt of receipts) {
    eachTotalPaid[receipt.name] = eachTotalPaid[receipt.name]
      ? eachTotalPaid[receipt.name] + receipt.paid
      : receipt.paid;
  }
  const sumExpenses = Object.values(eachTotalPaid).reduce(
    (sum, i) => sum + i,
    0
  );

  //the ones who are owed money
  const owed = Object.keys(eachTotalPaid)
    .filter((paid) => eachTotalPaid[paid] > sumExpenses / unique.size)
    .sort((a, b) => eachTotalPaid[b] - eachTotalPaid[a])
    .reduce((owed, name) => {
      const paid = eachTotalPaid[name];
      const owedMoney = Math.abs(sumExpenses / unique.size - paid);
      owed[name] = owedMoney;
      return owed;
    }, {});

  //the ones who owe money
  const owes = Object.keys(eachTotalPaid)
    .filter((paid) => eachTotalPaid[paid] < sumExpenses / unique.size)
    .sort((a, b) => eachTotalPaid[b] - eachTotalPaid[a])
    .reduce((owes, name) => {
      const paid = eachTotalPaid[name];
      const owed = sumExpenses / unique.size - paid;
      owes[name] = owed;
      return owes;
    }, {});

  return Object.entries(owes)
    .map(([elem, amount]) => `${elem} owes ${amount} to ${Object.keys(owed)}`)
    .join(",");
};

console.log(whoOws(receipts));
