'use strict';

function registrarServicios(psNombre, psDetalle) {
       

    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_servicios',
        method: "POST",
        async: false,
        data: {
            nombre: psNombre,
            detalle: psDetalle
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Servicio registrado exitosamente',
            text: res.msg
        });
    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'El servicio no se registró',
            text: res.msg
        });
    });

};


let listar_servicios = () => {
    let servicios = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_servicios",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        servicios = res.lista_servicios;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return servicios;

};

let buscar_servicio = (id_servicio) => {
    let servicio = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_servicio/"+ id_servicio,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        servicio = res.servicio;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return servicio;

};


let actualizar_servicio = (psNombre, psDetalle, pid) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_servicios',
        method: 'post',
        data:{
            nombre : psNombre,
            detalle : psDetalle,
            id : pid
        },
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title : 'Servicio editado con éxito',
            onClose: () => {
                window.location.href = 'dash_Mep.html';
            }
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'No se pudo editar el servicio',
            text: res.msg
        });
    });
};