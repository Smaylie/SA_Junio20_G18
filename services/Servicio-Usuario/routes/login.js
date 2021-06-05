var express = require('express');
var router = express.Router();
var conexion = require('../public/javascripts/conexion');

router.post('/', function(req,res,next){
  //obtengo los parametros
  let usuario = req.body.usuario;
  let contra = req.body.contra;

  //realizo el query
  let query = "SELECT idc "
  query += "FROM Cliente ";
  query += "WHERE Cliente.nombres = '" + usuario + "' ";
  query += "AND Cliente.password = '" + contra + "';";
  //console.log(query);

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    //si no regreso nada la consulta
    if(resultado.length < 1){
      res.send(JSON.stringify({Mensaje:"No existe la cuenta"}));
    }
    //si la consulta regresa id entonces si existe la cuenta
    res.send(JSON.stringify(resultado[0]));

  }).catch(function(err){
    res.send("No existe la cuenta");
  })
});

module.exports = router;