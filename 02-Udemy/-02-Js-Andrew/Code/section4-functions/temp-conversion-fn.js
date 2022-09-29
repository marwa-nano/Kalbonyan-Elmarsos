// Challenge Area
//convert FahrenheitToCelsius
// Call a couple of times(32->0)(68->20)
// Print the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsuis = (fahrenheit - 32) * (5 / 9) + "c";
  return celsuis;
};

let fahToCelsuis1 = convertFahrenheitToCelsius(32);
let fahToCelsuis2 = convertFahrenheitToCelsius(68);

console.log(fahToCelsuis1);
console.log(fahToCelsuis2);
