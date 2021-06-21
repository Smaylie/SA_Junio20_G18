const express = require('express');
const router = new express.Router();

const bitacora = require('../Controlador/bitacora');
const solicitud = require('../Controlador/solicitud');

router.route('/bitacora/insertar').post(bitacora.insertar)
router.route('/bitacora/leerXeditorial').get(bitacora.leerXeditorial)
router.route('/bitacora/leerXadmin').get(bitacora.leerXadmin)

router.route('/solicitud/crear').post(solicitud.crear)
router.route('/solicitud/aceptar').put(solicitud.aceptar)
router.route('/solicitud/leer').get(solicitud.leer)

module.exports = router