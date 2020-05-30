// dependencies
const db = require("../models");

// Routes
module.exports = function(app) {
    app.post("/api/submit-order", (req, res) => {
        db.Orders.create(req.body).then(dbOrders => {
            res.json(dbOrders);
        });
    });

    // get the information for an order
    app.get("/api/orders/:id", (request, response) => {
        db.Orders.findOne({
            where: {
                id: request.params.id
            }
        }).then(result => {
            response.json(result);
        });
    });

    // update information
    app.put("/api/orders/:id", (request, response) => {
        console.log(request.body);
        db.Orders.update(
            request.body, 
            {
                where: {
                    id: request.body.id
                }
            }
        ).then(results => {
            response.json("Update was sucessful!");
        })
    })
}