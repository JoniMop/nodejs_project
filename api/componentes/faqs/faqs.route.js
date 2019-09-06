'use strict';

const express = require('express');
const router = express.Router();
const faqsApi = require('./faqs.api');

router.param('id_faq', function(req, res, next, id_faq){
    req.body.id_faq = id_faq;
    next();
});

router.route('/registrar_faqs')
    .post(
        function(req , res){
            faqsApi.registrar(req, res);
        }
    );

router.route('/actualizar_faqs')
    .post(function(req, res){
        faqsApi.actualizar(req, res);
    });

router.route('/listar_faqs')
    .get(
        function(req , res){
            faqsApi.listar(req, res);
        }
    );

    router.route('/buscar_faq/:id_faq')
    .get(
        function(req , res){
            faqsApi.buscar_por_id(req, res);
        }
    );

module.exports = router;