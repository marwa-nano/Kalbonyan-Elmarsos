// how to handle errors in js code
const getTip = (amount) => {
  return amount * 0.25;
};
const result = getTip(true); // true =1  1*0.25 =0.25
console.log(result); // 0.25

////////////////
const getTip1 = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    //throw "Argument must be a number ";
    throw Error("Argument must be a number");
  }
};

try {
  const result1 = getTip1(true);
  console.log(result1);
} catch (e) {
  console.log("catch is running ");
}
