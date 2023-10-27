const { Activity, Country } = require('../db.js');
const { Op } = require('sequelize');

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // Crea la actividad en la base de datos
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

   
    if (countries && countries.length > 0) {
        const associatedCountries = await Country.findAll({
            where: {
              id: {
                [Op.in]: countries, // sirve para asociar los paises que esten con ese id
              },
            },
          });

      await activity.setCountries(associatedCountries); // asociacion exacta
    }

    res.status(201).json({ success: true, activity, message: 'Actividad creada con éxito 😎' });
  } catch (error) {
    console.error('Error al crear la actividad back:', error);
    res.status(500).json({ message: 'Error al crear la actividad. Por favor, intenta nuevamente.💩' });
  }
};

module.exports = createActivity;
