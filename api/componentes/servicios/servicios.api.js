'use strict';

const serviciosModel = require('./servicios.model');


module.exports.registrar = function(req, res){
    let nuevoServicio = new serviciosModel ({
        nombre : req.body.nombre,
        detalle : req.body.detalle,
        estado : 'Activo'
    });

    nuevoServicio.save(function(error){
        if(error){
            res.json({
                success : false, msg: 'No se pudo registrar el servicio : ' + error 
            });
        }else{
            res.json({
                success : true, msg: 'Servicio registrado con éxito'
                
            });
        }
    });

};

module.exports.listar = function(req, res){
    serviciosModel.find().then(
        function(servicios){
            if(servicios.length > 0){
                res.json({success: true, lista_servicios: servicios });
            }else{
                res.json({success: false, lista_servicios: servicios })
            }
        }
    );
};

module.exports.buscar_por_id = function (req, res) {
    serviciosModel.find({ _id: req.body.id_servicio }).then(
        function (servicio) {
            if (servicio) {
                res.json({ success: true, servicio: servicio });
            } else {
                res.json({ success: false, servicio: servicio });
            }
        }

    );

};

module.exports.actualizar = function (req, res){
    serviciosModel.findByIdAndUpdate(req.body.id, { $set: req.body },
        function(error){
            if(error){
                res.json({success: false, msg: 'No se pudo actualizar el servicio'});
            }else{
                res.json({success: true, msg: 'El servicio se actualizó con éxito'});
            }
        }
    );
}