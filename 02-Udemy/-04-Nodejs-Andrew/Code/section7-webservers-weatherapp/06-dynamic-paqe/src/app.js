const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

//app.com static html
app.use(express.static(publicDirectoryPath));

//app.com dynamic hbs
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Marwa Mohamed",
  });
});

//app.com/about
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About App",
    name: "Marwa Mohamed",
  });
});

//app.com/help
//app.com/about
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help App",
    name: "Marwa Mohamed",
    msg: "Welcome to help page for any problem contact us ",
  });
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
// aboslute path not relative path
// path core module there is no need to install
////////////////////////////////
// template engine Handlebars allows us to :
//1- render dynamic documents
//2- create code can reuse across pages
//So once again with handlebars, we'll be able to render dynamic content and we'll be able to easily use and reuse little pieces of markup throughout the various pages in our app.
// handlebars.js module package
// hbs easy to integerate with express
// npm i hbs@4.0.1
// to use tell express where hbs installed by using method app.set

///////////////////////////////
11;
// Goal : Create a template for help page
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print
