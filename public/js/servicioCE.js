'use strict';


function registrarCE(cedulaJ, modalidad, nombre, provincia, canton, direccion, telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password) {
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrarCE',
        method: "POST",
        data: {
            cedulaJ: cedulaJ,
            modalidad: modalidad,
            nombre: nombre,
            provincia: provincia,
            canton: canton,
            direccion: direccion,
            telefono: telefono,
            fax: fax,
            web: web,
            nombreC: nombreC,
            apellido: apellido,
            cedula: cedula,
            departamento: departamento,
            telefonoC: telefonoC,
            email: email,
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

function listar_CE() {

    let listaCE = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_CE',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaCE = response.lista_CE;
    });

    peticion.fail(function () {

    });

    return listaCE;
};

//funcion para buscar CE para editar y tambien llenar el perfil del CE logueado
function buscar_CE(id_CE) {

    let CE = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/buscar_CE/'+ id_CE,
        method: "GET",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    request.done(function (res) {
        CE = res.CE;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return CE;
};


function actualizar_CE(cedulaJ, modalidad, nombre, provincia, canton, direccion, telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password, id) {
    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_CE',
        method: "POST",
        data: {
            cedulaJ: cedulaJ,
            modalidad: modalidad,
            nombre: nombre,
            provincia: provincia,
            canton: canton,
            direccion: direccion,
            telefono: telefono,
            fax: fax,
            web: web,
            nombreC: nombreC,
            apellido: apellido,
            cedula: cedula,
            departamento: departamento,
            telefonoC: telefonoC,
            email: email,
            password: password,
            id: id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (res) {

    });

    request.fail(function (res) {

    });
};

//DESACTIVAR CE
let desactivar = (id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/desactivar_CE',
        method: "POST",
        data: {
            id: id,
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

//ACTIVAR CE
let activar = (id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/activar_CE',
        method: "POST",
        data: {
            id: id,
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





/*'use strict';

function registrarCE(cedulaJ, modalidad, nombre, provincia, canton, direccion, telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password){
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrarCE',
        method : "POST",
        data : {
            cedulaJ : cedulaJ,
            modalidad : modalidad,
            nombre : nombre,
            provincia : provincia,
            canton : canton,
            direccion : direccion,
            telefono : telefono, 
            fax : fax,
            web : web,
            nombreC : nombreC,
            apellido : apellido,
            cedula : cedula, 
            departamento : departamento,
            telefonoC : telefonoC,
            email : email,
            password : password
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        swal.fire({
            type : 'success',
            title : 'Proceso realizado con éxito',
            text : res.msg
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

function listar_CE(){
    let listaCE = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_CE',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
        listaCE = response;
      });
    
      peticion.fail(function(){

      });

    return listaCE;
};
*/