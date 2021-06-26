const express = require('express');
const router = express.Router();
const empleadosController = require('../Controllers/empleadoscontroller');


//api/usuarios
router.post('/', empleadosController.crearEmpleado);


module.exports = router;