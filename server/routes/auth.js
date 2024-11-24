const express = require('express');
const router = express.Router();

// Importar los controladores de autenticación
const { registerUser, loginUser } = require('../controllers/authcontroller');

// Ruta para registro de usuario
router.post('/register', registerUser);

// Ruta para login de usuario
router.post('/login', loginUser);

module.exports = router;
