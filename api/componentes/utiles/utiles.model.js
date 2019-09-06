'use strict';

const mongoose = require('mongoose');

let schema_utiles = mongoose.Schema({

    tipo : {type: String, required: true},  //una vez probado, ponerle también unique: true
    cantidad : {type: Number, required: true},
    descripcion : {type: String, required: true},
    estado : {type : String, required : true}
});

module.exports = mongoose.model('utiles', schema_utiles);