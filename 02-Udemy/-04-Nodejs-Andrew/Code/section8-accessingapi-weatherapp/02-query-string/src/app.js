const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

// define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//app.com static html /setup static directory to serve
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
  if (!req.query.address) {
    return res.send({
      error: "you must provide a address!",
    });
  } else {
    res.send({ tempature: 25, location: "Egypt", address: req.query.address });
  }
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide a search term",
    });
  } else {
    res.send({
      products: [],
    });
  }
});

app.get("/help/*", (req, res) => {
  //res.send("Help artical not found ");
  res.render("404", {
    title: "404",
    name: "Marwa Mohamed",
    errorMessage: "Help artical not found",
  });
});

// setup route for any route or path not match
app.get("*", (req, res) => {
  //res.send("My 404 page");
  res.render("404", {
    title: "404",
    name: "Marwa Mohamed",
    errorMessage: "Page not found",
  });
});

// start server
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

// Goal : Create a template for help page
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print
////////////////////////
// nodemon src/app.js -e js,hbs
/////////////////////////////////////
// Goal : Create a partial for the footer
// 1. Setup the template for the footer partial " Created by Some Name "
// 2. Render the partial at the bottom of all three pages
// 3. 1st your work by visiting all three pages
///////////////////////////////////////////////
// Goal : Create and render a 404 page with handlebars
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragrap
// 3. Render the template for both 404 routes
//-Page not found .
//-Help Trticle not found .
// 4. Test your work . Visit / what and / help / units
///////////////////////////
//Cannot set headers after they are sent to the client
//this error indicates that you try to send two respondes to the user that cann't be you can only send one only => return to stop callback fn
//// Goal : Update weather endpoint to accept addres
// 1. No address ? Send back an error message
// 2. Address ? Send back the static JSON
// -Add address property onto JSON which returns the provided
// 3. Test / weather and / weather?address=philadelphia
