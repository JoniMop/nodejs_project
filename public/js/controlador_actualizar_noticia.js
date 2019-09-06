'use strict'

const input_autor = document.querySelector('#txt_autor');
const input_titulo = document.querySelector('#txt_titulo');
const input_noticia = document.querySelector('#txt_noticia');
const btn_actualizar = document.querySelector('#btn_actualizar');



let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id_noticia del url y retorna el valor
    return id;
}

let _id = get_param('id_noticia');

console.log(_id);

let noticia = buscar_noticia(_id);

let mostrar_datos = () =>{
    input_autor.value = noticia[0]['autor'];
    input_titulo.value = noticia[0]['titulo'];
    input_noticia.value = noticia[0]['noticia'];   
     
};


if(noticia){
    mostrar_datos();
}



let obtener_datos = () =>{
    let autor = input_autor.value;
    let titulo = input_titulo.value;
    let noticia = input_noticia.value;

    //faltaria validar datos

    let bError = validar();


    if (bError == false) {
        actualizar_noticia(autor, titulo, noticia, _id);
        //creando swal en formato json
        swal.fire({
            type: 'success',
            title: 'Boletín registrado on éxito!',
            text: 'Felicidades!',
            //cambio mensaje del boton
            confirmButtonText: 'OK'
            //modal (tarjeta emergente) toma la tipografia de mi css, por defecto.
        });
        window.location.href = 'listar_noticias.html';
        input_autor.value = "";
        input_titulo.value = "";
        input_noticia.value = "";

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

   // actualizar_noticia(autor, titulo, noticia, _id); 
   // window.location.href = 'listar_noticias.html';
    }
};

btn_actualizar.addEventListener('click', obtener_datos);

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
    
    return bError;

};

btn_actualizar.addEventListener('click', obtener_datos);