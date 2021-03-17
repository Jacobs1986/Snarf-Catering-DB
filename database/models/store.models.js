module.exports = function(sequelize, DataTypes) {
    let Store = sequelize.define("Store", {
        storeName: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING
    });

    Store.associate = models => {
        models.Store.hasMany(models.Organizations);
    }

    return Store
}