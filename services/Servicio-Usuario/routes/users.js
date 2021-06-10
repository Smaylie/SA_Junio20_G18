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

//POST de eliminacion cliente
router.post('/eliminar/cliente', function(req, res, next) {
  //obtengo parametros del body
  let id = req.body.id;

  //realizo el query
  let query = "UPDATE Cliente SET estado = 0 WHERE idc = " + id + ";";

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    res.send(JSON.stringify({success:true, mensaje:"Eliminado correctamente"}));
  }).catch(function(err){
    res.send(JSON.stringify({success:false, mensaje:err}));
  })
});

//POST de eliminacion editorial
router.post('/eliminar/editorial', function(req, res, next) {
  //obtengo parametros del body
  let id = req.body.id;

  //realizo el query
  let query = "UPDATE Editorial SET estado = 0 WHERE ide = " + id + ";";

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    res.send(JSON.stringify({success:true, mensaje:"Eliminado correctamente"}));
  }).catch(function(err){
    res.send(JSON.stringify({success:false, mensaje:err}));
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