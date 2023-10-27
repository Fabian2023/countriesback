const { Country, Activity } = require('../db.js');

const getCountryId = async (req, res) => {
  const { idPais } = req.params;

  try {
    const country = await Country.findByPk(idPais, { include: Activity });

    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }

    return res.json(country);
  } catch (error) {
    console.error('Error retrieving country:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getCountryId;

