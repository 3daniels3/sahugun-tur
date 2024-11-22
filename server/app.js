const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db"); // Asegúrate de que el path sea correcto
const authRoutes = require("./routes/auth");
const placesRoutes = require("./routes/places");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Llama a la función para conectar la base de datos
connectDB();

// Usar las rutas
app.use("/api/auth", authRoutes);
app.use("/api/places", placesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
