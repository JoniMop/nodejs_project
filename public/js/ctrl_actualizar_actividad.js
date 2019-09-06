'use strict';

const input_actividad = document.querySelector('#txt_actividad');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); //toma el parametro id_actividad del url y retorna el valor
    return id;
};

let _id = get_param('id_actividad');

let actividad = buscar_actividad(_id);

let mostrar_datos = () => {
    input_actividad.value = actividad[0]['actividad']; //revisar aquí si quitar [0]
};

if(actividad){
    mostrar_datos();
}

let obtener_datos = () =>{
    let actividad = input_actividad.value;

    actualizar_actividad(actividad, _id);
};

btn_actualizar.addEventListener('click', obtener_datos);