'use strict';

const express = require('express');
const router = express.Router();
const api_utiles = require('./utiles.api');

router.param('id_util', function(req, res, next, id_util){
    req.body.id_util = id_util;
    next();
});

router.route('/registrar_utiles')
    .post(function(req, res){
        api_utiles.registrar(req, res);
    });

router.route('/actualizar_utiles')
    .post(function(req, res){
        api_utiles.actualizar(req, res);
    });

router.route('/listar_utiles')
    .get(function(req, res){
        api_utiles.listar(req, res);
    });

router.route('/buscar_util/:id_util')
    .get(function(req, res){
        api_utiles.buscar_por_id(req, res);
    });

module.exports=router;