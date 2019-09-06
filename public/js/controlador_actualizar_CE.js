'use strict';

const input_cedulaJ = document.querySelector('#cedulaJ');
const slt_modalidad = document.querySelector('#modalidad');
const input_nombre = document.querySelector('#nombre');
const slt_provincia = document.querySelector('#provincia');
const slt_canton = document.querySelector('#canton');
const input_direccion = document.querySelector('#direccion');
const input_telefono = document.querySelector("#telefono");
const input_fax = document.querySelector("#fax");
const input_web = document.querySelector("#web");
const input_nombreC = document.querySelector("#nombreC");
const input_apellido = document.querySelector("#apellido");
const input_cedula = document.querySelector("#cedula");
const slt_departamento = document.querySelector("#departamento");
const input_telefonoC = document.querySelector("#telefonoC");
const input_email = document.querySelector("#email");
const input_password = document.querySelector("#password");
const btn_actualizar = document.querySelector("#btn_actualizar");

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param);//Toma el parámetro id_CE del url y retorna el valor
    return id;
};

let _id = get_param('id_CE');

//console.log(_id);

let CE = buscar_CE(_id); // funcion creada en el servicioCE.js
let mostrar_datos = () =>{
    input_cedulaJ.value = CE[0]['cedulaJ']; 
    input_nombre.value = CE[0]['nombre'];
    input_direccion.value = CE[0]['direccion'];
    input_telefono.value = CE[0]['telefono'];
    input_fax.value = CE[0]['fax'];
    input_web.value = CE[0]['web'];
    input_nombreC.value = CE[0]['nombreC'];
    input_apellido.value = CE[0]['apellido'];
    input_cedula.value = CE[0]['cedula'];
    input_telefonoC.value = CE[0]['telefonoC'];
    input_email.value = CE[0]['email'];
    input_password.value = CE[0]['password'];
    
    let opcion_modalidad = document.querySelectorAll('#modalidad option');

    for(let i = 0; i<opcion_modalidad.length; i++){
        if (opcion_modalidad[i].textContent == CE[0]['modalidad']){
            opcion_modalidad[i].selected = true;
            //obtener_datos(); //no poseemos una funcion para cada select en el controladorRegistrarCE.js
        }
    }

    let opcion_provincia = document.querySelectorAll('#provincia option');
    
    for (let i = 0; i < opcion_provincia.length; i++){
        if (opcion_provincia[i].textContent == CE[0]['provincia']) {
            opcion_provincia[i].selected = true;
        }
    }
    
    let opcion_canton = document.querySelectorAll('#canton option');

    for (let i = 0; i < opcion_canton.length; i++) {
        if (opcion_canton[i].textContent == CE[0]['canton']) {
            opcion_canton[i].selected = true;
        }
    }
}
if(CE){
    mostrar_datos();
}


function validacion() {

    let error = false;

    if (input_cedulaJ.value == "") {
        error = true;
        input_cedulaJ.classList.add("error");
    }
    if (input_nombre.value == "") {
        error = true;
        input_nombre.classList.add("error");
    }
    if (input_direccion.value == "") {
        error = true;
        input_direccion.classList.add("error");
    }
    if (input_telefono.value == "") {
        error = true;
        input_telefono.classList.add("error");
    }
    if (input_nombreC.value == "") {
        error = true;
        input_nombreC.classList.add("error");
    }
    if (input_apellido.value == "") {
        error = true;
        input_apellido.classList.add("error");
    }
    if (input_cedula.value == "") {
        error = true;
        input_cedula.classList.add("error");
    }

    if (input_telefonoC.value == "") {
        error = true;
        input_telefonoC.classList.add("error");
    }
    if (input_email.value == "") {
        error = true;
        input_email.classList.add("error");
    }
    if (input_password.value == "") {
        error = true;
        input_password.classList.add("error");
    }
    return error;

};

let obtener_datos = () =>{
    let cedulaJ = input_cedulaJ.value;
    let modalidad = slt_modalidad.selectedOptions[0].textContent;
    let nombre = input_nombre.value;
    let provincia = slt_provincia.selectedOptions[0].textContent;
    let canton = slt_canton.selectedOptions[0].textContent;
    let direccion = input_direccion.value;
    let telefono = input_telefono.value;
    let fax = input_fax.value;
    let web = input_web.value;
    let nombreC = input_nombreC.value;
    let apellido = input_apellido.value;
    let cedula = input_cedula.value;
    let departamento = slt_departamento.selectedOptions[0].textContent;
    let telefonoC = input_telefonoC.value;
    let email = input_email.value;
    let password = input_password.value;

    actualizar_CE(cedulaJ, modalidad, nombre, provincia, canton, direccion, telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password, _id);

    let validar = validacion();

    if (validar == false) {
        registrarCE(cedulaJ, modalidad, nombre, provincia, canton, direccion, telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password);
        swal.fire({
            type: 'success',
            title: 'Proceso realizado con éxito',                        
        });

    }else{
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: "REVISE LOS CAMPOS MARCADOS CON ROJO"
        });


    };

};

btn_actualizar.addEventListener('click', obtener_datos);

