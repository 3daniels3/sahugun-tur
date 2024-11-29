const Place = require('../models/place');

// Crear un nuevo lugar
const createPlace = async (req, res) => {
  const { name, description, location, imageUrl } = req.body;

  try {
    // Crear el lugar con los datos proporcionados
    const newPlace = await Place.create({
      name,
      description,
      location,
      imageUrl,
      userId: req.user.id, // Asociar el lugar al usuario que lo crea
    });
    res.status(201).json(newPlace);
  } catch (error) {
    console.error('Error al crear el lugar:', error);
    res.status(500).json({ message: 'Error al crear el lugar' });
  }
};

// Obtener todos los lugares
const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (error) {
    console.error('Error al obtener los lugares:', error);
    res.status(500).json({ message: 'Error al obtener los lugares' });
  }
};

// Obtener un lugar específico por ID
const getPlaceById = async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place.findByPk(id);
    if (!place) {
      return res.status(404).json({ message: 'Lugar no encontrado' });
    }
    res.status(200).json(place);
  } catch (error) {
    console.error('Error al obtener el lugar:', error);
    res.status(500).json({ message: 'Error al obtener el lugar' });
  }
};

// Eliminar un lugar
const deletePlace = async (req, res) => {
  const { id } = req.params;

  try {
    const place = await Place.findByPk(id);
    if (!place) {
      return res.status(404).json({ message: 'Lugar no encontrado' });
    }

    await place.destroy();
    res.status(200).json({ message: 'Lugar eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el lugar:', error);
    res.status(500).json({ message: 'Error al eliminar el lugar' });
  }
};

module.exports = {
  createPlace,
  getAllPlaces,
  getPlaceById,
  deletePlace,
};
