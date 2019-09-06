'use strict';

const boton_registrar = document.querySelector('#btn_registrar');
const input_tipo = document.querySelector('#txt_tipo');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_descripcion = document.querySelector('#txt_descripcion');

function obtener_datos(){
    let tipo = input_tipo.value;
    let cantidad= input_cantidad.value;
    let descripcion= input_descripcion.value;

    let bError=validar_datos();

    if(bError==false){
        registrar_utiles(tipo, cantidad, descripcion);
        
        swal.fire({
            type: 'success',
            title: 'Información ingresada',
            text: 'Se ha registrado la información de forma exitosa'
        });
    }else{
        swal.fire({
            type: 'warning',
            title: 'Información pendiente de ingresar',
            text: 'Por favor revise los campos resaltados'
        });
    };
};

boton_registrar.addEventListener('click', obtener_datos);

function validar_datos(){
    let bError=false;

    if(input_tipo.value==''){
        bError=true;
        input_tipo.classList.add('input_error');
    }else{
        input_tipo.classList.remove('input_error');
    }

    if(input_cantidad.value==''){
        bError=true;
        input_cantidad.classList.add('input_error');
    }else{
        input_cantidad.classList.remove('input_error');
    }

    if(input_descripcion.value==''){
        bError=true;
        input_descripcion.classList.add('input_error');
    }else{
        input_descripcion.classList.remove('input_error');
    }
    return bError;
};