'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
let inputPregunta = document.querySelector('#txtPregunta');
let inputDescripcion = document.querySelector('#txtDescripcion');

botonRegistrar.addEventListener('click', obtenerDatosFaqs);

 

function obtenerDatosFaqs(){

    let sPregunta = inputPregunta.value;
    let sDescripcion =inputDescripcion.value;

    let bError = validarDatosFaqs();

    if(bError==false){
        registrarFaqs(sPregunta, sDescripcion);       

        swal.fire ({
            type: 'success',
            title: 'Pregunta ingresada',
            text: 'Se ha ingresado la pregunta de forma exitosa',
            onClose: () => {
                window.location.href = 'dash_Mep.html';
            }
        });

        inputPregunta.value = "";
        inputDescripcion.value = "";

    }else{
        swal.fire ({
            type: 'warning',
            title: 'Pregunta no ingresada',
            text: 'No se pudo registrar la pregunta'
        });
    };

};

function validarDatosFaqs(){
    let bError=false;       

    if(inputPregunta.value==''){
        bError=true;
        inputPregunta.classList.add('input_error');
    }else{
        inputPregunta.classList.remove('input_error');
    }

    if(inputDescripcion.value==''){
        bError=true;
        inputDescripcion.classList.add('input_error');
    }else{
        inputDescripcion.classList.remove('input_error');
    }

    return bError;
};