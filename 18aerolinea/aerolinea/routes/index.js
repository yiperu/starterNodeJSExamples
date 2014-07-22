// Archvo index.js de routes

//Llamamos a nuestro modulo creado por medio de require
var vuelo = require('../sistemavuelos');

var express = require('express');
var router = express.Router();

//Creamos 2 vuelo estatico haciendo uso del modulo vuelos
var vuelos1 = vuelo({
	numero: 1,
	origen: 'Venezuela',
	destino: 'Canada'
});
var vuelos2 = vuelo({
	numero: 2,
	origen: 'Colombia',
	destino: 'Argentina'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* Ruteamos al Vuelo 1. */
router.get('/vuelos1', function(req, res) {
  res.json(vuelos1.getInformation());
});
/* Ruteamos al Vuelo 2. */
router.get('/vuelos2', function(req, res) {
  res.json(vuelos2.getInformation());
});


module.exports = router;
