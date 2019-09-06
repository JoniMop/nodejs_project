'use strict';

const boton_registrar = document.querySelector('#btnRegistrar');

const input_pnombre = document.querySelector('#pnombre');
const input_snombre = document.querySelector('#snombre');
const input_primerApellido = document.querySelector('#primerApellido');
const input_segundoApellido = document.querySelector('#segundoApellido');
const input_cedula = document.querySelector('#cedula');
const input_nacionalidad = document.querySelector('#nacionalidad');
const slt_provincia = document.querySelector('#sltProvincia');
const slt_canton = document.querySelector('#sltCanton');
const input_cantidadHijos = document.querySelector('#cantidadHijos');
const input_email = document.querySelector('#email');
const input_telefono = document.querySelector('#telefono');
const input_password = document.querySelector('#password');

function validacion() {
    let validar = false;
    if (input_pnombre.value == "") {
        validar = true;
        input_pnombre.classList.add('error');
    };
    if (input_primerApellido.value == "") {
        validar = true;
        input_primerApellido.classList.add('error');
    };
    if (input_cedula.value == "") {
        validar = true;
        input_cedula.classList.add('error');
    };
    if (input_nacionalidad.value == "") {
        validar = true;
        input_nacionalidad.classList.add('error');
    };
    if (input_cantidadHijos.value == "") {
        validar = true;
        input_cantidadHijos.classList.add('error');
    };
    if (input_email.value == "") {
        validar = true;
        input_email.classList.add('error');
    };
    if (input_telefono.value == "") {
        validar = true;
        input_telefono.classList.add('error');
    };
    if (input_password.value == "") {
        validar = true;
        input_password.classList.add('error');
    };
    return validar;
};

function obtener_datos() {

    let pnombre = input_pnombre.value;
    let snombre = input_snombre.value;
    let primerApellido = input_primerApellido.value;
    let segundoApellido = input_segundoApellido.value;
    let cedula = input_cedula.value;
    let nacionalidad = input_nacionalidad.value;
    let provincia = slt_provincia.selectedOptions[0].textContent;
    let canton = slt_canton.selectedOptions[0].textContent;
    let cantidadHijos = input_cantidadHijos.value;
    let email = input_email.value;
    let telefono = input_telefono.value;
    let password = input_password.value;

    let validar = validacion();

    if (validar == false) {
        padreDeFamilia(pnombre, snombre, primerApellido, segundoApellido, cedula, nacionalidad, provincia, canton, cantidadHijos, email, telefono, password);
        swal.fire({
            type: 'success',
            title: 'Proceso realizado con éxito',
            text: "USUARIO REGISTRADO EXITOSAMENTE",
            onClose: () => {
                window.location.href = 'home.html';
            }
        });
    }
    else {
        swal.fire({
            type: 'warning',
            title: 'Proceso no realizado',
            text: "Favor verificar los campos resaltados"
        });
    }

};


boton_registrar.addEventListener('click', obtener_datos);







/*'use strict';

const boton_registrar = document.querySelector('#btnRegistrar');

const input_pnombre = document.querySelector('#pnombre');
const input_snombre = document.querySelector('#snombre');
const input_primerApellido = document.querySelector('#primerApellido');
const input_segundoApellido = document.querySelector('#segundoApellido');
const input_cedula = document.querySelector('#cedula');
const input_nacionalidad = document.querySelector('#nacionalidad');
const slt_provincia = document.querySelector('#sltProvincia');
const slt_canton = document.querySelector('#sltCanton');
const input_cantidadHijos = document.querySelector('#cantidadHijos');
const input_email = document.querySelector('#email');
const input_telefono = document.querySelector('#telefono');
const input_password = document.querySelector('#password');

function obtener_datos(){

    let pnombre = input_pnombre.value;
    let snombre = input_snombre.value;
    let primerApellido = input_primerApellido.value;
    let segundoApellido = input_segundoApellido.value;
    let cedula = input_cedula.value;
    let nacionalidad = input_nacionalidad.value;
    let provincia = slt_provincia.selectedOptions[0].textContent;
    let canton = slt_canton.selectedOptions[0].textContent;
    let cantidadHijos = input_cantidadHijos.value;
    let email = input_email.value;
    let telefono = input_telefono.value;
    let password = input_password.value;

    console.log(pnombre, snombre, primerApellido, segundoApellido, cedula, nacionalidad, provincia, canton, cantidadHijos, email, telefono, password);
    padreDeFamilia(pnombre, snombre, primerApellido, segundoApellido, cedula, nacionalidad, provincia, canton, cantidadHijos, email, telefono, password);
};


boton_registrar.addEventListener('click', obtener_datos);

*/