const express = require('express');
const router = new express.Router();

const genero = require('./Controller/genero');
const clasificacion = require('./Controller/clasificacion');
const ordenes = require('./Controller/ordenes');

router.route('/genero/:id?')
    .post(genero.create)
    .get(genero.read)
;

router.route('/clasificacion/:id?')
    .get(clasificacion.read)
;

router.route('/ordenes/:id?')
    .get(ordenes.get)
    .post(ordenes.post)
    .put(ordenes.put)
;

module.exports = router