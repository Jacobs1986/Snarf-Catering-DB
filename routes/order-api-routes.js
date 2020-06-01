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
    app.put("/api/orders", (request, response) => {
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

    // delete an order
    app.delete("/api/orders/:id", (request, response) => {
        db.Orders.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json("The order has been removed.")
        }).catch(err => {
            response.status(422).json(err);
        });
    });

    // find an order using price
    app.get("/api/filter", (request, response) => {
        console.log(request.body);
        // db.Orders.findAll({
        //     where: {
        //         CustomerId: request.body.id,
        //         total: request.body.total
        //     }
        // }).then(results => {
        //     response.json(results)
        // })
    });
}