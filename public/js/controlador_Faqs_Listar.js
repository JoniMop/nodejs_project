'use strict';

let inputBuscarFaqs = document.querySelector('#txtBuscarFaqs');
let faqs = listar_faqs();

mostrar_datos();
inputBuscarFaqs.addEventListener('keyup', mostrar_datos);

function mostrar_datos() {


    let tbody = document.querySelector('#tblFaqs tbody');
    let sBuscarFaqs = inputBuscarFaqs.value;
    tbody.innerHTML = '';

    for (let i = 0; i < faqs.length; i++) {
        if (faqs[i]['pregunta'].toLowerCase().includes(sBuscarFaqs.toLowerCase())) {

            let fila = tbody.insertRow();

            let celdaPregunta = fila.insertCell();
            let celdaDescripcion = fila.insertCell();



            celdaPregunta.innerHTML = faqs[i]['pregunta'];
            celdaDescripcion.innerHTML = faqs[i]['descripcion'];

            let celda_configuracion = fila.insertCell();

            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_faqs.html?id_faq=${faqs[i]['_id']}`;

            celda_configuracion.appendChild(boton_editar);

        };

    };

};

