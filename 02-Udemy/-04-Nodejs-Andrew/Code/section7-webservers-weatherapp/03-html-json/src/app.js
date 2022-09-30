const express = require("express");
const app = express();

//app.com
app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

//app.com/help
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Marwa",
      age: 28,
    },
    {
      name: "sara",
      age: 29,
    },
  ]);
});
//app.com/about
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
//app.com/weather
app.get("/weather", (req, res) => {
  res.send({ tempature: 25, location: "cairo" });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

/////////
// npm init -y
//npm i express@4.16.4
/////////////
// Goal : Update routes
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//  - Object with forecast and location strings
// 3. Test your work by visiting both in the browser
