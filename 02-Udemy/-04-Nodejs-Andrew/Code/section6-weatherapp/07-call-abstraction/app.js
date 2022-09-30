const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Egypt", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
