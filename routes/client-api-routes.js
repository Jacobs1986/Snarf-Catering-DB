// Dependencies
var db = require("../models");

// Routes
module.exports = function (app) {
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

    // route for updating a client information
    app.put("/api/clients", (request, response) => {
        db.Client.update(
            request.body,
            {
                where: {
                    id: request.body.id
                }
            }
        ).then(results => {
            response.json(results)
        });
    });

    // route for deleting client information
    app.delete("/api/clients/:id", (request, response) => {
        db.Client.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        })
    }) 
}