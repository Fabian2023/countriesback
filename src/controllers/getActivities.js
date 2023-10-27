const { Activity } = require('../db.js');

const getActivities = async (_req, res) => {
 
  try { 
    const activities = await Activity.findAll();

    console.log('Actividades obtenidas:', activities); 

    res.status(200).json(activities);
  } catch (error) {
    console.error('Error al obtener las actividades:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {getActivities}  ;



