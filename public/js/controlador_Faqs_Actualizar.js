'use strict';

let inputPregunta = document.querySelector('#txtPregunta');
let inputDescripcion = document.querySelector('#txtDescripcion');
let botonActualizar = document.querySelector('#btnActualizar');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); 
    return id;
};

let _id = get_param('id_faq');

//console.log(_id);
let faq = buscar_faq(_id);
let mostrar_datos = () =>{
    inputPregunta.value = faq[0]['pregunta'];
    inputDescripcion.value = faq[0]['descripcion'];
};

if(faq){
    mostrar_datos();
}


let obtener_datos = () => {
    let pregunta = inputPregunta.value;
    let descripcion = inputDescripcion.value;

    actualizar_faq(pregunta, descripcion, _id);
};

botonActualizar.addEventListener('click', obtener_datos); 