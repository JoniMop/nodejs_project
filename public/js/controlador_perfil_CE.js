'use stric';

let id_CE = sessionStorage.getItem('_id');

let centro = buscar_CE(id_CE); //funcion se crea en el servicioCE.js

document.querySelector('#cedula').textContent = centro[0]['cedulaJ']
document.querySelector('#modalidad').textContent = centro[0]['modalidad']
document.querySelector('#nombre').textContent = centro[0]['nombre']
document.querySelector('#direccion').textContent = centro[0]['direccion']
document.querySelector('#telefono').textContent = centro[0]['telefono']

document.querySelector('#nombreC').textContent = centro[0]['nombreC']
document.querySelector('#apellido').textContent = centro[0]['apellido']
document.querySelector('#departamento').textContent = centro[0]['departamento']
document.querySelector('#email').textContent = centro[0]['email']