const router = require("express").Router();
const db = require("../../database/models");
const Customer = db.Customer;
const { Op } = require("sequelize");

router.route("/all")
    .get((request, response) => {
        Customer.findAll({
            order: [
                ['organization', 'ASC']
            ]
        }).then(results => {
            response.json(results);
        });
    });

// Sort customer list
router.route("/sort")
    .post((request, response) => {
        console.log(request.body);
        Customer.findAll({
            order: [
                [request.body.sortBy, request.body.sortType]
            ]
        }).then(results => {
            response.json(results);
        })
    });

// Search for a customer
router.route("/search")
    .post((request, response) => {
        switch (request.body.column) {
            case "organization":
                Customer.findAll({
                    where: {
                        organization: { [Op.like]: '%' + request.body.searchFor + '%' }
                    }
                }).then(results => {
                    response.json(results);
                })
                break;
            case "contactname":
                Customer.findAll({
                    where: {
                        contactname: { [Op.like]: '%' + request.body.searchFor + '%' }
                    }
                }).then(results => {
                    response.json(results);
                })
                break;
            case "address":
                Customer.findAll({
                    where: {
                        address: { [Op.like]: '%' + request.body.searchFor + '%' }
                    }
                }).then(results => {
                    response.json(results);
                })
                break;
            case "email":
                Customer.findAll({
                    where: {
                        email: { [Op.like]: '%' + request.body.searchFor + '%' }
                    }
                }).then(results => {
                    response.json(results);
                })
                break;
            case "phone":
                Customer.findAll({
                    where: {
                        phone: { [Op.like]: '%' + request.body.searchFor + '%' }
                    }
                }).then(results => {
                    response.json(results);
                })
                break;
            default:
        }
    });

// Save a new customer to that database
router.route("/add")
    .post((request, response) => {
        let newCustomer = request.body;
        Customer.create(newCustomer).then(result => {
            response.json("The customer has been added to the database")
        });
    });

// Find customer by id /api/customer/:id
router.route("/:id")
    .get((request, response) => {
        Customer.findOne({
            where: {
                id: request.params.id
            },
            include: [
                {
                    model: db.Orders
                },
            ],
            order: [
                [{ model: db.Orders }, 'date', 'DESC']
            ]
        }).then(result => {
            response.json(result);
        });
    });

// edit customer info /api/customer/edit
router.route("/edit")
    .put((request, response) => {
        Customer.update(
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

router.route("/delete/:id")
    .delete((request, response) => {
        Customer.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        })
    });

module.exports = router;