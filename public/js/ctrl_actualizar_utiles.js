'use strict';

const input_tipo = document.querySelector('#txt_tipo');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_descripcion = document.querySelector('#txt_descripcion');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param);
    return id;
};

let _id = get_param('id_util');

let util = buscar_util(_id);

let mostrar_datos = () =>{
    input_tipo.value = util[0]['tipo'];
    input_cantidad.value = util[0]['cantidad'];
    input_descripcion.value = util[0]['descripcion'];
};

if(util){
    mostrar_datos();
}

let obtener_datos = () => {
    let tipo = input_tipo.value;
    let cantidad = input_cantidad.value;
    let descripcion = input_descripcion.value;

    actualizar_util(tipo, cantidad, descripcion, _id);
};

btn_actualizar.addEventListener('click', obtener_datos);