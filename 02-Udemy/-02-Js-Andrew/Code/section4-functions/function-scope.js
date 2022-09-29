// Global Scope (convertFahrenheitToCelsius, temp1, temp2)
// Local Scope (fahrenheit, celsuis)
//local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsuis = (fahrenheit - 32) * (5 / 9) + "c";
  if (celsuis <= 0) {
    let isFreezing = true;
  }
  return celsuis;
};

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
