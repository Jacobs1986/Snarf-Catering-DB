module.exports = function(sequelize, DataTypes) {
    let Client = sequelize.define("Client", {
        contactname: DataTypes.STRING,
        oragnization: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    });
    return Client
}