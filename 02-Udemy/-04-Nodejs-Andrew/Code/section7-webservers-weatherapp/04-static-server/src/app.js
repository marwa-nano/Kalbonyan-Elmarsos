const path = require("path");
const express = require("express");
const app = express();

//console.log(__dirname);
//console.log(path.join(__dirname, "../public");
// console.log(__filename);
const publicDirectoryPath = path.join(__dirname, "../public");

//app.com
app.use(express.static(publicDirectoryPath));
//app.com
// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

//app.com/help
// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Marwa",
//       age: 28,
//     },
//     {
//       name: "sara",
//       age: 29,
//     },
//   ]);
// });
// //app.com/about
// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });
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
// aboslute path not relative path
// path core module there is no need to install
////////////////////////////////
// Goal : Create two more HTML files
// 1. Create a html page for about with " About " title
// 2. Create a html page for help with " Help " title
// 3. Remove the old route handlers for both
// 4. Visit both in the browser to test your work
