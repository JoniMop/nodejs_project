'use strict';

const express = require('express');
const router = express.Router();
const api_noticias = require('./noticias.api');

/*router.param('titulo', function(req, res){
    req.body.titulo = titulo;
    next();
});*/

router.route('/registrar_noticia')
    .post(
        function(req , res){
            api_noticias.registrar(req, res);
        }
    );

   /* router.route('/actualizar_inmueble')
    .post(
        function(req , res){
            api_inmuebles.actualizar(req, res);
        }
    );*/

router.route('/listar_noticias')
    .get(
        function(req , res){
            api_noticias.listar(req, res);
        }
    );

/*router.route('/buscar_inmueble/:id_inmueble')
.get(
    function(req , res){
        api_inmuebles.buscar_por_id(req, res);
    }
);*/

module.exports = router;