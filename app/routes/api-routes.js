// dependencies

const Client = require("../models/clients.js");

// Routes
module.exports = (app) => {
    // Get all client info
    app.get("/api/all", (request, response) => {
        Client.findAll({}).then(results => {
            response.json(results);
        })
    })

    // view information for a specific client
    app.get("/api/:clientid", function (request, response) {
        console.log(request.params.clientid);
        Client.findAll({ where: { id: request.params.clientid} }).then(results => {
            response.json(results);
        })
    })

    // add new client to the database
    app.post("/api/new", (request, response) => {
        let clientInfo = request.body;
        console.log("New Client Info:");
        console.log(clientInfo);

        Client.create(clientInfo).then(results => {
            response.end();
        })
    })
}