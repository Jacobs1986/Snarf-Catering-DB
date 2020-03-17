const express = require("express");

let router = express.Router();

// create the routes
router.get("/", (request, response) => {
    response.render("index")
})

module.exports = router;