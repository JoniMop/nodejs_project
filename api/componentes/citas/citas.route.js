'use strict';

const express = require('express');
const router = express.Router();
const api_citas = require('./citas.api');

router.param('id_cita', function (req, res, next, id_cita) {
    req.body.id_cita = id_cita;
    next();
});
//funcion de arriba se utiliza para buscar noticia especifica



router.route('/registrar_cita')
    .post(
        function (req, res) {
            api_citas.registrar(req, res);
        }
    );


router.route('/listar_citas')
    .get(
        function (req, res) {
            api_citas.listar(req, res);
        }
    );


router.route('/buscar_cita/:id_cita')
    .get(
        function (req, res) {
            api_citas.buscar_por_id(req, res);
        }
    );


router.route('/actualizar_cita')
    .post(
        function (req, res) {
            api_citas.actualizar(req, res);
        }
    );







module.exports = router;