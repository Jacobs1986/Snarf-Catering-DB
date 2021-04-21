module.exports = function(sequelize, DataTypes) {
    let Menu = sequelize.define("Menu", {
        item: DataTypes.STRING,
        price: DataTypes.STRING,
        itemType: DataTypes.STRING
    })

    return Menu
}