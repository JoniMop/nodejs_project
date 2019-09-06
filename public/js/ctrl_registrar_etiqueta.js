'use strict';

const boton_registrar = document.querySelector('#btn_registrar');
const input_etiqueta = document.querySelector('#txt_etiqueta');

function obtener_datos(){

    let etiqueta = input_etiqueta.value;

    let bError=validar_datos();

    if(bError==false){
        registrar_etiqueta(etiqueta);

    }else{
        swal.fire({
            type: 'warning',
            title: 'Etiqueta no fue registrada',
            text: 'Revise el espacio marcado'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos);

function validar_datos(){
    let bError=false;

    if(input_etiqueta.value==''){
        bError=true;
        input_etiqueta.classList.add('input_error');
    }else{
        input_etiqueta.classList.remove('input_error');
    }

    return bError;
};