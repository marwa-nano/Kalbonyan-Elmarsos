const express = require("express");
const app = express();

//app.com
app.get("", (req, res) => {
  res.send("Hello express");
});

//app.com/help
app.get("/help", (req, res) => {
  res.send("Help page");
});
//app.com/about
app.get("/about", (req, res) => {
  res.send("About Page");
});
//app.com/weather
app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

/////////
// npm init -y
//npm i express@4.16.4
