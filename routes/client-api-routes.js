// Dependencies
const db = require("../models");

// Routes
module.exports = (app) => {
    // Save a new client information to the database
    app.post("/api/addclient", (request, response) => {
        db.Client.create(request.body).then(result => {
            response.json(result);
        });
    });
}