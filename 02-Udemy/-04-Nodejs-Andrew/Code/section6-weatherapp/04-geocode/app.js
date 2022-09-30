const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=a5ce389204e2bb3e39f0dceecf9e7235&query=37.8267,-122.4233&units=f";
request({ url: url, json: true }, (error, response) => {
  //const data = JSON.parse(response.body);
  //console.log(data.current);
  //console.log(response.body.current);
  console.log(
    `" ${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degress out . It feels like ${response.body.current.feelslike} degress out . "`
  );
});
/////////////////challenge///////////////////////////////
// Goal : Print the lat / long for Los Angeles
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work !

const curl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyd2Ftb2hhbWVkMjAyMSIsImEiOiJjbDgzdzhkeDkwOXY5M29uejVtdnh6YmFlIn0.DsSOvLQ63jUwkNef6PbY9g&limit=1";
request({ url: curl, json: true }, (error, response) => {
  console.log(
    `"longtiude is ${response.body.features[0].geometry.coordinates[0]} and latitude is ${response.body.features[0].geometry.coordinates[1]}"`
  );
});
//////////////notes////////////////////
// initialize weather app as an npm project
// npm init -y (-y flag answer yes for all questions ) --> package.json
// npm i postman-request -->node_modules,package-lock.json
// json:true  ==> data will be an object no need to pasre it so ne need to   const data = JSON.parse(response.body);
///////////////////////////////////////////
// Geocoding is the process of taking an address like Philadelphia, United States and converting that into a latitude and longitude coordinate pair.
