//challenge area
// total ,tipPrecent 0.2

let getTip = function (total, tipPrecent = 0.2) {
  return total * tipPrecent;
};
let tipValue = getTip(250);
console.log(tipValue);
let tipValue1 = getTip(250, 0.3);
console.log(tipValue1);
