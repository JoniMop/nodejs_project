'use strict';

function registrar_utiles(ptipo, pcantidad, pdescripcion){
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_utiles',
        method: 'post',
        data:{
            tipo : ptipo,
            cantidad : pcantidad,
            descripcion : pdescripcion
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title : 'Utiles registrados con éxito',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'No se pudo realizar el registro',
            text: res.msg
        });
    });
};

let listar_utiles =()=> {
    let utiles = [];

    let request= $.ajax({
        url: 'http://localhost:4000/api/listar_utiles',
        method: 'get',
        data: {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function(res){
        utiles = res.lista_utiles;
    });

    request.fail(function(){

    });
    return utiles;
};

let buscar_util =(id_util)=> {
    let util = [];

    let request= $.ajax({
        url: 'http://localhost:4000/api/buscar_util/' + id_util,
        method: 'get',
        data: {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function(res){
        util = res.util;
    });

    request.fail(function(){

    });
    return util;
};

let actualizar_util = (ptipo, pcantidad, pdescripcion, pid) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_utiles',
        method: 'post',
        data:{
            tipo : ptipo,
            cantidad : pcantidad,
            descripcion : pdescripcion,
            id : pid
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title : 'Utiles registrados con éxito',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'No se pudo realizar el registro',
            text: res.msg
        });
    });
};