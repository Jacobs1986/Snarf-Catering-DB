// dependencies
const db = require("../models");

// Routes
module.exports = function(app) {
    app.post("/api/submit-order", (req, res) => {
        db.Orders.create(req.body).then(dbOrders => {
            res.json(dbOrders);
        });
    });
}