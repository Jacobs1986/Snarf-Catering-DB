const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const db = require('./database/models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
app.use("/", routes)

// set the sync options
let syncOptions = { force: false }

// Sync the models
db.sequelize.sync(syncOptions).then(function () {
    // Start the express App
    app.listen(PORT, () => {
        console.log("🌎 ==> API server now on port " + PORT);
    });
})