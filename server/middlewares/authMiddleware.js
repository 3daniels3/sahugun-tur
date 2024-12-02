// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Asegúrate de tener el modelo User

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];  // Extrae el token del header

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  // Verifica el token
  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token." });
    }

    // Encuentra al usuario con el ID decodificado
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    req.user = user;  // Agrega al usuario al objeto de solicitud
    next();  // Continúa con la ejecución
  });
};

module.exports = authenticate;
