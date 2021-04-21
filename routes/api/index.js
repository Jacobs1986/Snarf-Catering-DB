const router = require("express").Router();
const store = require('./store.routes');
const organization = require('./organization.routes');
const contact = require('./contacts.routes');
const search = require('./search.routes');
const order = require('./orders.route');
const menu = require('./menu.routes');

// Routers
router.use("/store", store);
router.use("/organization", organization);
router.use("/contact", contact);
router.use("/search", search);
router.use("/order", order);
router.use("/menu", menu);

module.exports = router;