'use strict';

const mongoose = require('mongoose');

let schema_etiquetas = mongoose.Schema({
    
    etiqueta : {type : String, required : true},    //cuando se pruebe que funciona, también poner unique : true
    estado : {type : String, required : true}
});

module.exports = mongoose.model('Etiquetas', schema_etiquetas);