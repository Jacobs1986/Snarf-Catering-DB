module.exports = function(sequelize, DataTypes) {
    let Customer = sequelize.define("Customer", {
        contactname: DataTypes.STRING,
        organization: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    });

    Customer.associate = models => {
        models.Customer.hasMany(models.Orders);
    }
    
    return Customer
}