'use strict';

function registrar_boletin(ptitulo, pboletin){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_boletin',
        method : "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType : 'json',
            async:false,
            data:{
                titulo : ptitulo,
                boletin : pboletin
            }
          });
    

    request.done(function(res){
        respuesta = res;
        });



    request.fail(function(res){
        respuesta = res;
        });


};

let listar_boletines = () => {

    let boletines = [];
  
    let request = $.ajax({
      url: "http://localhost:4000/api/listar_boletines",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
        boletines = res.lista_boletines;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return boletines;
   
  };



////////////////////////////////////
//buscar es muy similar a listar
let buscar_boletin = (id_boletin) => {
    let boletin = [];
  
    let request = $.ajax({
      url: "http://localhost:4000/api/buscar_boletin/"+ id_boletin,
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
        boletin = res.boletin;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return boletin;
   
  };

//actualizar es muy similar al de registrar
let actualizar_boletin = (ptitulo, pboletin, pid) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/actualizar_boletin',
        method : "POST",
        async:false,
        data : {
            titulo : ptitulo,
            boletin : pboletin,
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






















