const bcrypt = require('bcryptjs');
const Usuario = require('./models/user'); // Asegúrate de usar la ruta correcta

const createAdmin = async () => {
  try {
    // Verificar si el correo ya existe 
    const existingUser = await Usuario.findOne({ where: { email: 'admin@example.com' } });
    if (existingUser) {
      console.log('El usuario con ese correo ya existe.');
      return; // No hacer nada si ya existe
    }

    // Si no existe, crear el administrador
    const hashedPassword = await bcrypt.hash('1234', 10); // Cambia la contraseña a '1234'
    const admin = await Usuario.create({
      nombre: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    });

    console.log('Administrador creado:', admin);
  } catch (error) {
    console.error('Error al crear el administrador:', error);
  }
};

createAdmin();
