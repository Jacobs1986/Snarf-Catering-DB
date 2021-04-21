const router = require('express').Router();
const db = require('../../database/models');
const Contacts = db.Contacts;

// Add a new contact
router.route('/add')
    .post((request, response) => {
        Contacts.create(request.body).then(result => {
            response.json(result)
        }).catch(error => {
            response.json(error);
        })
    })

// edit a contact
router.route('/edit')
    .put((request, response) => {
        Contacts.update(
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
    });

// delete a contact
router.route('/delete/:id')
    .delete((request, response) => {
        Contacts.destroy({
            where: {
                id: request.params.id
            }
        }).then(results => {
            response.json(results);
        }).catch(error => {
            response.json(error)
        })
    })

module.exports = router;