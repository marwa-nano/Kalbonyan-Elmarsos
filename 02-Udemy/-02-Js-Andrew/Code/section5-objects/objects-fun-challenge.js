// Challenge area
// Create function -take fahrenheit in return object with all three

/////////////////////////////////////////////////
let convertFahrenheitCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};
let celsiusTemp = convertFahrenheitCelsius(32);
console.log(celsiusTemp);

///////////////////////////////////////////////
let convertFahrenheitKlvien = function (fahrenheit) {
  let kelvien = (fahrenheit + 459.67) * (5 / 9);
  return kelvien;
};
let kelvienTemp = convertFahrenheitKlvien(32);
console.log(kelvienTemp);

///////////////////////////////////////////////////
let convertFahrenheit = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let kelvien = (fahrenheit + 459.67) * (5 / 9);
  return `${fahrenheit}F is ${celsius} in celsius & is ${kelvien} in kelvien`;
};
let temp = convertFahrenheit(32);
console.log(temp);

///////////////////////challenge////////////////////////
tempObj = {
  celsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  kelvien: function (fahrenheit) {
    return (fahrenheit + 459.67) * (5 / 9);
  },
};
console.log(tempObj.celsius(32));
console.log(tempObj.kelvien(32));

/////////////////////////////////////////////////////////
let getTempSummary = function (obj) {
  console.log(obj.celsius(5));
  console.log(obj.kelvien(5));
  console.log(
    `15F is equal to ${obj.celsius(15)} in celsius and equal to ${obj.kelvien(
      15
    )} in kelvien `
  );
};
getTempSummary(tempObj);
/////////////////////////////////////////////////////////
let convertFahrenheitObj = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5 / 9),
    kelvien: (fahrenheit + 459.67) * (5 / 9),
  };
};
let temps = convertFahrenheitObj(74);
console.log(temps);
