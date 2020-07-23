var ex = require("express");
var ej = require("ejs");
var mongoose = require("mongoose");
var app = ex();
var bP = require("body-parser"); 
var methodOverride = require("method-override");
var sanitizer = require("express-sanitizer");
var port = process.env.PORT || 3000;
const request = require('request');
var editMode=0;
app.use(bP.urlencoded({extended: true}));
app.use(ex.static("public"));
app.use(methodOverride("_method"));
app.use(sanitizer());
var apiKey="ec446cb08abe44b3a0577aa0919da699";
var HeadersToUse="X-API-Key: ec446cb08abe44b3a0577aa0919da699";
//main content of Destiny 2 Manifest but too large for my system: https://www.bungie.net/common/destiny2_content/json/en/aggregate-fdddf2ca-57f5-4da0-88d9-10be10a553d5.json

const options = {
    url: '',
    method: 'GET',
    headers: {
        'X-API-Key': 'ec446cb08abe44b3a0577aa0919da699',
    }
};
app.get("/", function (req, res) {
    request(options, function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
    else{
        console.log(error);
    }
    });
   res.render("index.ejs");
  });

app.get("/story", function (req, res)
{
    res.render("about.ejs");
});

app.listen(port, function () {
    console.log("Server is running");
  });