var express = require('express');
const { render } = require('../app');
var router = express.Router();
var con = require('../public/javascripts/conexion');

/*Registrar un usuario */
router.post('/', function(req, res, next) {
    //obtengo los parametros del json
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let correo = req.body.correo;
    let password = req.body.password;
    let telefono = req.body.telefono;
    let estado = req.body.estado;
    let tipo = req.body.tipo;

    //ahora realizo el query
    let query = "insert into SA.Cliente values ( default,"
    query += "'" + nombre + "',";
    query += "'" + apellidos + "',";
    query += "'" + correo + "',";
    query += "'" + password + "',";
    query += "'" + telefono + "',";
    query += " " + estado + ",";
    query += " " + tipo + ");";

    //mando a correr el query
    con.neutral_query(query).then(function(resultado){
        res.send(JSON.stringify({codigo:201, mensaje:"Insertado correctamente"}));
    }).catch(function(err){
        res.send(JSON.stringify({codigo:406, mensaje:err}));
    })
});

module.exports = router;