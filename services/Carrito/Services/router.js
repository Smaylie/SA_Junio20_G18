const express = require('express');
const router = new express.Router();

const carrito = require('../Controlador/carrito');

router.route('/insertar').post(carrito.insertar)
router.route('/actualizar').put(carrito.actualizar)

module.exports = router
