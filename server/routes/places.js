const express = require("express");
const fs = require("fs"); // Asegúrate de importar fs
const multer = require("multer");
const path = require("path");
const { createPlace, getAllPlaces, getPlaceById, deletePlace } = require("../controllers/placecontroller");
const authenticate = require("../middlewares/authMiddleware"); // Importar el middleware

const router = express.Router();

// Configuración de multer para manejar la subida de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    // Verifica si el directorio de 'uploads' existe y lo crea si no
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Crear un lugar con imagen (requiere autenticación)
router.post("/", authenticate, upload.single("image"), createPlace);  // Solo una ruta POST que maneje ambas cosas

// Obtener todos los lugares
router.get("/", getAllPlaces);

// Obtener un lugar específico por ID
router.get("/:id", getPlaceById);

// Eliminar un lugar
router.delete("/:id", deletePlace);

module.exports = router;
