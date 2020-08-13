module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("Orders", {
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderNumber: {
            type: DataTypes.STRING,
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
        numofChips: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalChips: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numofSalad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalSalad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numofPick: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalPick: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numofCook: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalCook: {
            type: DataTypes.STRING,
            allowNull: true
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