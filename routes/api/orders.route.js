const router = require('express').Router();
const db = require('../../database/models');
const Orders = db.Orders;

// Add a new order
router.route('/add')
    .post((request, response) => {
        Orders.create(request.body).then(result => {
            response.json(result)
        }).catch(error => {
            response.json(error)
        });
    });

// Edit an existing order
router.route('/edit')
    .put((request, response) => {
        Orders.update(
            request.body,
            {
                where: {
                    id: request.body.id
                }
            }
        ).then(results => {
            response.json("Success!")
        }).catch(error => {
            response.json(error)
        })
    })

// Delete an order
router.route("/delete/:id")
    .delete((request, response) => {
        Orders.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        }).catch(error => {
            response.json(error)
        })
    });

module.exports = router;