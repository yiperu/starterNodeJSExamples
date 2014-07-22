// Archvo index.js de routes

//Llamamos a nuestro modulo creado por medio de require
var vuelos = require('../data');
var vuelo  = require('../sistemavuelos');

var express = require('express');
var router = express.Router();

for (var numero in vuelos) {
	vuelos[numero] = vuelo(vuelos[numero]);
};


//Creamos 2 vuelo estatico haciendo uso del modulo vuelos
// var vuelos1 = vuelo({
// 	numero: 1,
// 	origen: 'Venezuela',
// 	destino: 'Canada'
// });
// var vuelos2 = vuelo({
// 	numero: 2,
// 	origen: 'Colombia',
// 	destino: 'Argentina'
// });




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* Ruteamos al Vuelo */
router.get('/vuelos/:numero?', function(req, res) {
  // res.json(vuelos1.getInformation());
  var numero = req.param('numero');
  if (typeof vuelos[numero] == "undefined") {
  	res.status(404).json({status:'error'});
  }else{
  	res.json(vuelos[numero].getInformation());
  }

});



module.exports = router;
