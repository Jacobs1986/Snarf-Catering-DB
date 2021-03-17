module.exports = function(sequelize, DataTypes) {
    let Organizations = sequelize.define("Organizations", {
        name: DataTypes.STRING,
        address: DataTypes.STRING
    });

    Organizations.associate = models => {
        models.Organizations.belongsTo(models.Store, {
            onDelete: "CASCADE",
            foreginKey: {
                allowNull: false
            }
        })
        models.Organizations.hasMany(models.Contacts, {
            as: 'Contacts'
        })
        models.Organizations.hasMany(models.Orders, {
            as: 'Orders'
        })
    };

    return Organizations
}