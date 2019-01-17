// NPM Requirements
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// Models Reference
var db = require("./models");
// Set Port
var PORT = 3000;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

app.get("/scrape", function(req, res) {
    axios.get("https://www.nytimes.com/")
    .then(function(response) {
        var $ = cheerio.load(response.data);

        
})


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });