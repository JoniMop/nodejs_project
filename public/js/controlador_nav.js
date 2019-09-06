'use strict';

const enlaces = document.querySelectorAll('#nav_principal a');
const botonCerrarSesion = document.querySelector('#btnCerrarSesion')

let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipo_usuario');


if(conectado){
    switch(tipoUsuario){
        case 'admin':
            enlaces[0].classList.add('ocultar');
            //enlaces[1].classList.add('ocultar');
            enlaces[2].classList.add('ocultar');
            enlaces[3].classList.add('ocultar');
            //enlaces[4].classList.add('ocultar');
            enlaces[5].classList.add('ocultar');
            enlaces[6].classList.add('ocultar');
            enlaces[7].classList.add('ocultar');
            //enlaces[8].classList.add('ocultar');  
        break;
        case 'pf':
            enlaces[0].classList.add('ocultar');
            enlaces[1].classList.add('ocultar');
            // enlaces[2].classList.add('ocultar');
            enlaces[3].classList.add('ocultar');
            enlaces[4].classList.add('ocultar');
            // enlaces[5].classList.add('ocultar');
            enlaces[6].classList.add('ocultar');
            enlaces[7].classList.add('ocultar');
            // enlaces[8].classList.add('ocultar');   
        break;
        case 'ce':
            enlaces[0].classList.add('ocultar');
            enlaces[1].classList.add('ocultar');
            enlaces[2].classList.add('ocultar');
            // enlaces[3].classList.add('ocultar');
            enlaces[4].classList.add('ocultar');
            enlaces[5].classList.add('ocultar');
            // enlaces[6].classList.add('ocultar');
            enlaces[7].classList.add('ocultar');
            // enlaces[8].classList.add('ocultar');
        break;

        default:
            enlaces[0].classList.add('ocultar');
            enlaces[1].classList.add('ocultar');
            enlaces[2].classList.add('ocultar');
            enlaces[3].classList.add('ocultar');
            enlaces[4].classList.add('ocultar');
            enlaces[5].classList.add('ocultar');
            enlaces[6].classList.add('ocultar');
            // enlaces[7].classList.add('ocultar');
            enlaces[8].classList.add('ocultar');
        break;
    }

}else{
    window.location.href = 'home.html';
}

function cerrar_sesion(){
    sessionStorage.clear();
    window.location.href = 'home.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);
