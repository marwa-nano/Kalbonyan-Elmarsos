// http,https =>core modules no need to install them you can load directrly
const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=a5ce389204e2bb3e39f0dceecf9e7235&query=37.8267,-122.4233&units=f";
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    //console.log(chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
    //console.log(data);
  });
});
request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
