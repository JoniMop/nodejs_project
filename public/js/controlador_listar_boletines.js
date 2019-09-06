'use strict';


const input_filtro = document.querySelector('#txt_filtro')
let boletines = listar_boletines();



let mostrar_boletines = () => {

    let tbody = document.querySelector('#tbl_boletines tbody');
    let filtro = input_filtro.value;
    tbody.innerHTML = '';
    for (let i = 0; i < boletines.length; i++) {
        if (
            boletines[i]['titulo'].toLowerCase().includes(filtro.toLowerCase()) ||
            boletines[i]['boletin'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = boletines[i]['titulo'];
            fila.insertCell().innerHTML = boletines[i]['boletin'];

            //modificar o editar aqui abajo.
            let celda_configuracion = fila.insertCell();

            //creacion boton para editar. a = enlace. Notar comillas torcidas para el html
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_boletines.html?id_boletin=${boletines[i]['_id']}`;

            
            celda_configuracion.appendChild(boton_editar);


        };

    }

};

mostrar_boletines();
input_filtro.addEventListener('keyup', mostrar_boletines);

