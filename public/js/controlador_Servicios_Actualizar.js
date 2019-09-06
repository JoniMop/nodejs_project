'use strict';

let inputNombre = document.querySelector('#txtNombre');
let inputDetalle = document.querySelector('#txtDetalle');
let botonActualizar = document.querySelector('#btnActualizar');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); 
    return id;
};

let _id = get_param('id_servicio');

//console.log(_id);
let servicio = buscar_servicio(_id);
let mostrar_datos = () =>{
    inputNombre.value = servicio[0]['nombre'];
    inputDetalle.value = servicio[0]['detalle'];
};

if(servicio){
    mostrar_datos();
}


let obtener_datos = () => {
    let nombre = inputNombre.value;
    let detalle = inputDetalle.value;

    actualizar_servicio(nombre, detalle, _id);
};

botonActualizar.addEventListener('click', obtener_datos);