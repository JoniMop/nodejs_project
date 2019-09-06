'use strict';

const express = require('express');
const router = express.Router();
const api_actividades = require('./actividades.api');

router.param('id_actividad', function(req, res, next, id_actividad){
    req.body.id_actividad = id_actividad;
    next();
});

router.route('/registrar_actividad')
    .post(function(req, res){
        api_actividades.registrar(req, res);
    });

router.route('/actualizar_actividad')
    .post(function(req, res){
        api_actividades.actualizar(req, res);
    });

router.route('/listar_actividades')
    .get(function(req, res){
        api_actividades.listar(req, res);
    });

router.route('/buscar_actividad/:id_actividad')
    .get(function(req, res){
        api_actividades.buscar_por_id(req, res);
    });

module.exports=router;