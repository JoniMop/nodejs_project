'use strict';

const CEModel = require('./CE.model');

module.exports.registrar = function (req, res) {

    let nuevoCE = new CEModel({
        cedulaJ: req.body.cedulaJ,
        modalidad: req.body.modalidad,
        nombre: req.body.nombre,
        provincia: req.body.provincia,
        canton: req.body.canton,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        fax: req.body.fax,
        web: req.body.web,
        nombreC: req.body.nombreC,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        departamento: req.body.departamento,
        telefonoC: req.body.telefonoC,
        email: req.body.email,
        password: req.body.password,
        estado : 'Inactivo'
    });

    nuevoCE.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el centro educativo, surgió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El centro educativo se registró con éxito' });
        }

    });
};

module.exports.listar = function (req, res) {
    CEModel.find().then(
        function (CE) {
            if (CE.length > 0) {
                res.json({ success: true, lista_CE: CE });
            }
            else {
                res.json({ success: false, lista_CE: CE });

            }
        }
    );

};


//Funcion de buscar por id
module.exports.buscar_por_id = function (req, res) {
    console.log(req.body.id_CE);
    CEModel.find({_id : req.body.id_CE}).then(
        function (CE) {
            if (CE) {
                res.json({ success: true, CE: CE });
            }
            else {
                res.json({ success: false, CE: CE });

            }
        }
    );

};


//Funcion de actualizar CE
module.exports.actualizar = function(req, res){
    CEModel.findByIdAndUpdate(req.body.id, {$set: req.body}, //el id proviene del servicioCE.js 
        function(error){
            if(error){
                res.json({success: false, msg: 'No se pudo actualizar el centro educativo'});
            }else{
                res.json({ success: true, msg: 'Se actualizaron los datos exitosamente' });
            }
        }
        
    );
}


//FUNCION PARA DESACTIVAR CE
// module.exports.desactivar = function(req, res){
//     CEModel.findByIdAndUpdate(req.body.id, {$set: {
//         estado: 'Inactivo'
//     }},
    
//     function(error){
//         if (error) {
//             res.json({ success: false, msg: 'No se pudo desactivar el centro educativo' });
//         }else {
//             res.json({ success: true, msg: 'Se desactivo centro educativo exitosamente' });
//             }
//         }
//     )
// };


//FUNCION PARA DESACTIVAR CE
module.exports.desactivar = function (req, res) {
    CEModel.findByIdAndUpdate(req.body.id, {
        $set: {
            estado: 'Inactivo'
        }
    },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo desactivar el centro educativo ' });
            } else {
                res.json({ success: true, msg: 'Se desactivo centro educativo exitosamente' });
            }
        }
    )
};

//FUNCION PARA ACTIVAR CE
module.exports.activar = function (req, res) {
    CEModel.findByIdAndUpdate(req.body.id, {
        $set: {
            estado: 'Activo'
        }
    },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo activar el centro educativo ' });
            } else {
                res.json({ success: true, msg: 'Se activo centro educativo exitosamente' });
            }
        }
    )
};



/*Funciones para inicio de Sesion de Tatiana*/
module.exports.validar = function (req, res) {
    console.log('soy el correo: ' + req.body.email);
    CEModel.findOne({ email: req.body.email }).then(
        function (usuario) {
            console.log('soy el usuario: ' + usuario);
            if (usuario) {
                if (usuario.password == req.body.password) {

                    res.json({
                        success: true,
                        usuario: usuario
                    });
                } else {
                    res.json({
                        success: false
                    });
                }
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no existe'
                });
            }
        }
    )
};










/*'use strict';

const CEModel = require('./CE.model');

module.exports.registrar_CE = function(req, res) {

    let nuevoCE = new CEModel({
        cedulaJ : req.body.cedulaJ,
        modalidad : req.body.modalidad,
        nombre : req.body.nombre,
        provincia : req.body.provincia,
        canton : req.body.canton,
        direccion : req.body.direccion,
        telefono : req.body.telefono,
        fax : req.body.fax,
        web : req.body.web,
        nombreC : req.body.nombreC,
        apellido : req.body.apellido,
        cedula : req.body.cedula,
        departamento : req.body.departamento,
        telefonoC : req.body.telefonoC,
        email : req.body.email,
        password : req.body.password
    });

    nuevoCE.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el centro educativo, surgió el siguiente error' + error});
        }else{
            res.json({success : true, msg: 'El centro educativo se registró con éxito'});
        }

    });
};

module.exports.listar_CE = function(req, res) {
    CEModel.find().then(
        function(CE){
            if(CE.length > 0){
                res.json({ success : true, lista_CE : CE});
            }
            else { res.json({ success : false, lista_CE : CE});

            }
        }
    );

};
*/



