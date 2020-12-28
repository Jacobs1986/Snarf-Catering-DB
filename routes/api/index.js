const router = require("express").Router();
const customer = require("./customer.routes");
const order = require("./orders.routes");

// Routers
router.use("/customer", customer);
router.use("/order", order);

module.exports = router;