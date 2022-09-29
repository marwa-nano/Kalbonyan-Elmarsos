const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getCountry = (countryCode) => {
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
