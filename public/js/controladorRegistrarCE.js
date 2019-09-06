'use strict';

const boton_registrar = document.querySelector('#btnRegistrar');

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

function obtener_datos() {

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

    let validar = validacion();

    if (validar == false) {
        registrarCE(cedulaJ, modalidad, nombre, provincia, canton, direccion, telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password);
        swal.fire({
            type: 'success',
            title: 'Proceso realizado con éxito',
            text: "EL CENTRO EDUCATIVO SE REGISTRÓ EXITOSAMENTE",
            onClose: () => {
                window.location.href = 'home.html';
            }
         
        });

    } else {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: "REVISE LOS CAMPOS MARCADOS CON ROJO"
        });


    };

};


boton_registrar.addEventListener('click', obtener_datos);





/*'use strict';

const boton_registrar = document.querySelector('#btnRegistrar');

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

function obtener_datos(){

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
    
    
    registrarCE(cedulaJ, modalidad, nombre, provincia, canton, direccion,telefono, fax, web, nombreC, apellido, cedula, departamento, telefonoC, email, password);
};


boton_registrar.addEventListener('click', obtener_datos);
*/