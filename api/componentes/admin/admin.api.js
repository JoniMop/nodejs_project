'use strict';

const AdminModel = require('./admin.model');

/*Funciones para inicio de Sesion de Tatiana*/
module.exports.validar = function (req, res) {
    //console.log('soy el correo: ' + req.body.email);
    AdminModel.findOne({ email: req.body.email }).then(
        function (usuario) {
            //console.log('soy el usuario: ' + usuario);
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