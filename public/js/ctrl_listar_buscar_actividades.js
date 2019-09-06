'use strict';

let actividades = listar_actividades();
const tabla = document.querySelector('#tbl_actividades tbody');
let input_buscar = document.querySelector('#txt_buscar');

let mostrar_lista_actividades =() =>{

    let buscar = input_buscar.value;

    tabla.innerHTML='';

    for(let i=0; i<actividades.length; i++){
        if(actividades[i]['actividad'].toLowerCase().includes(buscar.toLowerCase())){
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = actividades[i]['actividad'];

            let celda_configuracion = fila.insertCell();

            //Creación del boton Editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_actividades.html?id_actividad=${actividades[i]['_id']}`;
            
            // `` se pone: ctrl+alt+boton de comillas torcidas (2 veces)
            // sintaxis: html+?+nombre de la variable = jquery + tabla con nueva col
            // nombre de nueva columna viene de Mongo

            celda_configuracion.appendChild(boton_editar);  //boton editar dentro de la celda
        };
    };
};

mostrar_lista_actividades();

input_buscar.addEventListener('keyup', mostrar_lista_actividades);