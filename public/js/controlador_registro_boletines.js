'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_titulo = document.querySelector('#txt_titulo');
const input_boletin = document.querySelector('#txt_boletin');


function obtener_datos() {



    let titulo = input_titulo.value;
    let boletin = input_boletin.value;


    let bError = validar();


    if (bError == false) {
        registrar_boletin(titulo, boletin);
        //creando swal en formato json
        swal.fire({
            type: 'success',
            title: 'Boletín registrado on éxito!',
            text: 'Felicidades!',
            //cambio mensaje del boton
            confirmButtonText: 'OK',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        });
        input_titulo.value = "";
        input_boletin.value = "";
    } else {
        //swal.fire('No se pudo registrar la noticia');
        //creando swal en formato json
        swal.fire({
            type: 'warning',
            title: 'No se pudo registrar el boletín',
            text: 'Por favor revise los campos resaltados',
            //cambio mensaje del boton
            confirmButtonText: 'Entendido'
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        });

    };



};


boton_registrar.addEventListener('click', obtener_datos);









function validar() {
    let bError = false;
    //Creando expresion regular
    let regExNumeros = /^[0-9]+$/;//para definir expresion regular siempre comienzo con /^ y termino con $/ Intento siempre utilizar las variable globales apra esto
    let regExLetras = /^[a-zA-Z ]+$/;//Esta expresion me permite solo registrar letras, no espacios por ejemplo...si quiero agregar espacio lo hago antes de cerrar el corchete... asi:  /^[a-zA-Z ]+$/

    //captura nombre de usuario logueado. 
//let nombre = document.querySelector('#nombre_padre').innerHTML = sessionStorage.getItem('nombre_usuario')

    if (input_titulo.value == '') { //|| regExLetras.test(input_titulo.value) == false
        bError = true;
        input_titulo.classList.add('input_error');
    } else {
        input_titulo.classList.remove('input_error');
    }
    //la expresion regular se testea con el value de precio, == false me dice que si no se cumple entonces ejecuto lo que continua en el codigo. Expresion regular indica formatos
    if (input_boletin.value == '') { //|| regExNumeros.test(inputPrecio.value) == false){
        bError = true;
        input_boletin.classList.add('input_error');
    } else {
        input_boletin.classList.remove('input_error');
    }
    return bError;

};