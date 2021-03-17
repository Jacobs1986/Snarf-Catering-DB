const router = require("express").Router();
const db = require('../../database/models');
const Store = db.Store
const { Op } = require("sequelize");

// Add a new store to the database
router.route("/add")
    .post((request, response) => {
        let newStore = request.body
        Store.create(newStore).then(result => {
            response.json(result);
        })
    });

// Get all the stores
router.route("/all")
    .get((request, response) => {
        Store.findAll({
            // input params here
        }).then(results => {
            response.json(results);
        })
    })

// Find store by id
router.route("/:id")
    .get((request, response) => {
        Store.findOne({
            where: {
                id: request.params.id
            },
            include: [
                {
                    model: db.Organizations,
                    include: [
                        { model: db.Contacts, as: 'Contacts'},
                        { model: db.Orders, as: 'Orders' }
                    ]
                },
            ],
            order: [
                [db.Organizations, 'name', 'asc']
            ],
        }).then(result => {
            response.json(result);
        })
    });

// Delete a store
router.route("/delete/:id")
    .delete((request, response) => {
        Store.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        });
    })

module.exports = router;