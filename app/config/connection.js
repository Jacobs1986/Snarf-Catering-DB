// Dependencies
let Sequelize = require("sequelize");

let sequelize = new Sequelize("qz276lgm571d9vgd", "sks189o0f67vhr2a", "qf7lar750f9w36ez", {
    host: "qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idel: 10000
    }
});

module.exports = sequelize;