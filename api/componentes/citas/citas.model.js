'use strict';

const mongoose = require('mongoose');

let schema_citas = mongoose.Schema({
    primer_nombre : {type : String, required : true},
    segundo_nombre: {type: String, required : false, unique : false},
    primer_apellido : {type : String, required : true},
    segundo_apellido : {type : String, required : false},
    fecha_cita : {type : String, required : true},
    motivo_cita : {type : String, required : true},
    nombre_completo_del_alumno : {type : String, required : false},
    estado : {type : String, required : true}
});

module.exports = mongoose.model('Citas' , schema_citas);
