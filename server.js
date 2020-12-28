const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const db = require("./database/models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
app.use("/", routes)

let syncOptions = { force: false };

// sync the models
db.sequelize.sync(syncOptions).then(function() {
    // Starting the Express App
    app.listen(PORT, function() {
        console.log(`App listening on PORT http://localhost:${PORT}`)
    });
});
