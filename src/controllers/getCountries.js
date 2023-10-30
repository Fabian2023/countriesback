const { Country } = require('../db.js');
const { Op } = require('sequelize');

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;
    let countries= [];

    if (name) {
      countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        }
      });

      if (countries.length === 0) {
        return res.status(404).json({ message: 'No countries found' });
      }
    } else {
      countries = await Country.findAll();
    }

    
    res.status(200).json(countries);
   // console.log("soy yo", countries);
  } catch (error) {
    console.error('Error retrieving countries:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getCountries;
