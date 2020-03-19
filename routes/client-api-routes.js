// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {
    // Save a new client information to the database
    app.post("/api/addclient", (request, response) => {
        let newClient = request.body
        console.log(newClient);
        db.Client.create(newClient).then(result => {
            response.json(result);
        });
    });
}