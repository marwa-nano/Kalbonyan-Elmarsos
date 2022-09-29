// fetch Api
const getPuzzleFetch = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("unable to fetch puzzle");
      }
    }
  );
};

// converting from callback pattern to promises pattern
const getPuzzlePromise = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject("An error occur");
      }
    });
    request.open("Get", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

// asynchronous
const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error occur", undefined);
    }
  });
  request.open("Get", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};
// countery fetch api
const getCountryFetch = (countryCode) => {
  return fetch("https://restcountries.com/v2/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
    });
};

// challenge
// 1. Covert getCountry to return a new promise
// 2. Call get Country and use then to print country name or the error

// return promise
const getCountryPromise = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    countryRequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find(
          (country) => country.alpha2Code === countryCode
        );
        resolve(country.name);
      } else if (e.target.readyState === 4) {
        reject("An error occur");
      }
    });
    countryRequest.open("Get", "https://restcountries.com/v2/all");
    countryRequest.send();
  });
// country Api
// asynchronous callback
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
