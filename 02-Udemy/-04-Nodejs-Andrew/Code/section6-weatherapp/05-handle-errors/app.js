const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=a5ce389204e2bb3e39f0dceecf9e7235&query=37.8267,-122.4233&units=f";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather app");
  } else if (response.body.error) {
    console.log(response.body.error);
  } else {
    console.log(
      `" ${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degress out . It feels like ${response.body.current.feelslike} degress out . "`
    );
  }
});
// Goal : Handlerrors for geocoding request
// 1. Setup an error handler for low - level errors
// 2. Test by disabling network request and running the app .
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const curl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyd2Ftb2hhbWVkMjAyMSIsImEiOiJjbDgzdzhkeDkwOXY5M29uejVtdnh6YmFlIn0.DsSOvLQ63jUwkNef6PbY9g&limit=1";
request({ url: curl, json: true }, (error, response) => {
  if (error) {
    console.log("check your connectivity");
  } else if (response.body.features.length === 0) {
    console.log("unable to get coordinates ");
  } else {
    console.log(
      `"longtiude is ${response.body.features[0].geometry.coordinates[0]} and latitude is ${response.body.features[0].geometry.coordinates[1]}"`
    );
  }
});
//////////////notes////////////////////
// initialize weather app as an npm project
// npm init -y (-y flag answer yes for all questions ) --> package.json
// npm i postman-request -->node_modules,package-lock.json
// json:true  ==> data will be an object no need to pasre it so ne need to   const data = JSON.parse(response.body);
///////////////////////////////////////////
// Geocoding is the process of taking an address like Philadelphia, United States and converting that into a latitude and longitude coordinate pair.
// error -->low level error network connectivity ,missinig url invalied,os error
// when this error exist there is no response ,response undefined
// response.body.error ==>api connected inpute value invalide -when this(response) exist ,there is no error become undefined
