// Rutas para usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//usuarios, van a usuarioController.js
router.post('/register', usuarioController.registrarUsuario);
router.post('/login', usuarioController.loginUsuario);
router.post('/logout', usuarioController.logoutUsuario);

module.exports = router;