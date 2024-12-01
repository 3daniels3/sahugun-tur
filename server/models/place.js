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
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "POINT(8.9469 -75.4425)", // Coordenadas de Sahagún
    get() {
      const value = this.getDataValue("location");
      if (value) {
        const [lat, lon] = value.replace("POINT(", "").replace(")", "").split(" ");
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      }
      return null;
    },
    set(value) {
      if (!value) {
        this.setDataValue("location", "POINT(8.9469 -75.4425)");
      } else {
        this.setDataValue("location", `POINT(${value.lat} ${value.lon})`);
      }
    },
  },
  image: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Place;
