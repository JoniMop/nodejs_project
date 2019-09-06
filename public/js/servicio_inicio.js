'use strict';

function validar_credenciales_PF(pemail, pcontrasenna){
    let respuesta = '';
    let peticion = $.ajax({
      url: 'http://localhost:4000/api/validar_credenciales_pf',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
          email : pemail,
          password : pcontrasenna
        }
      });
    
      peticion.done(function(response){
        respuesta = response;
        sessionStorage.setItem('conectado', response.success);
       
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

     return respuesta; 
};

function validar_credenciales_ce(pemail, pcontrasenna) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/validar_credenciales_ce',
    method: 'POST',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      email: pemail,
      password: pcontrasenna
    }
  });

  peticion.done(function (response) {
    respuesta = response;
    sessionStorage.setItem('conectado', response.success);
  
  });

  peticion.fail(function (response) {
    respuesta = response;
  });

  return respuesta;
};

function validar_credenciales_admin(pemail, pcontrasenna) {
  let respuesta = '';
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/validar_credenciales_admin',
    method: 'POST',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType: 'json',
    async: false,
    data: {
      email: pemail,
      password: pcontrasenna
    }
  });

  peticion.done(function (response) {
    respuesta = response;
    sessionStorage.setItem('conectado', response.success);
    //sessionStorage.setItem('tipo_usuario', response.usuario.tipo); //estoy tratando de guardar el tipo de usuario 

  });

  peticion.fail(function (response) {
    respuesta = response;
  });

  return respuesta;
};