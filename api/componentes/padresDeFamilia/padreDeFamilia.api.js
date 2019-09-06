'use strict';

const nodeMailer = require('nodemailer');
const padreDeFamiliaModel = require('./padreDeFamilia.model');

const transporter = nodeMailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'verificacionthundercats@gmail.com',
        pass: 'verificacion123'
    }
});

module.exports.registrar = function(req, res) {

    let nuevoPadreDeFamilia = new padreDeFamiliaModel({
        pnombre : req.body.pnombre,
        snombre : req.body.snombre,
        primerApellido : req.body.primerApellido,
        segundoApellido : req.body.segundoApellido,
        cedula : req.body.cedula,
        nacionalidad : req.body.nacionalidad,
        provincia : req.body.provincia,
        canton : req.body.canton,
        cantidadHijos : req.body.cantidadHijos,
        email : req.body.email,
        telefono : req.body.telefono,
        password : req.body.password,
        estado : 'Activo'
    });

    nuevoPadreDeFamilia.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el usuario, surgió el siguiente error' + error});
        }else{
            let mailOptions = {
                from : 'proyectovirtualthundercats@gmail.com',
                to : nuevoPadreDeFamilia.email,
                subject : 'Bienvenido al sistema del Ministerio de Educación Pública',
                html :  `<html>
                <head>
                    <meta charset="UTF-8">
                    <link rel="stylesheet" href="css/reset.css">
                </head>
                <body>
                    <H1>Bienvenido ${nuevoPadreDeFamilia.pnombre} al Sistema del Ministerio de Educación Pública</H1>
                    <div class="info">
                        <h2>Información personal</h2>
                        <p>Primer nombre: ${nuevoPadreDeFamilia.pnombre} </p>
                        <p>Segundo nombre: ${nuevoPadreDeFamilia.snombre} </p>
                        <p>Primer apellido: ${nuevoPadreDeFamilia.primerApellido} </p>
                        <p>Segundo apellido: ${nuevoPadreDeFamilia.segundoApellido} </p>
                        <p>Cédula: ${nuevoPadreDeFamilia.cedula} </p>
                        <p>Nacionalidad: ${nuevoPadreDeFamilia.nacionalidad} </p>
                        <p>Provincia: ${nuevoPadreDeFamilia.provincia} </p>
                        <p>Cantón: ${nuevoPadreDeFamilia.canton} </p>
                        <p>Correo: ${nuevoPadreDeFamilia.email} </p>
                        <p>Teléfono: ${nuevoPadreDeFamilia.telefono} </p>
                        <p>Contraseña: ${nuevoPadreDeFamilia.password} </p>
                        <a href="http://localhost:3000/public/inicio_sesion.html">Para iniciar sesión ingrese aquí</a>
                    </div>
                </body>
                <style>
                    body{ 
                        background-color: #F8F8FF;
                            
                    }
                    h1{
                        margin-top: 80px;
                        margin-bottom: 40px;
                        margin-left: 150px;
                        font-size: 40px;
                        font-family: Arial, Helvetica, sans-serif;
                        font-style: italic;
                    }
                    h2{
                        font-size: 35px;
                        margin-bottom: 15px;
                    }
                    .info{
                        margin-top: 20px;
                        margin-left: 150px;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    p{
                        margin-bottom: 10px;
                        font-size: 20px;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                    
                    
                </style>
            </html>`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else {
                    console.log('Correo enviado'+info.response);
                }
            });
            res.json({success : true, msg: 'El usuario se registró con éxito'});
        }
    });
};


/*Funciones para inicio de Sesion de Tatiana*/
module.exports.validar = function(req, res){
    padreDeFamiliaModel.findOne({email: req.body.email}).then(
        function(usuario){
            if(usuario){
               if(usuario.password == req.body.password){
                   res.json({
                       success: true,
                       usuario : usuario
                   });
               }else{
                   res.json({
                       success: false
                   });
               }
            }else{
               res.json({
                   success: false,
                   msg : 'El usuario no existe'
               });
            }
        }
    )
};

//Funcion de buscar por id
module.exports.buscar_por_id = function (req, res) {
    console.log(req.body.id_usuario);
    padreDeFamiliaModel.find({_id : req.body.id_usuario}).then(
        function (usuario) {
            if (usuario) {
                res.json({ success: true, usuario: usuario });
            }
            else {
                res.json({ success: false, usuario: usuario });

            }
        }
    );

};







