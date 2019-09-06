'use stric';

let id_usuario = sessionStorage.getItem('_id');

let usuario = buscar_usuario(id_usuario); //funcion se crea en el servicioCE.js

    document.querySelector('#nombre').textContent = usuario[0]['pnombre']
    document.querySelector('#apellido').textContent = usuario[0]['primerApellido']
    document.querySelector('#nacionalidad').textContent = usuario[0]['nacionalidad']
    document.querySelector('#telefono').textContent = usuario[0]['telefono']
    document.querySelector('#email').textContent = usuario[0]['email']


