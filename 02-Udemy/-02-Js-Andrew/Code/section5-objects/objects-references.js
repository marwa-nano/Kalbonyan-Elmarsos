// It's actually a reference to the exact same object in memory, so somewhere on your machine, in your

// computer's ram, we have this object stored.

// My account is a pointer to this object when we pass my account into an expense account, becomes a pointer

// to that object as well.

let myAccount = {
  name: "Marwa Mohamed",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account); // account == myAccount
};

addExpense(myAccount, 2.5);
console.log(myAccount); // both of objects the same

//////////////////////////////////////////
let myAccount2 = {
  name: "Andrew Mead",
  expenses: 0,
  income: 0,
};

let addExpense2 = function (account, amount) {
  //empty object
  account = {};
  // account.expenses = account.expenses + amount;
  console.log(account);
};

addExpense2(myAccount2, 3.5);
console.log(myAccount2);
// So when we pass an object into a function, we can manipulate its properties if we manipulate its properties

// or manipulating the properties of the object originally passed in.

// If we assign a new value to that argument, we break this binding completely.

// Now, account does not point to the same thing that my account did.

// So I can't use the assignment operator in account to clear my account or set it to something new, like

// the number one.

// This is not going to work.

// It's only when we manipulate the properties of the object do we see the change reflected in both.

//////////////////////////
let otherAccount = myAccount;
otherAccount.income = 1000;
console.log(myAccount);
otherAccount = {};
console.log(otherAccount);
console.log(myAccount);
