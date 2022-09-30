const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.log("please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
console.log(process.argv);

// Goal : Accept location via command line argument
// 1. Access the command line argument without yargs console.log(process.argv)
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test you work with a couple locations
/////////////////////////////////
// Goal : Use both destructuring and property shorthand in weather app
// 1. Use destructuring in app.j forecast.js , and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works
