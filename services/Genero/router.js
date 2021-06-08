const express = require('express');
const router = new express.Router();

const genero = require('./Controller/genero');
const clasificacion = require('./Controller/clasificacion');

router.route('/genero/:id?')
    .post(genero.create)
    .get(genero.read)
;

router.route('/clasificacion/:id?')
    .get(clasificacion.read)
;

module.exports = router