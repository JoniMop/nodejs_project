'use strict';

const express = require('express');
const router = express.Router();
const padreDeFamiliaApi = require('./padreDeFamilia.api');

 // esto saca el parametro del url y lo manda al api
router.param('id_usuario', function (req, res, next, id_usuario) {
  req.body.id_usuario = id_usuario;
  next();
});

router.route('/padreDeFamilia') //le ponemos el nombre que queremos a este endpoint
    .post(
        function(req , res){ //este post atiende el registrar en el endpoint /registrarPadreDeFamilia
        padreDeFamiliaApi.registrar(req, res);
    }
);

router.route('/buscar_usuario/:id_usuario')
    .get(
        function (req, res) { //este post atiende el listar en el endpoint / listarCE
            padreDeFamiliaApi.buscar_por_id(req, res);
        }
    );

// ENDPOINTS PARA REGISTRO SESION - TATIANA
router.route('/validar_credenciales_pf')
  .post(function(req, res){
    padreDeFamiliaApi.validar(req, res);
  });

module.exports = router;
 