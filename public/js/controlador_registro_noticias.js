'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_autor = document.querySelector('#txt_autor');
const input_titulo = document.querySelector('#txt_titulo');
const input_noticia = document.querySelector('#txt_noticia');


function obtener_datos() {



    let autor = input_autor.value;
    let titulo = input_titulo.value;
    let noticia = input_noticia.value;


    let bError = validar();


    if (bError == false) {
        //imprimir_lista_noticias();
        registrar_noticia(autor, titulo, noticia);
        //creando swal en formato json
        swal.fire({
            type: 'success',
            title: 'Noticia registrada on éxito!',
            text: 'Felicidades!',
            //cambio mensaje del boton
            confirmButtonText: 'OK',
            onClose: () => {
                window.location.href = 'dash_CE.html';
            }
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        });

        input_autor.value = "";
        input_titulo.value = "";
        input_noticia.value = "";

    } else {
        swal.fire({
            type: 'warning',
            title: 'No se pudo registrar la noticia',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Entendido'
        });

    };

    //registrar_noticia(autor, titulo, noticia);


};


boton_registrar.addEventListener('click', obtener_datos);









function validar() {
    let bError = false;
    //Creando expresion regular
    let regExNumeros = /^[0-9]+$/;//para definir expresion regular siempre comienzo con /^ y termino con $/ Intento siempre utilizar las variable globales apra esto
    let regExLetras = /^[a-zA-Z ]+$/;//Esta expresion me permite solo registrar letras, no espacios por ejemplo...si quiero agregar espacio lo hago antes de cerrar el corchete... asi:  /^[a-zA-Z ]+$/


    if (input_autor.value == '') {
        bError = true;
        input_autor.classList.add('input_error');
    } else {
        input_autor.classList.remove('input_error');
    }
    if (input_titulo.value == '' || regExLetras.test(input_titulo.value) == false) {
        bError = true;
        input_titulo.classList.add('input_error');
    } else {
        input_titulo.classList.remove('input_error');
    }
    //la expresion regular se testea con el value de precio, == false me dice que si no se cumple entonces ejecuto lo que continua en el codigo. Expresion regular indica formatos
    if (input_noticia.value == '') { //|| regExNumeros.test(inputPrecio.value) == false){
        bError = true;
        input_noticia.classList.add('input_error');
    } else {
        input_noticia.classList.remove('input_error');
    }
    return bError;

};