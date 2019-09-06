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
        if(listaCE[i]['canton'].toLowerCase().includes(filtro.toLowerCase())){
            
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

        
 
        }
    
    };
};