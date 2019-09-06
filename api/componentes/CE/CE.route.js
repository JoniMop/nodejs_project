'use strict';

const express = require('express');
const router = express.Router();
const CentroEducativoApi = require('./CE.api');

// esto saca el parametro del url y lo manda al api
router.param('id_CE', function (req, res, next, id_CE) {
    req.body.id_CE = id_CE;
    next();
});


router.route('/registrarCE') //le ponemos el nombre que queremos a este endpoint
    .post(
        function(req , res){ //este post atiende el registrar en el endpoint / registrarCE
        CentroEducativoApi.registrar(req, res);
    }
);

//nueva ruta para actualizar el centro educativo
router.route('/actualizar_CE') //ruta para enviar los datos nuevos del CE insertados en actualizar
    .post(
        function (req, res) { 
            CentroEducativoApi.actualizar(req, res);
    }
);

router.route('/listar_CE')
    .get(
        function(req , res){ //este post atiende el listar en el endpoint / listarCE
            CentroEducativoApi.listar(req, res);
        }
    );

//nueva ruta para buscar CE
router.route('/buscar_CE/:id_CE')
    .get(
        function (req, res) { //este post atiende el listar en el endpoint / listarCE
            CentroEducativoApi.buscar_por_id(req, res);
        }
    );


// ENDPOINTS PARA REGISTRO SESION - TATIANA
  router.route('/validar_credenciales_ce')
  .post(function(req, res){
      console.log('soy el correo en el route: ' + req.body.email);
    CentroEducativoApi.validar(req, res); //es la const que se declara al principio
  });


//nueva ruta para desactivar CE
router.route('/desactivar_CE')
    .post(
        function (req, res) {
            CentroEducativoApi.desactivar(req, res);
        }
    );

//nueva ruta para activar CE
router.route('/activar_CE')
    .post(
        function (req, res) {
            CentroEducativoApi.activar(req, res);
        }
    );

module.exports = router;
