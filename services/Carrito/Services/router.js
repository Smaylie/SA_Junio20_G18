const express = require('express');
const router = new express.Router();

const carrito = require('../Controlador/carrito');
const editorial = require('../Controlador/editorial');

router.route('/carrito/insertar').post(carrito.insertar)
router.route('/carrito/actualizar').put(carrito.actualizar)
router.route('/carrito/leer').get(carrito.leer)

router.route('/editorial/insertar').post(editorial.insertar)
router.route('/editorial/actualizar').put(editorial.actualizar)
router.route('/editorial/eliminar').delete(editorial.eliminar)
router.route('/editorial/leer').get(editorial.leer)

module.exports = router
