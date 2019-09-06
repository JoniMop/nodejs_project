'use strict';

const mongoose = require('mongoose');

let schema_actividades = mongoose.Schema({
    
    actividad : {type : String, required : true},
    estado : {type : String, required : true}
});

module.exports = mongoose.model('Actividad', schema_actividades);