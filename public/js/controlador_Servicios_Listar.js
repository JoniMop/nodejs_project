'use strict';

let inputBuscarServicios = document.querySelector('#txtBuscarServicios');
let servicios = listar_servicios();

mostrar_datos();
inputBuscarServicios.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {


    let tbody = document.querySelector('#tblServicios tbody');
    let sBuscarServicios = inputBuscarServicios.value;
    tbody.innerHTML = '';

    for (let i = 0; i < servicios.length; i++) {
        if (servicios[i]['nombre'].toLowerCase().includes(sBuscarServicios.toLowerCase())) {

            let fila = tbody.insertRow();

            let celdaNombre = fila.insertCell();
            let celdaDetalle = fila.insertCell();



            celdaNombre.innerHTML = servicios[i]['nombre'];
            celdaDetalle.innerHTML = servicios[i]['detalle'];

            let celda_configuracion = fila.insertCell();

            
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_servicios.html?id_servicio=${servicios[i]['_id']}`;

            celda_configuracion.appendChild(boton_editar);

        };

    };

};

