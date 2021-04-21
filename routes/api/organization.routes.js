const router = require("express").Router();
const db = require("../../database/models");
const Organizations = db.Organizations;

// Add a new organization
router.route("/add")
    .post((request, response) => {
        Organizations.create(request.body).then(result => {
            response.json(result)
        }).catch(error => {
            response.json(error);
        });
    })

// Find one Organization by its id
router.route("/:id")
    .get((request, response) => {
        Organizations.findOne({
            where: {
                id: request.params.id
            },
            include: [
                { model: db.Contacts, as: 'Contacts' },
                { model: db.Orders, as: 'Orders' }
            ],
            order: [
                [db.Orders, 'date', 'desc']
            ]
        }).then(result => {
            response.json(result);
        });
    })

// Edit a Organizations information
router.route("/edit")
    .put((request, response) => {
        Organizations.update(
            request.body,
            {
                where: {
                    id: request.body.id
                }
            }
        ).then(results => {
            response.json(results)
        }).catch(error => {
            response.json(error)
        })
    })

// Delete a Organizations information
router.route("/delete/:id")
    .delete((request, response) => {
        Organizations.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        })
    });

module.exports = router;