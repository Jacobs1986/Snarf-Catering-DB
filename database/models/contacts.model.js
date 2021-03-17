module.exports = function(sequelize, DataTypes) {
    let Contacts = sequelize.define("Contacts", {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING
    })

    Contacts.associate = models => {
        models.Contacts.belongsTo(models.Organizations, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Contacts
}