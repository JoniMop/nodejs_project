'use strict';
let mongoose = require('mongoose');

let padreDeFamiliaSchema = new mongoose.Schema({
    pnombre: { type: String, required : true },
    snombre: { type: String, required : false },
    primerApellido: { type: String, required : true },
    segundoApellido: { type: String, required : false},
    cedula : {type : String, required : true, unique : true},
    nacionalidad : { type : String, required : true},
    provincia : { type : String, required : true},
    canton : { type : String, required : true},
    cantidadHijos : { type : String, required : true},
    email : { type : String, required : true},
    telefono : { type : String, required : false},
    password : { type : String, required : true},
    estado : { type : String, required : true} //agregamos el campo de estado para que todos los pf nuevos lo contengan

});

module.exports = mongoose.model('padreDeFamilia', padreDeFamiliaSchema);