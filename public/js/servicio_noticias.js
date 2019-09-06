'use strict';

function registrar_noticia(pautor, ptitulo, pnoticia){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_noticia',
        method : "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType : 'json',
            async:false,
            data:{
                autor : pautor,
                titulo : ptitulo,
                noticia : pnoticia

            }
          });
    

    request.done(function(res){
        respuesta = res;
        });



    request.fail(function(res){
        respuesta = res;
        });


};

let listar_noticias = () => {

    let noticias = [];
  
    let request = $.ajax({
      url: "http://localhost:4000/api/listar_noticias",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
        noticias = res.lista_noticias;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return noticias;
   
  };


////////////////////////////////////
//buscar es muy similar a listar
let buscar_noticia = (id_noticia) => {
    let noticia = [];
  
    let request = $.ajax({
      url: "http://localhost:4000/api/buscar_noticia/"+ id_noticia,
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
        noticia = res.noticia;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return noticia;
   
  };

//actualizar es muy similar al de registrar
let actualizar_noticia = (pautor, ptitulo, pnoticia, pid) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/actualizar_noticia',
        method : "POST",
        async:false,
        data : {
            autor : pautor,
            titulo : ptitulo,
            noticia : pnoticia,
            id : pid
            
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        swal.fire({
            type : 'success',
            title : 'Proceso realizado con éxito',
            text : res.msg
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });

    });

};



function desactivar(pid){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/desactivar_noticia',
        method : "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType : 'json',
            async:false,
            data:{
                id : pid

            }
          });
    

    request.done(function(res){
        respuesta = res;
        });



    request.fail(function(res){
        respuesta = res;
        });
};

function activar(pid){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/activar_noticia',
        method : "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType : 'json',
            async:false,
            data:{
                id : pid

            }
          });
    

    request.done(function(res){
        respuesta = res;
        });



    request.fail(function(res){
        respuesta = res;
        });


};



function eliminar(pid){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/eliminar_noticia',
        method : "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType : 'json',
            async:false,
            data:{
                id : pid

            }
          });
    

    request.done(function(res){
        respuesta = res;
        });



    request.fail(function(res){
        respuesta = res;
        });


};












