const express = require('express');
const Place = require('../models/place');
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

// Crear un lugar (solo si es admin)
router.post('/add', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  const { name, description, location, imageUrl } = req.body;
  try {
    const newPlace = await Place.create({ name, description, location, imageUrl });
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el lugar' });
  }
});

// Obtener todos los lugares
router.get('/', async (req, res) => {
  try {
    const places = await Place.findAll();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los lugares' });
  }
});

module.exports = router;
