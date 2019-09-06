'use strict';
let mongoose = require('mongoose');

let CESchema = new mongoose.Schema({
    cedulaJ : { type: String, required : true, unique : true },
    modalidad : { type: String, required : true },
    nombre : { type: String, required : true },
    provincia : { type: String, required : true },
    canton : {type : String, required : true },
    direccion : { type : String, required : true },
    telefono : { type : String, required : true },
    fax : { type : String, required : false },
    web : { type : String, required : false },
    nombreC : { type : String, required : true },
    apellido : { type : String, requiered : true },
    cedula : { type : String, required : true },
    departamento : { type : String, requiered : true },
    telefonoC : { type : String, required : true },
    email : { type : String, required : true },
    password : { type : String, requiered : true },
    estado : { type : String, required : true} //agregamos el campo de estado para que todos los CE nuevos lo contengan

});

module.exports = mongoose.model('CE', CESchema);