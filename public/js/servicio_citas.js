'use strict';

function registrar_cita(pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pfecha_cita, pmotivo_cita, pnombre_completo_del_alumno) {
    let respuesta = '';
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_cita',
        method: "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            primer_nombre: pprimer_nombre,
            segundo_nombre: psegundo_nombre,
            primer_apellido: pprimer_apellido,
            segundo_apellido: psegundo_apellido,
            fecha_cita: pfecha_cita,
            motivo_cita: pmotivo_cita,
            nombre_completo_del_alumno: pnombre_completo_del_alumno

        }
    });


    request.done(function (res) {
        respuesta = res;
    });



    request.fail(function (res) {
        respuesta = res;
    });


};

let listar_citas = () => {

    let citas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_citas",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        citas = res.lista_citas;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return citas;

};

//buscar es muy similar a listar
let buscar_cita = (id_cita) => {
    let cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_cita/" + id_cita,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        cita = res.cita;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return cita;

};

//actualizar es muy similar al de registrar
let actualizar_cita = (pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pfecha_cita, pmotivo_cita, pnombre_completo_del_alumno, pid) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_cita',
        method: "POST",
        async: false,
        data: {
            primer_nombre: pprimer_nombre,
            segundo_nombre: psegundo_nombre,
            primer_apellido: pprimer_apellido,
            segundo_apellido: psegundo_apellido,
            fecha_cita: pfecha_cita,
            motivo_cita: pmotivo_cita,
            nombre_completo_del_alumno: pnombre_completo_del_alumno,
            id: pid

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Proceso realizado con éxito',
            text: res.msg
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });

};








