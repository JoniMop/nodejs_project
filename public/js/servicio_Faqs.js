'use strict';

function registrarFaqs(psPregunta, psDescripcion) {
       

    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_faqs',
        method: "POST",
        async: false,
        data: {
            pregunta: psPregunta,
            descripcion: psDescripcion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Pregunta registrada exitosamente',
            text: res.msg
        });
    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'La pregunta no se registró',
            text: res.msg
        });
    });

};


let listar_faqs = () => {
    let faqs = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_faqs",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        faqs = res.lista_faqs;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return faqs;

};

let buscar_faq = (id_faq) => {
    let faq = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_faq/"+ id_faq,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        faq = res.faq;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return faq;

};


let actualizar_faq = (psPregunta, psDescripcion, pid) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_faqs',
        method: 'post',
        data:{
            pregunta : psPregunta,
            descripcion : psDescripcion,
            id : pid
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title : 'Pregunta editada con éxito',
            onClose: () => {
                window.location.href = 'dash_Mep.html';
            }
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'No se pudo editar la pregunta',
            text: res.msg
        });
    });
};