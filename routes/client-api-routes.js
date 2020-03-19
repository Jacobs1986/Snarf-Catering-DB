// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {
    // get all the information on clients
    app.get("/api/clients", (request, response) => {
        db.Client.findAll({}).then(results => {
            response.json(results);
        })
    })

    // Save a new client information to the database
    app.post("/api/addclient", (request, response) => {
        let newClient = request.body
        console.log(newClient);
        db.Client.create(newClient).then(result => {
            response.json(result);
        });
    });

    // find the information for a single client
    app.get("/api/clients/:id", (request, response) => {
        db.Client.findOne({
            where: {
                id: request.params.id
            }
        }).then(result => {
            response.json(result);
        });
    });
}