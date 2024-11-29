const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { User, Place } = require("./models/index"); // Importa los modelos desde el índice
const authRoutes = require("./routes/auth");
const placesRoutes = require("./routes/places");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Usar rutas
app.use("/api/auth", authRoutes);
app.use("/api/places", placesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
