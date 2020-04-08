// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
    // index route that will load index.html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/orders", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/order-history.html"));
    })
}