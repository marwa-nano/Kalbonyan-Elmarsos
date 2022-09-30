const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=a5ce389204e2bb3e39f0dceecf9e7235&query=37.8267,-122.4233";
request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
  //console.log(data);
  //console.log(response);
});

//////////////notes////////////////////
// initialize weather app as an npm project
// npm init -y (-y flag answer yes for all questions ) --> package.json
// npm i postman-request -->node_modules,package-lock.json
