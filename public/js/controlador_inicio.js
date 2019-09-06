'use strict';

const inputIdentificacion = document.querySelector('#txtIdentificacion');
const inputContrasenna = document.querySelector('#txtContrasenna');
const botonIngresar = document.querySelector('#btnIngresar');

function obtenerDatos(){
    let identificacion = inputIdentificacion.value;
    let contrasenna = inputContrasenna.value;

    let errorBlancos = validar(identificacion, contrasenna);
    let usuarioAceptado = false;

    if(!errorBlancos){
        usuarioAceptado = validar_credenciales_PF(identificacion, contrasenna);
        if (usuarioAceptado.success == true){
            sessionStorage.setItem('tipo_usuario', 'pf');
            sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario['pnombre']); //esto guarda el nombre de usuario conectandose
            sessionStorage.setItem('_id', usuarioAceptado.usuario['_id']);
            window.location.href = 'dash_usuario_PF.html';            
        }else{
            usuarioAceptado = validar_credenciales_ce(identificacion, contrasenna);
            if (usuarioAceptado.success == true){
                sessionStorage.setItem('tipo_usuario', 'ce');
                sessionStorage.setItem('nombre_usuario', usuarioAceptado.usuario['nombre']); //esto guarda el nombre de usuario conectandose
                sessionStorage.setItem('_id', usuarioAceptado.usuario['_id']); // esto guarda el id unico de mongoose 
                window.location.href = 'dash_CE.html';
            }else{
                // usuarioAceptado = validar_credenciales_admin(identificacion, contrasenna); (usuarioAceptado.success == true)
                if (identificacion == 'admin@mep.ac.cr' && contrasenna == 'admin123'){
                    sessionStorage.setItem('tipo_usuario', 'admin');
                    window.location.href = 'dash_Mep.html';
                }else{
                    swal.fire({
                        type: 'warning',
                        buttonsStyling: false,
                        customClass: {
                            title: 'title-class',
                            confirmButton: 'confirm-button-class'
                        },
                        title: 'No se pudo iniciar sesión.',
                        text: 'Correo o contraseña inválidos, por favor verifique los datos.'
                    });
                } 
                
            }
            
        }
        
    }
};

function validar(pidentificacion, pcontrasenna){
    let error = false;

    if(pidentificacion == ''){
        error = true;
        inputIdentificacion.classList.add('error_input');
    }else{
        inputIdentificacion.classList.remove('error_input');
    }

    if(pcontrasenna == ''){
        error = true;
        inputContrasenna.classList.add('error_input'); //error input - esta definido en el archivo resaltar.css, aca se pone el borde en rojo
    }else{
        inputContrasenna.classList.remove('error_input'); // aca elimina el border rojo
    }

    return error;
};

botonIngresar.addEventListener('click', obtenerDatos);
