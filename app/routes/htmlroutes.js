const express = require("express");
const Client = require("../models/clients.js");

let router = express.Router();

// create the routes
router.get("/", (request, response) => {
    Client.findAll({}).then(function (results) {
        let clientObj = {
            client: results
        }
        response.render("index", clientObj)
    })
})

module.exports = router;