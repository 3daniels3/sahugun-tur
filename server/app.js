const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/auth");
const placesRoutes = require("./routes/places");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Servir imágenes

// Conectar a la base de datos
connectDB();

// Usar rutas
app.use("/api/auth", authRoutes);
app.use("/api/places", placesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
