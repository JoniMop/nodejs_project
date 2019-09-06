'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_fecha_cita = document.querySelector('#txt_fecha_cita');
const input_motivo_cita = document.querySelector('#txt_motivo_cita');
const input_nombre_completo_del_alumno = document.querySelector('#txt_nombre_completo_del_alumno');






function obtener_datos() {



    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let fecha_cita = input_fecha_cita.value;
    let motivo_cita = input_motivo_cita.value;
    let nombre_completo_del_alumno = input_nombre_completo_del_alumno.value;


    let bError = validar();


    if (bError == false) {
        registrar_cita(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_cita, motivo_cita, nombre_completo_del_alumno);
        swal.fire({
            type: 'success',
            title: 'Cita registrada on éxito!',
            onClose: () => {
                window.location.href = 'dash_usuario_PF.html';
            }            
        });
        input_primer_nombre.value = "";
        input_segundo_nombre.value = "";
        input_primer_apellido.value = "";
        input_segundo_apellido.value = "";
        input_fecha_cita.value = "";
        input_motivo_cita.value = "";
        input_nombre_completo_del_alumno.value = "";
    } else {
        //swal.fire('No se pudo registrar la noticia');
        //creando swal en formato json
        swal.fire({
            type: 'warning',
            title: 'No se pudo registrar esta cita',
            text: 'Por favor revise los campos resaltados',
            //cambio mensaje del boton
            confirmButtonText: 'Entendido'
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        })

    };

   // registrar_cita(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_cita, motivo_cita, nombre_completo_del_alumno)


};


boton_registrar.addEventListener('click', obtener_datos);









function validar() {
    let bError = false;
    //Creando expresion regular
    let regExNumeros = /^[0-9]+$/;//para definir expresion regular siempre comienzo con /^ y termino con $/ Intento siempre utilizar las variable globales apra esto
    let regExLetras = /^[a-zA-Z ]+$/;//Esta expresion me permite solo registrar letras, no espacios por ejemplo...si quiero agregar espacio lo hago antes de cerrar el corchete... asi:  /^[a-zA-Z ]+$/


    if (input_primer_nombre.value == '' || regExLetras.test(input_primer_nombre.value) == false) {
        bError = true;
        input_primer_nombre.classList.add('input_error');
    } else {
        input_primer_nombre.classList.remove('input_error');
    };

    /* if (input_segundo_nombre.value == '' || regExLetras.test(input_segundo_nombre.value) == false) {
         bError = true;
         input_segundo_nombre.classList.add('input_error');
     } else {
         input_segundo_nombre.classList.remove('input_error');
     };*/

    if (input_primer_apellido.value == '' || regExLetras.test(input_primer_apellido.value) == false) {
        bError = true;
        input_primer_apellido.classList.add('input_error');
    } else {
        input_primer_apellido.classList.remove('input_error');
    };

    /* if (input_segundo_apellido.value == '' || regExLetras.test(input_segundo_apellido.value) == false) {
         bError = true;
         input_segundo_apellido.classList.add('input_error');
     } else {
         input_segundo_apellido.classList.remove('input_error');
     };*/

    if (input_fecha_cita.value == '') {
        bError = true;
        input_fecha_cita.classList.add('input_error');
    } else {
        input_fecha_cita.classList.remove('input_error');
    };

    if (input_motivo_cita.value == '') {
        bError = true;
        input_motivo_cita.classList.add('input_error');
    } else {
        input_motivo_cita.classList.remove('input_error');
    };

    /* if (input_nombre_completo_del_alumno.value == '' || regExLetras.test(input_nombre_completo_del_alumno.value) == false) {
         bError = true;
         input_nombre_completo_del_alumno.classList.add('input_error');
     } else {
         input_nombre_completo_del_alumno.classList.remove('input_error');
     };*/



    return bError;

};