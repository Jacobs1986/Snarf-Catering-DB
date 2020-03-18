const express = require("express");
const Client = require("../models/clients.js");

let router = express.Router();

// create the routes
router.get("/", (request, response) => {
    response.render("index")
})

module.exports = router;