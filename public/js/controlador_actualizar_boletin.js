'use strict'

const input_titulo = document.querySelector('#txt_titulo');
const input_boletin = document.querySelector('#txt_boletin');

const btn_actualizar = document.querySelector('#btn_actualizar')



let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id_boletin del url y retorna el valor
    return id;
}

let _id = get_param('id_boletin');

console.log(_id);

let boletin = buscar_boletin(_id);

let mostrar_datos = () =>{
    input_titulo.value = boletin[0]['titulo'];
    input_boletin.value = boletin[0]['boletin'];   
     
};


if(boletin){
    mostrar_datos();
}



let obtener_datos = () =>{
    let titulo = input_titulo.value;
    let boletin = input_boletin.value;

    //faltaria validar 
    
    let bError = validar();


    if (bError == false) {
        actualizar_boletin(titulo, boletin, _id);
        //creando swal en formato json
        swal.fire({
            type: 'success',
            title: 'Boletín registrado on éxito!',
            text: 'Felicidades!',
            //cambio mensaje del boton
            confirmButtonText: 'OK'
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        });
        window.location.href = 'listar_boletines.html';
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

   // actualizar_boletin(titulo, boletin, _id); 
   // window.location.href = 'listar_boletines.html';
    



function validar() {
    let bError = false;
    //Creando expresion regular
    let regExNumeros = /^[0-9]+$/;//para definir expresion regular siempre comienzo con /^ y termino con $/ Intento siempre utilizar las variable globales apra esto
    let regExLetras = /^[a-zA-Z ]+$/;//Esta expresion me permite solo registrar letras, no espacios por ejemplo...si quiero agregar espacio lo hago antes de cerrar el corchete... asi:  /^[a-zA-Z ]+$/


    if (input_titulo.value == '') {
        bError = true;
        input_titulo.classList.add('input_error');
    } else {
        input_titulo.classList.remove('input_error');
    }
    if (input_boletin.value == '') { // || regExLetras.test(input_titulo.value) == false
        bError = true;
        input_boletin.classList.add('input_error');
    } else {
        input_boletin.classList.remove('input_error');
    }
    //la expresion regular se testea con el value de precio, == false me dice que si no se cumple entonces ejecuto lo que continua en el codigo. Expresion regular indica formatos
    
    return bError;

};

btn_actualizar.addEventListener('click', obtener_datos);