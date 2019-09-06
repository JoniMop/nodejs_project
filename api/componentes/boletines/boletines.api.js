'use strict';

const modelo_boletines = require('./boletines.model');

module.exports.registrar = function(req, res){
    let nuevo_boletin = new modelo_boletines(
        {
            titulo : req.body.titulo,
            boletin : req.body.boletin,
            estado : 'Activo'
            
        }
    );
    nuevo_boletin.save(
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo registrar el boletín'});
            }else{
                res.json({success: true , msg : 'Boletín se registró con éxito'});
            }
        }
    );
};

module.exports.listar = function(req, res){
    modelo_boletines.find().then(
        function(boletines){
            if(boletines.length > 0){
                res.json({success: true, lista_boletines : boletines});
            }else{
                res.json({success: false, lista_boletines : boletines});
            }
        }

    );
};

module.exports.buscar_por_id = function (req, res){
    modelo_boletines.find({_id : req.body.id_boletin}).then(
        function(boletin){
            if(boletin){
                res.json({success: true, boletin : boletin});
            }else{
                res.json({success: false, boletin : boletin});
            }
        }

    );

};

module.exports.actualizar = function(req, res){
   console.log(req.body.id);
    modelo_boletines.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el boletín'});
            }else{
                res.json({success: true , msg : 'Boletín se actualizó con éxito'});
            }
        }
    
    );
}















