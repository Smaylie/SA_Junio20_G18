var express = require('express');
var router = express.Router();
var conexion = require('../public/javascripts/conexion');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //realizo el query
  let query = "Select * from Cliente;"

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    res.send(JSON.stringify(resultado));
  }).catch(function(err){
    res.send(JSON.stringify({Mensaje:"Error en obtener listado de clientes: " + err}));
  })
});

//POST de eliminacion
router.post('/eliminar', function(req, res, next) {
  //obtengo parametros del body
  let idc = req.body.idc;

  //realizo el query
  let query = "DELETE FROM Cliente WHERE idc = " + idc + ";";

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    res.send(JSON.stringify({codigo:201, mensaje:"Insertado correctamente"}));
  }).catch(function(err){
    res.send(JSON.stringify({codigo:406, mensaje:err}));
  })
});

//POST de modificacion
router.post('/modificar', function(req, res, next) {
  //mando a correr el query
  conexion.select_from(query).then(function(resultado){

  }).catch(function(err){

  })
});

module.exports = router;