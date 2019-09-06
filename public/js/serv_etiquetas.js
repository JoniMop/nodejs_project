'use strict';

function registrar_etiqueta(petiqueta){
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_etiqueta',
        method : 'post',
        data : {
            etiqueta : petiqueta
        },
        dataType : 'json',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function(res){
        swal.fire({
            type : 'success',
            title : 'Proceso realizado con éxito',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
        });
    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });
    });
};

let listar_etiquetas = () => {
    let etiquetas = [];

    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_etiquetas',
        method: 'get',
        data: {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function(res){
        etiquetas = res.lista_etiquetas;
    });

    request.fail(function () {

    });
    return etiquetas;
};

let buscar_etiqueta =(id_etiqueta)=> {
    let etiqueta = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_etiqueta/' + id_etiqueta,
        method: 'get',
        data: {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    peticion.done(function(res){
        etiqueta = res.etiqueta;
    });

    peticion.fail(function(){

    });
    return etiqueta;
};

let actualizar_etiqueta = (petiqueta, pid) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/actualizar_etiqueta',
        method : 'post',
        data : {
            etiqueta : petiqueta,
            id : pid
        },
        dataType : 'json',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function(res){
        swal.fire({
            type : 'success',
            title : 'Proceso realizado con éxito',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
        });
    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });
    });
};