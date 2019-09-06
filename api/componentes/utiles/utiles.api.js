'use strict';

const modelo_utiles = require('./utiles.model');

module.exports.registrar = function(req, res){
    let nuevos_utiles = new modelo_utiles({
        tipo: req.body.tipo,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,
        estado: 'Activo'
    });
    nuevos_utiles.save(
        function(error){
            if(error){
                res.json({success: false, msg: 'No se pudo registrar'});
            }else{
                res.json({success: true, msg: 'Se pudo registrar con éxito'});
            }
        }
    );
};

module.exports.listar = function (req, res){
    modelo_utiles.find().then(
        function(utiles){
            if(utiles.length>0){
                res.json ({success: true, lista_utiles: utiles});
            }else{
                res.json({success: false, lista_utiles: utiles});
            }
        }
    );
};

module.exports.buscar_por_id = function (req, res){
    modelo_utiles.find({_id : req.body.id_util}).then(
        function(util){
            if(util){
                res.json ({success: true, util: util});
            }else{
                res.json({success: false, util : util});
            }
        }
    );
};

module.exports.actualizar = function (req, res){
    modelo_utiles.findByIdAndUpdate(req.body.id, { $set: req.body },
        function(error){
            if(error){
                res.json({success: false, msg: 'No se pudo actualizar'});
            }else{
                res.json({success: true, msg: 'Se pudo actualizar con éxito'});
            }
        }
    );
}