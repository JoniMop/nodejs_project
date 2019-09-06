'use strict';

const input_etiqueta = document.querySelector('#txt_etiqueta');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); //toma el parametro id_etiqueta del url y retorna el valor
    return id;
};

let _id = get_param('id_etiqueta');

let etiqueta = buscar_etiqueta(_id);

let mostrar_datos = () =>{
    input_etiqueta.value = etiqueta[0]['etiqueta'];
};

if(etiqueta){
    mostrar_datos();
}

let obtener_datos = () => {
    let etiqueta = input_etiqueta.value;

    actualizar_etiqueta(etiqueta, _id);
};

btn_actualizar.addEventListener('click', obtener_datos);