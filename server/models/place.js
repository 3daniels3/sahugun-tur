const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Place = sequelize.define("Place", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // Ruta de la imagen subida
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Asociado al usuario (puede ser opcional)
  },
});

module.exports = Place;
