const express = require('express');
const router = new express.Router();

const bitacora = require('../Controlador/bitacora');
const solicitud = require('../Controlador/solicitud');

router.route('/bitacora/insertar').post(bitacora.insertar)
router.route('/bitacora/leerXeditorial').get(bitacora.leerXeditorial)
router.route('/bitacora/leerXadmin').get(bitacora.leerXadmin)

router.route('/solicitud/insertar').post(solicitud.insertar)
router.route('/solicitud/eliminar').delete(solicitud.eliminar)
router.route('/solicitud/leer').get(solicitud.leer)

module.exports = router