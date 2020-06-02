// Dependencies
var db = require("../models");

// Routes
module.exports = function (app) {
    // get all the information on customers
    app.get("/api/customers", (request, response) => {
        db.Customer.findAll({
            order: [
                ['organization', 'ASC']
            ]
        }).then(results => {
            response.json(results);
        })
    })

    // Save a new customer information to the database
    app.post("/api/addcustomer", (request, response) => {
        let newCustomer = request.body
        console.log(newCustomer);
        db.Customer.create(newCustomer).then(result => {
            response.json(result);
        });
    });

    // find the information for a single customer
    app.get("/api/customers/:id", (request, response) => {
        db.Customer.findOne({
            where: {
                id: request.params.id
            },
            include: [
                {
                    model: db.Orders
                },
            ],
            order: [
                [{model: db.Orders}, 'date', 'ASC']
            ]
        }).then(result => {
            response.json(result);
        });
    });

    // route for updating a customer information
    app.put("/api/customers", (request, response) => {
        db.Customer.update(
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

    // route for deleting customer information
    app.delete("/api/customers/:id", (request, response) => {
        db.Customer.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        })
    })
    
    app.post("/api/searchcustomer", (request, response) => {
        db.Customer.findAll({
            where: {
                organization: request.body.searchName
            }
        }).then(results => {
            response.json(results);
        })
    })
}