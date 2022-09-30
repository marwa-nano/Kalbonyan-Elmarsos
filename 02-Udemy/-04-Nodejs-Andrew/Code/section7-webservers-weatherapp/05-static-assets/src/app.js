const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

//app.com
app.use(express.static(publicDirectoryPath));

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
