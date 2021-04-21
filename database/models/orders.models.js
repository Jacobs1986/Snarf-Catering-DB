module.exports = function(sequelize, DataTypes) {
    let Orders = sequelize.define("Orders", {
        date: DataTypes.DATEONLY,
        orderNum: DataTypes.STRING,
        gratuity: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        delivery: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        salesTax: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        adjustment: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        total: DataTypes.STRING,
        numOfItems: DataTypes.INTEGER,
        items: DataTypes.TEXT,
        notes: DataTypes.TEXT
    })

    Orders.associate = models => {
        models.Orders.belongsTo(models.Organizations, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Orders
}