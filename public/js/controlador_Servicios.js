'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputNombre = document.querySelector('#txtNombre');
let inputDetalle = document.querySelector('#txtDetalle');

botonRegistrar.addEventListener('click', obtenerDatosServicios);


 

function obtenerDatosServicios(){

    let sNombre = inputNombre.value;
    let sDetalle =inputDetalle.value;

    let bError = validarDatosServicios();

    if(bError==false){
        registrarServicios(sNombre, sDetalle);       

        swal.fire ({
            type: 'success',
            title: 'Servicio ingresado',
            text: 'Se ha ingresado el servicio de forma exitosa',
            onClose: () => {
                window.location.href = 'dash_Mep.html';
            }
        });
        inputNombre.value = "";
        inputDetalle.value = "";
    }else{
        swal.fire ({
            type: 'warning',
            title: 'Servicio no ingresado',
            text: 'No se pudo registrar el servicio'
        });
    };

};

function validarDatosServicios(){
    let bError=false;       

    if(inputNombre.value==''){
        bError=true;
        inputNombre.classList.add('input_error');
    }else{
        inputNombre.classList.remove('input_error');
    }

    if(inputDetalle.value==''){
        bError=true;
        inputDetalle.classList.add('input_error');
    }else{
        inputDetalle.classList.remove('input_error');
    }

    return bError;
};