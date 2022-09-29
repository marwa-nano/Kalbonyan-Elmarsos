// type coercion ==>convert one type of value to another different type

console.log("5" + 5); // 55 --string coercion
console.log("5" - 5); //0 -- number coercion
console.log(5 === 5); // true  === strict equality comparsion operator check for equality ,== loose equality check for equality but doen't take type in account
console.log(5 == 5); // true
console.log("5" == 5); // true
console.log("5" === 5); // false

console.log(typeof 123); // check type of any thing

const value = true + 12;
const type = typeof value;
console.log(type); // number
console.log(value); // 13
