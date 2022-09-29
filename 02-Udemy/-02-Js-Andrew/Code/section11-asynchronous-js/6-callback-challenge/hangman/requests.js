// asynchronous
const getPuzzle = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error occur", undefined);
    }
  });
  request.open("Get", "https://puzzle.mead.io/puzzle?wordCount=3");
  request.send();
};

// country Api

const countryCode = "EG";
const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();
  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find(
        (country) => country.alpha2Code === countryCode
      );
      callback(undefined, country.name);
    } else if (e.target.readyState === 4) {
      callback("An error occur", undefined);
    }
  });
  countryRequest.open("Get", "https://restcountries.com/v2/all");
  countryRequest.send();
};
