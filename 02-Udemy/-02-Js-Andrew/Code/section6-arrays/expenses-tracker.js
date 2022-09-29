///////// challenge  /////////////////////////

///////// challenge part 1 /////////////////////////
//expenses  => description,amount (how much)
// addExpense method (description,amount) add objects to expenses array
//getAccountSummary() method=> total all expenses=>print msg like 'Andrew Mead has $1250 in expenses '
// to get total use forEach method to go through in every single item in the expnses array

//////// challenge part 2 /////////////////////////
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccount Summary
// Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

const account = {
  name: "Marwa Mohamed",
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  income: [],
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let totalBalance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });
    totalBalance = totalIncome - totalExpenses;
    return `${this.name} has a balance of $${totalBalance}.$${totalIncome}in income. $${totalExpenses} in expenses`;
    // return `${this.name} has $${totalExpenses} in expenses`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("coffee", 2);
account.addIncome("job", 1000);
console.log(account.getAccountSummary());
console.log(account);
