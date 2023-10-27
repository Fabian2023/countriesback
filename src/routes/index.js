const { Router } = require('express');
const router = Router();

const getCountries = require('../controllers/getCountries');
const getCountryId = require ('../controllers/getCountryId');
const createActivity = require('../controllers/createActivity');
const {getActivities} = require ('../controllers/getActivities');


router.get('/countries', getCountries);
router.post('/countries/activities', createActivity);
router.get('/countries/activities', getActivities);
router.get('/countries/:idPais', getCountryId);
      



module.exports = router;
