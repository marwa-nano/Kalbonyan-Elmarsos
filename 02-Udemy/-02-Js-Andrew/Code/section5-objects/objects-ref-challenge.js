let myAccount = {
  name: "Andrew Mead",
  expenses: 0,
  income: 0,
};
// addExpense
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

addExpense(myAccount, 100);

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount;
  console.log(account);
};
addIncome(myAccount, 400);

// getAccount Summary
let getAccount = function (account) {
  let total = account.income - account.expenses;
  return {
    getAccountSummary: `account for ${account.name} has $${total}. $${account.income} in income .$${account.expenses} in expenses `,
  };
};
let accountSummary = getAccount(myAccount);
console.log(accountSummary);

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
  console.log(account);
};
resetAccount(myAccount);
console.log(myAccount);

addIncome(myAccount, 1000);
addExpense(myAccount, 5.5);
addExpense(myAccount, 200);
let accountSummary1 = getAccount(myAccount);
console.log(accountSummary1);
// addIncome
// addExpense
// addExpense
// getAccount Summary
// resetAccount
// getAccount Summary
