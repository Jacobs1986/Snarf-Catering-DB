// Dependencies
const express = require("express");
const db = require("./models");

// Set up the Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Set up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/customer-api-routes.js")(app);

let syncOptions = { force: true };

// sync the models
db.sequelize.sync(syncOptions).then(function() {
    // Starting the Express App
    app.listen(PORT, function() {
        console.log(`App listening on PORT http://localhost:${PORT}`)
    });
});