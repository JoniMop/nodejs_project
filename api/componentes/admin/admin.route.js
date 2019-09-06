'use strict';

const express = require('express');
const router = express.Router();
const adminMep = require('./admin.api');


// ENDPOINTS PARA REGISTRO SESION - TATIANA
router.route('/validar_credenciales_admin') //esto viene del servicio_inicio.js
    .post(function (req, res) {
        console.log('soy el correo en el route: ' + req.body.email);
        adminMep.validar(req, res); //es la const que se declara al principio
    });



module.exports = router;