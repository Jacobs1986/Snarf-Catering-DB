var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./app/public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
let htmlroutes = require("./app/routes/htmlroutes.js");
app.use(htmlroutes);

// API routes
require("./app/routes/api-routes.js")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
})