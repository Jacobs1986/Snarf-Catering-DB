const router = require("express").Router();
const db = require("../../database/models");
const Customer = db.Customer;

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
    .get((request, response) => {
        response.json("The route is ready to work!")
    })

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
                [{model: db.Orders}, 'date', 'DESC']
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