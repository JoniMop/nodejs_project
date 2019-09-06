'use strict';

const modelo_etiquetas = require('./etiquetas.model');

module.exports.registrar = function (req, res){
    let nueva_etiqueta = new modelo_etiquetas({
        etiqueta : req.body.etiqueta,
        estado : 'Activo'
    });

    nueva_etiqueta.save(
        function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar'});
        }else{
            res.json({success : true, msg : 'Etiqueta registrada'});
        }
    });
};

module.exports.listar = function(req, res){
    modelo_etiquetas.find().then(
        function(etiquetas){
            if(etiquetas.length>0){
                res.json({success: true, lista_etiquetas: etiquetas});
            }else{
                res.json({success: false, lista_etiquetas: etiquetas});
            }
        }
    );
};

module.exports.buscar_por_id = function(req, res){
    modelo_etiquetas.find({_id : req.body.id_etiqueta}).then(
        function(etiqueta){
            if(etiqueta){
                res.json({success: true, etiqueta : etiqueta}); 
            }else{
                res.json({success: false, etiqueta : etiqueta});
            }
        }
    );
};

module.exports.actualizar = function(req, res){
    modelo_etiquetas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function(error){
            if(error){
                res.json({success : false, msg: 'No se pudo actualizar'});
            }else{
                res.json({success : true, msg: 'Sí se pudo actualizar'});
            }
        }
    );
}