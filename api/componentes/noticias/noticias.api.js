'use strict';

const modelo_noticias = require('./noticias.model');

module.exports.registrar = function(req, res){
    let nueva_noticia = new modelo_noticias(
        {
            autor : req.body.autor,
            titulo : req.body.titulo,
            noticia : req.body.noticia,
            
            //estado : 'Activo'
        }
    );
    nueva_noticia.save(
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo registrar la noticia'});
            }else{
                res.json({success: true , msg : 'Noticia se registró con éxito'});
            }
        }
    );
};

module.exports.listar = function(req, res){
    modelo_noticias.find().then(
        function(noticias){
            if(noticias.length > 0){
                res.json({success: true, lista_noticias : noticias});
            }else{
                res.json({success: false, lista_noticias : noticias});
            }
        }

    );
};

















/*module.exports.buscar_por_id = function (req, res){
    modelo_noticias.find({titulo : req.body.titulo}).then(
        function(noticias){
            if(noticias){
                res.json({success: true, noticias : noticias});
            }else{
                res.json({success: false, noticias : noticias});
            }
        }

    );

};

module.exports.actualizar = function(req, res){
   
    modelo_inmueble.findByIdAndUpdate(req.body.titulo, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la noticia'});
            }else{
                res.json({success: true , msg : 'La noticia se actualizó con éxito'});
            }
        }
    
    );
}*/