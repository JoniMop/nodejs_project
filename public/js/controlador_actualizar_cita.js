'use strict'

const boton_actualizar = document.querySelector('#btn_actualizar');

const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_fecha_cita = document.querySelector('#txt_fecha_cita');
const input_motivo_cita = document.querySelector('#txt_motivo_cita');
const input_nombre_completo_del_alumno = document.querySelector('#txt_nombre_completo_del_alumno');





let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id_noticia del url y retorna el valor
    return id;
}

let _id = get_param('id_cita');

console.log(_id);

let cita = buscar_cita(_id);

let mostrar_datos = () => {
    
    input_primer_nombre.value = cita[0]['primer_nombre'];
    input_segundo_nombre.value = cita[0]['segundo_nombre'];
    input_primer_apellido.value = cita[0]['primer_apellido'];
    input_segundo_apellido.value = cita[0]['segundo_apellido'];
    input_fecha_cita.value = cita[0]['fecha_cita'];
    input_motivo_cita.value = cita[0]['motivo_cita'];
    input_nombre_completo_del_alumno.value = cita[0]['nombre_completo_del_alumno'];

};


if (cita) {
    mostrar_datos();
}



let obtener_datos = () => {
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let fecha_cita = input_fecha_cita.value;
    let motivo_cita = input_motivo_cita.value;
    let nombre_completo_del_alumno = input_nombre_completo_del_alumno.value;


    //faltaria validar datos

    let bError = validar();


    if (bError == false) {
        actualizar_cita(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_cita, motivo_cita, nombre_completo_del_alumno, _id);
        swal.fire({
            type: 'success',
            title: 'Cita registrada on éxito!',
            text: 'Felicidades! Se le estará enviando horarios disponibles a su correo electrónico',
            //cambio mensaje del boton
            confirmButtonText: 'OK'
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        });

        window.location.href = 'listar_citas.html';
        
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

btn_actualizar.addEventListener('click', obtener_datos);

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