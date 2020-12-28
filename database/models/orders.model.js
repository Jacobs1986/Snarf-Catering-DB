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
        platter: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        glutenFree: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brownBag: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        boxLunch: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        regNovice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        regSnarf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        regPro: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        specSnarf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        specPro: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cobb: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        greek: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        snarf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tossed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        macaroni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        potato: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coleslaw: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pickles: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chips: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bottled: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        izze: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        arizona: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gatorade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        snapple: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stewarts: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        can: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cookies: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brownies: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numofItems: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        artichoke: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bacon: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        portobello: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        avocado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        meat: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gfBread: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        delivery: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salesTax: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adjustment: {
            type: DataTypes.STRING,
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