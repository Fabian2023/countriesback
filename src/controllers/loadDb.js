const axios = require("axios");
const { Country } = require('../db.js');

const apiUrl = "http://localhost:5000/countries";

// Función para obtener y guardar la información de la API en la base de datos
const loadDb = async () => {
  try {
    console.log('Iniciando carga de datos desde la API...');

    const response = await axios.get(apiUrl);
    const countriesData = response.data;
    console.log('Datos obtenidos de la API.');

    // Guardar los países en la base de datos 
    for (const countryData of countriesData) {
      const { cca3, name, capital, subregion, flags, continents, area, population } = countryData;

      // Verificar si el país ya existe en la base de datos
      const existingCountry = await Country.findOne({ where: { id: cca3 } });

      if (!existingCountry) {
        await Country.create({
          id: cca3,
          name: name.common,
          flag: flags.png,
          continent: Array.isArray(continents) && continents.length > 0 ? continents[0] : '',
          capital: Array.isArray(capital) && capital.length > 0 ? capital[0] : '',
          subregion: subregion,
          area: area,
          population: population
        });
      }
    }
    console.log('Carga de datos completada.');
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}

module.exports = loadDb;
