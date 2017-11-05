const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');

// Create an instance of the express app.
const app = express();

// Specify the port.
var port = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port);
console.log("Listening on port: " + port);

require('./routes/router.js')(app);