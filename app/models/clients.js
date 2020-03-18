// Dependencies

const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

// Create client table
let Client = sequelize.define("clients", {
    name: Sequelize.STRING,
    organization: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING
})

// sync with the DB
Client.sync();

// export
module.exports = Client