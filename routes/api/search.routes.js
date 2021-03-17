const router = require('express').Router();
const db = require('../../database/models');
const Organizations = db.Organizations;
const { Op } = require('sequelize');

// search for an organization
router.route('/organization')
    .post((request, response) => {
        Organizations.findAll({
            where: {
                name: { [Op.like]: '%' + request.body.searchFor + '%' },
                StoreId: request.body.storeId
            }
        }).then(results => {
            response.json(results);
        })
    })

// Find an organization by their address
router.route('/address')
    .post((request, response) => {
        Organizations.findAll({
            where: {
                address: { [Op.like]: '%' + request.body.searchFor + '%' },
                StoreId: request.body.storeId
            }
        }).then(results => {
            response.json(results);
        })
    })

module.exports = router;