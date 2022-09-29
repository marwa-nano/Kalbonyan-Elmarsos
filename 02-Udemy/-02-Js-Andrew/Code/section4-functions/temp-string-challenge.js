// challenge area
// A 25% tip on $40 would be 10$
let getTip = function (total, tipPrecent = 0.2) {
  let tPrecent = tipPrecent * 100;
  let tipValue = total * tipPrecent;
  return `A ${tPrecent}% tip on $${total} would be ${tipValue}$`;
  //return `A ${tipPrecent * 100}% tip on $${total} would be ${total * tipPrecent}$`;
  //return total * tipPrecent;
};

let tip = getTip(40, 0.25);
console.log(tip);
