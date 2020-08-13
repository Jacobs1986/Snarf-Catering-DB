const router = require("express").Router();
const db = require("../../database/models");
const Orders = db.Orders;

// Add a new order
router.route("/add")
    .post((request, response) => {
        // console.log(request.body);
        Orders.create(request.body).then(result => {
            response.json(result)
        });
});

// Edit an existing order /api/order/edit
router.route("/edit")
    .put((request, response) => {
        Orders.update(
            request.body,
            {
                where: {
                    id: request.body.id
                }
            }
        ).then(results => {
            response.json(results)
        }).catch(error => {
            response.json("The information could not be updated.");
        })
    });

router.route("/delete/:id")
    .delete((request, response) => {
        Orders.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        })
    })

module.exports = router;