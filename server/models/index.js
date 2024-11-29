const { sequelize } = require("../config/db");
const User = require("./user");
const Place = require("./place");

// Relacionar los modelos
Place.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Place, { foreignKey: "userId" });

module.exports = { sequelize, User, Place };
