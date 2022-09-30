const request = require("postman-request");
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
module.exports = geocode;
