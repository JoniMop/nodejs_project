'use strict';

function padreDeFamilia(pnombre, snombre, primerApellido, segundoApellido, cedula, nacionalidad, provincia, canton, cantidadHijos, email, telefono, password) {
    let request = $.ajax({
        url: 'http://localhost:4000/api/padreDeFamilia',
        method: "POST",
        data: {
            pnombre: pnombre,
            snombre: snombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            cedula: cedula,
            nacionalidad: nacionalidad,
            provincia: provincia,
            canton: canton,
            cantidadHijos: cantidadHijos,
            email: email,
            telefono: telefono,
            password: password
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {

    });

    request.fail(function (res) {

    });
};
function buscar_usuario(id_usuario) {

    let usuario = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/buscar_usuario/'+ id_usuario,
        method: "GET",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    request.done(function (res) {
        usuario = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return usuario;
}; 