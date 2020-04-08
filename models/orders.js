module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("Orders", {
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

    Orders.associate = models => {
        models.Orders.belongsTo(models.Customer, {
            onDelete: "CASCADE",
            foreginKey: {
                allowNull: false
            }
        });
    };

    return Orders
}