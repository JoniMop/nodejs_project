'use strict';

function registrar_actividad (pactividad){
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_actividad',
        method: 'post',
        data: {actividad : pactividad},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    peticion.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Actividad registrada con éxito',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
        });
    });

    peticion.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'No se pudo registrar la actividad',
            text: res.msg
        });
    });
};

let listar_actividades =() =>{
    let actividades = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_actividades',
        method: 'get',
        data: {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    peticion.done(function(res){
        actividades=res.lista_actividades;
    });

    peticion.fail(function(){});

    return actividades;
};

let buscar_actividad = (id_actividad) =>{
    let actividad = [];

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_actividad/' + id_actividad,
        method: 'get',
        data: {},
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    peticion.done(function(res){
        actividad = res.actividad;
    });

    peticion.fail(function(){

    });
    return actividad;
};

let actualizar_actividad = (pactividad, pid) =>{
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_actividad',
        method: 'post',
        data: {
            actividad : pactividad,
            id : pid
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    peticion.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Actividad registrada con éxito',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
        });
    });

    peticion.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'No se pudo registrar la actividad',
            text: res.msg
        });
    });
};