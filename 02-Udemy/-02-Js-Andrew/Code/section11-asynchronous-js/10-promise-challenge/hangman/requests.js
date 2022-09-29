// fetch Api
const getPuzzleFetch = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("unable to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
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

/////////API location
const getLocation = () => {
  return fetch("https://ipinfo.io/json?token=84ecf3cfca7382").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch location");
      }
    }
  );
};
