module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        orderType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numofItems: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    Order.associate = models => {
        models.Order.belongsTo(models.Customer, {
            onDelete: "CASCADE",
            foreginKey: {
                allowNull: false
            }
        });
    };

    return Order
}