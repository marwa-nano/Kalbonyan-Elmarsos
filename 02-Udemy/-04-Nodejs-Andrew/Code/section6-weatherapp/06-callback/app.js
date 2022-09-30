const request = require("postman-request");
// const url =
//   "http://api.weatherstack.com/current?access_key=a5ce389204e2bb3e39f0dceecf9e7235&query=37.8267,-122.4233&units=f";
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather app");
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     console.log(
//       `" ${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degress out . It feels like ${response.body.current.feelslike} degress out . "`
//     );
//   }
// });

// const curl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyd2Ftb2hhbWVkMjAyMSIsImEiOiJjbDgzdzhkeDkwOXY5M29uejVtdnh6YmFlIn0.DsSOvLQ63jUwkNef6PbY9g&limit=1";
// request({ url: curl, json: true }, (error, response) => {
//   if (error) {
//     console.log("check your connectivity");
//   } else if (response.body.features.length === 0) {
//     console.log("unable to get coordinates ");
//   } else {
//     console.log(
//       `"longtiude is ${response.body.features[0].geometry.coordinates[0]} and latitude is ${response.body.features[0].geometry.coordinates[1]}"`
//     );
//   }
// });

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWFyd2Ftb2hhbWVkMjAyMSIsImEiOiJjbDgzdzhkeDkwOXY5M29uejVtdnh6YmFlIn0.DsSOvLQ63jUwkNef6PbY9g&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location .try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].geometry.coordinates[0],
        longitude: response.body.features[0].geometry.coordinates[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};
geocode("Egypt", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
