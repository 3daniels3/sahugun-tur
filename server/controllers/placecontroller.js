const Place = require("../models/place");
const fs = require("fs");
const path = require("path");
const authenticate = require("../middlewares/authMiddleware");  // Importar el middleware

// Crear un nuevo lugar
const createPlace = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: "El nombre y la descripción son obligatorios." });
    }

    let image = null;
    if (req.file) {
      image = `uploads/${req.file.filename}`;
    } else {
      console.warn("No se ha proporcionado una imagen.");
    }

    // Verifica si la carpeta de uploads existe, si no, la crea
    const uploadDir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Crear el lugar en la base de datos
    const newPlace = await Place.create({
      name,
      description,
      image,
      userId: req.user.id, // Ahora se usa el userId del JWT
    });

    res.status(201).json(newPlace);
  } catch (error) {
    console.error("Error al crear el lugar:", error.stack || error);
    res.status(500).json({ message: "Error al crear el lugar." });
  }
};

// Obtener todos los lugares
const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (error) {
    console.error("Error al obtener los lugares:", error);
    res.status(500).json({ message: "Error al obtener los lugares" });
  }
};

// Obtener un lugar específico por ID
const getPlaceById = async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place.findByPk(id);
    if (!place) {
      return res.status(404).json({ message: "Lugar no encontrado" });
    }
    res.status(200).json(place);
  } catch (error) {
    console.error("Error al obtener el lugar:", error);
    res.status(500).json({ message: "Error al obtener el lugar" });
  }
};

// Eliminar un lugar
const deletePlace = async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place.findByPk(id);
    if (!place) {
      return res.status(404).json({ message: "Lugar no encontrado" });
    }

    await place.destroy();
    res.status(200).json({ message: "Lugar eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el lugar:", error);
    res.status(500).json({ message: "Error al eliminar el lugar" });
  }
};

module.exports = {
  createPlace,
  getAllPlaces,
  getPlaceById,
  deletePlace,
};
