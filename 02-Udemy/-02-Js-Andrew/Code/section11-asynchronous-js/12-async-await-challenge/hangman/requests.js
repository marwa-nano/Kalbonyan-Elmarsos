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

const getCountry = async (countryCode) => {
  const response = await fetch("https://restcountries.com/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=84ecf3cfca7382");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to fetch location");
  }
};

/////////////////////challenge///////////////////////
// Create a new function called getCurrentCountry
// Should return a promise that resolves the country object for your current location
// lise async/await for the new function

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
};
