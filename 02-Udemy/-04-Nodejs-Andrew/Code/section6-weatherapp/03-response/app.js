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

//////////////notes////////////////////
// initialize weather app as an npm project
// npm init -y (-y flag answer yes for all questions ) --> package.json
// npm i postman-request -->node_modules,package-lock.json
// json:true  ==> data will be an object no need to pasre it so ne need to   const data = JSON.parse(response.body);

////////////////////challenge////////////////////
// Goal : Print a small forecast to the user
// 1. Print : " It is currently 9 degress out . It feels like 5 degress out . "
// 2. Test your work
