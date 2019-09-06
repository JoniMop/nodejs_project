'use strict';

let utiles = listar_utiles();
const tabla = document.querySelector('#tbl_utiles tbody');
let input_buscar = document.querySelector('#txt_buscar');

let mostrar_lista_utiles =() =>{

    let buscar=input_buscar.value;

    tabla.innerHTML='';

        for(let i=0; i < utiles.length; i++){
            if(utiles[i]['tipo'].toLowerCase().includes(buscar.toLowerCase())){
                let fila = tabla.insertRow();

            fila.insertCell().innerHTML = utiles[i]['tipo']; //'tipo'
            fila.insertCell().innerHTML = utiles[i]['cantidad']; // 'cantidad'
            fila.insertCell().innerHTML = utiles[i]['descripcion']; //'descripcion'

            let celda_configuracion = fila.insertCell();

            //Creación del boton Editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_utiles.html?id_util=${utiles[i]['_id']}`;

            celda_configuracion.appendChild(boton_editar);
            };
        }
};

mostrar_lista_utiles();

input_buscar.addEventListener('keyup', mostrar_lista_utiles);