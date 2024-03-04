const express = require('express');
const { countryControllers, citiesControllers, getStateAndCountry } = require("../controllers/addressControllers.js")

const router = express.Router();

// Country Routes =>
router.get('/country', countryControllers);

// Cities Routes => 
router.get('/city/:cityName?', citiesControllers)

 
// get state vs country basis of the city =>
router.get('/cityInfo/:city?', getStateAndCountry)

module.exports = router; 

 