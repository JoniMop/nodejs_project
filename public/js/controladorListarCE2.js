'use strict';

const inputFiltrar = document.querySelector('#txtFiltro');
let listaCE = listar_CE();

mostrarCE();

inputFiltrar.addEventListener('keyup', mostrarCE);

function mostrarCE(){
    
    let filtro = inputFiltrar.value;

    let tbody = document.querySelector('#tblCentrosEducativos tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaCE.length; i++){
        if(listaCE[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();
            
            let celdaModalidad = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaProvincia = fila.insertCell();
            let celdaCanton = fila.insertCell();
            let celdaDireccion = fila.insertCell();
            let celdaTelefono = fila.insertCell();
            let celdaWeb = fila.insertCell();
            
            celdaModalidad.innerHTML = listaCE[i]['modalidad'];
            celdaNombre.innerHTML = listaCE[i]['nombre'];
            celdaProvincia.innerHTML = listaCE[i]['provincia'];
            celdaCanton.innerHTML = listaCE[i]['canton'];
            celdaDireccion.innerHTML = listaCE[i]['direccion'];
            celdaTelefono.innerHTML = listaCE[i]['telefono'];
            celdaWeb.innerHTML = listaCE[i]['web'];

            //fila de configuración
            let celda_configuracion = fila.insertCell();
            // //creación del boton de editar
            // let boton_editar = document.createElement('a');
            // boton_editar.textContent = 'Editar';
            // boton_editar.href = `actualizar_CE.html?id_CE=${listaCE[i]['_id']}`; //el id_CE lo nombramos a gusto el '_id' es de Mongoose
            // celda_configuracion.appendChild(boton_editar);
            
            //BOTON DESACTIVAR
            let boton_desactivar = document.createElement('a');
            boton_desactivar.textContent = ' Desactivar';
            boton_desactivar.dataset.id_CE = listaCE[i]['_id'];
            boton_desactivar.href = '#';
            celda_configuracion.appendChild(boton_desactivar);

            boton_desactivar.addEventListener('click', function(){
                //console.log(this.dataset.id_CE);
                desactivar(this.dataset.id_CE);
            });

            //BOTON ACTIVAR
            let boton_activar = document.createElement('a');
            boton_activar.textContent = ' Activar';
            boton_activar.dataset.id_CE = listaCE[i]['_id'];
            boton_activar.href = '#';
            celda_configuracion.appendChild(boton_activar);

            boton_activar.addEventListener('click', function (){
                //console.log(this.dataset.id_CE);
                activar(this.dataset.id_CE);
            });

            
            
           

            
        }
    };
};

