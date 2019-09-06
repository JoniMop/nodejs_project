'use strict';

const modelo_actividad = require('./actividades.model');

module.exports.registrar = function(req, res){
    let nueva_actividad = new modelo_actividad({
        actividad : req.body.actividad,
        estado : 'Activo'
    });

    nueva_actividad.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar'});
        }else{
            res.json({success : true, msg: 'Sí se pudo registrar'});
        }
    });
};

module.exports.listar = function(req, res){
    modelo_actividad.find().then(
        function(actividades){
            if(actividades.length > 0){
                res.json({success: true, lista_actividades : actividades}); 
            }else{
                res.json({success: false, lista_actividades : actividades});
            }
        }
    );
};

module.exports.buscar_por_id = function(req, res){
    modelo_actividad.find({_id : req.body.id_actividad}).then(
        function(actividad){
            if(actividad){
                res.json({success: true, actividad : actividad}); 
            }else{
                res.json({success: false, actividad : actividad});
            }
        }
    );
};

module.exports.actualizar = function(req, res){
    modelo_actividad.findByIdAndUpdate(req.body.id, { $set: req.body },
        function(error){
            if(error){
                res.json({success : false, msg: 'No se pudo actualizar'});
            }else{
                res.json({success : true, msg: 'Sí se pudo actualizar'});
            }
        }
    );
}