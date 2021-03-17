const router = require("express").Router();
const store = require('./store.routes');
const organization = require('./organization.routes');
const contact = require('./contacts.routes');
const search = require('./search.routes');

// Routers
router.use("/store", store);
router.use("/organization", organization);
router.use("/contact", contact);
router.use("/search", search)

module.exports = router;