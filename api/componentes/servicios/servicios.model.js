'use strict';

const mongoose = require('mongoose');

let serviciosSchema = mongoose.Schema({
    nombre : {type : String, required : true},
    detalle : {type: String, required : true},
    estado : {type : String, required : true}
    
});



module.exports = mongoose.model('Servicios' , serviciosSchema);

