const router = require('express').Router();
const db = require('../../database/models');
const Menu = db.Menu

// Add new menu itmes
router.route('/add')
    .post((request, response) => {
        let newItem = request.body
        Menu.create(newItem).then(result => {
            response.json(result);
        }).catch(error => {
            response.json(error);
        })
    })

// Get menu items
router.route('/get')
    .get((request, response) => {
        Menu.findAll().then(result => {
            response.json(result)
        })
    })

module.exports = router;