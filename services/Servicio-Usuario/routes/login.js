var express = require('express');
var router = express.Router();
var conexion = require('../public/javascripts/conexion');

router.post('/cliente', function(req,res,next){
  //obtengo los parametros
  let usuario = req.body.usuario;
  let contra = req.body.contra;

  //realizo el query
  let query = "SELECT idc, nombres, apellidos, correo, telefono, estado, tipo "
  query += "FROM Cliente ";
  query += "WHERE Cliente.correo = '" + usuario + "' ";
  query += "AND Cliente.password = '" + contra + "' AND Cliente.estado = 1;";
  //console.log(query);

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    //si no regreso nada la consulta
    if(resultado.length < 1){
      res.send(JSON.stringify({succcess:false}));
    }
    //si la consulta regresa id entonces si existe la cuenta
    res.send(JSON.stringify({
      success:true,
      datos:{
        idc:resultado[0].idc,
        nombres:resultado[0].nombres,
        apellidos:resultado[0].apellidos,
        correo:resultado[0].correo,
        telefono:resultado[0].telefono,
        estado:resultado[0].estado,
        tipo:resultado[0].tipo
      }
    }));
  }).catch(function(err){
    res.send(JSON.stringify({succcess:false,mensaje:err}));
  })
});

router.post('/editorial', function(req,res,next){
  //obtengo los parametros
  let usuario = req.body.usuario;
  let contra = req.body.contra;

  //realizo el query
  let query = "SELECT ide, nombre, correo, direccion, estado "
  query += "FROM Editorial ";
  query += "WHERE Editorial.correo = '" + usuario + "' ";
  query += "AND Editorial.password = '" + contra + "' AND Editorial.estado = 1;";
  //console.log(query);

  //mando a correr el query
  conexion.select_from(query).then(function(resultado){
    //si no regreso nada la consulta
    if(resultado.length < 1){
      res.send(JSON.stringify({succcess:false}));
    }
    //si la consulta regresa id entonces si existe la cuenta
    res.send(JSON.stringify({
      success:true,
      datos:{
        ide:resultado[0].ide,
        nombre:resultado[0].nombre,
        correo:resultado[0].correo,
        direccion:resultado[0].direccion,
        estado:resultado[0].estado
      }
    }));
  }).catch(function(err){
    res.send(JSON.stringify({succcess:false,mensaje:err}));
  })
});


module.exports = router;