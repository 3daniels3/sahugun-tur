const express = require('express');
const { createPlace, getAllPlaces, getPlaceById, deletePlace } = require('../controllers/placecontroller');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Middleware para verificar el JWT
const verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No hay token, autorización denegada' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token no válido' });
  }
};

// Crear un lugar
router.post('/', verifyToken, createPlace);

// Obtener todos los lugares
router.get('/', getAllPlaces);

// Obtener un lugar específico por ID
router.get('/:id', getPlaceById);

// Eliminar un lugar
router.delete('/:id', verifyToken, deletePlace);

module.exports = router;
