const Sequelize = require("sequelize");
require("dotenv").config();

// Crear instancia de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
    process.exit(1); // Salir de la aplicación si la conexión falla
  }
};

// Exportar la conexión y la función
module.exports = { sequelize, connectDB };
