// Dependencies
let Sequelize = require("sequelize");

let sequelize = new Sequelize("pbkfl9z27inc3ygc", "kk0lc638htfr0zt9", "la8hu15cv90gth1t", {
    host: "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idel: 10000
    }
});

module.exports = sequelize;