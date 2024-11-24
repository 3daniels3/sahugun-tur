const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');  // Asegúrate de que el path sea correcto

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica si el usuario ya existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    // Retornar la respuesta
    res.status(201).json({ id: newUser.id, email: newUser.email });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

// Iniciar sesión de usuario
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario por correo
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear un token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Retornar el token al cliente
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el login' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
