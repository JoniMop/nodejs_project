'use strict';

const boton_registrar = document.querySelector('#btn_registrar');
const input_actividad = document.querySelector('#txt_actividad');

function obtener_datos(){

    let actividad = input_actividad.value;
    let b_error=validar_datos();
    
    if(b_error==false){
        registrar_actividad(actividad);
    }else{
        swal.fire({
            type: 'warning',
            title: 'Actividad no se ha registrado',
            text: 'Revise el campo marcado'
        });
    };
};

boton_registrar.addEventListener('click', obtener_datos);

function validar_datos(){

    let b_error=false;

    if(input_actividad.value==''){
        b_error=true;
        input_actividad.classList.add('input_error');
    }else{
        input_actividad.classList.remove('input_error');
    }

    return b_error;
};