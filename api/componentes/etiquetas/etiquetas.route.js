'use strict';

const express = require('express');
const router = express.Router();
const api_etiquetas = require('./etiquetas.api');

router.param('id_etiqueta', function(req, res, next, id_etiqueta){
    req.body.id_etiqueta = id_etiqueta;
    next();
});

router.route('/registrar_etiqueta')
    .post(function(req, res){
        api_etiquetas.registrar(req, res);
    });

router.route('/actualizar_etiqueta')
    .post(function(req, res){
        api_etiquetas.actualizar(req, res);
    });

router.route('/listar_etiquetas')
    .get(function(req, res){
        api_etiquetas.listar(req, res);
    });

router.route('/buscar_etiqueta/:id_etiqueta')
    .get(function(req, res){
        api_etiquetas.buscar_por_id(req, res);
    });

module.exports = router;