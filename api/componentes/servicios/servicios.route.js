'use strict';

const express = require('express');
const router = express.Router();
const serviciosApi = require('./servicios.api');

router.param('id_servicio', function(req, res, next, id_servicio){
    req.body.id_servicio = id_servicio;
    next();
});

router.route('/registrar_servicios')
    .post(
        function(req , res){
            serviciosApi.registrar(req, res);
        }
    );

router.route('/actualizar_servicios')
    .post(function(req, res){
        serviciosApi.actualizar(req, res);
    });

router.route('/listar_servicios')
    .get(
        function(req , res){
            serviciosApi.listar(req, res);
        }
    );

router.route('/buscar_servicio/:id_servicio')
    .get(
        function(req , res){
            serviciosApi.buscar_por_id(req, res);
        }
    );

module.exports = router;