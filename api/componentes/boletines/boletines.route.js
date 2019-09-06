'use strict';

const express = require('express');
const router = express.Router();
const api_boletines = require('./boletines.api');

router.param('id_boletin', function (req, res, next, id_boletin) {
    req.body.id_boletin = id_boletin;
    next();
});
//funcion de arriba se utiliza para buscar boletin especifico


router.route('/registrar_boletin')
    .post(
        function (req, res) {
            api_boletines.registrar(req, res);
        }
    );



router.route('/listar_boletines')
    .get(
        function (req, res) {
            api_boletines.listar(req, res);
        }
    );

router.route('/buscar_boletin/:id_boletin')
    .get(
        function (req, res) {
            api_boletines.buscar_por_id(req, res);
        }
    );


router.route('/actualizar_boletin')
    .post(
        function (req, res) {
            api_boletines.actualizar(req, res);
        }
    );




module.exports = router;