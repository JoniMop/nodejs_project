'use strict';


const input_filtro = document.querySelector('#txt_filtro')
let citas = listar_citas();



let mostrar_citas = () => {

    let tbody = document.querySelector('#tbl_citas tbody');
    let filtro = input_filtro.value;
    tbody.innerHTML = '';
    for (let i = 0; i < citas.length; i++) {

        if (citas[i]['primer_nombre'].toLowerCase().includes(filtro.toLowerCase()) ||
            citas[i]['segundo_nombre'].toLowerCase().includes(filtro.toLowerCase()) ||
            citas[i]['primer_apellido'].toLowerCase().includes(filtro.toLowerCase()) ||
            citas[i]['segundo_apellido'].toLowerCase().includes(filtro.toLowerCase()) ||
            citas[i]['fecha_cita'].toLowerCase().includes(filtro.toLowerCase()) ||
            citas[i]['motivo_cita'].toLowerCase().includes(filtro.toLowerCase()) ||
            citas[i]['nombre_completo_del_alumno'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tbody.insertRow();

            fila.insertCell().innerHTML = citas[i]['primer_nombre'];
            fila.insertCell().innerHTML = citas[i]['segundo_nombre'];
            fila.insertCell().innerHTML = citas[i]['primer_apellido'];
            fila.insertCell().innerHTML = citas[i]['segundo_apellido'];
            fila.insertCell().innerHTML = citas[i]['fecha_cita'];
            fila.insertCell().innerHTML = citas[i]['motivo_cita'];
            fila.insertCell().innerHTML = citas[i]['nombre_completo_del_alumno'];



            //modificar o editar aqui abajo.
            let celda_configuracion = fila.insertCell();

            //creacion boton para editar. a = enlace. Notar comillas torcidas para el html
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_citas.html?id_cita=${citas[i]['_id']}`;

            
            celda_configuracion.appendChild(boton_editar);


        };

    }

};

mostrar_citas();
input_filtro.addEventListener('keyup', mostrar_citas);

