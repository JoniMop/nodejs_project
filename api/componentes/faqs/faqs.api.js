'use strict';

const faqsModel = require('./faqs.model');


module.exports.registrar = function(req, res){
    let nuevoFaq = new faqsModel ({ 
        pregunta : req.body.pregunta, 
        descripcion : req.body.descripcion, 
        estado : 'Activo'
    });

    nuevoFaq.save(function(error){ 
        if(error){
            res.json({
                success : false, msg: 'No se pudo registrar la pregunta : ' + error 
            });
        }else{
            res.json({
                success : true, msg: 'Pregunta registrada con éxito'
                
            });
        }
    });

};

module.exports.listar = function(req, res){
    faqsModel.find().then(
        function(faqs){
            if(faqs.length > 0){
                res.json({success: true, lista_faqs: faqs }); 
            }else{
                res.json({success: false, lista_faqs: faqs })
            }
        }
    );
};

module.exports.buscar_por_id = function (req, res) {
    faqsModel.find({ _id: req.body.id_faq }).then(
        function (faq) {
            if (faq) {
                res.json({ success: true, faq: faq });
            } else {
                res.json({ success: false, faq: faq });
            }
        }

    );

};


module.exports.actualizar = function (req, res){
    faqsModel.findByIdAndUpdate(req.body.id, { $set: req.body },
        function(error){
            if(error){
                res.json({success: false, msg: 'No se pudo actualizar la pregunta'});
            }else{
                res.json({success: true, msg: 'La pregunta se actualizó con éxito'});
            }
        }
    );
}