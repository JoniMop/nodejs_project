'use strict';

let etiquetas = listar_etiquetas();
const tabla = document.querySelector('#tbl_etiquetas tbody');
let input_buscar = document.querySelector('#txt_buscar');

let mostrar_lista_etiquetas = () =>{

    let buscar=input_buscar.value;

    tabla.innerHTML='';

    for(let i=0; i < etiquetas.length; i++){
        if(etiquetas[i]['etiqueta'].toLowerCase().includes(buscar.toLowerCase())){
            let fila = tabla.insertRow();

        fila.insertCell().innerHTML = etiquetas[i]['etiqueta'];

        let celda_configuracion = fila.insertCell();

        //Creación del boton Editar
        let boton_editar = document.createElement('a');
        boton_editar.textContent = 'Editar';
        boton_editar.href = `actualizar_etiquetas.html?id_etiqueta=${etiquetas[i]['_id']}`;

        // `` se pone: ctrl+alt+boton de comillas torcidas (2 veces)
            // sintaxis: html+?+nombre de la variable = jquery + tabla con nueva col
            // nombre de nueva columna viene de Mongo

        celda_configuracion.appendChild(boton_editar);    //boton editar dentro de la celda
        };
    }
};

mostrar_lista_etiquetas();

input_buscar.addEventListener('keyup', mostrar_lista_etiquetas);
