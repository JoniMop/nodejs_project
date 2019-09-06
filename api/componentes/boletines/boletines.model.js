'use strict';

const mongoose = require('mongoose');

let schema_boletines = mongoose.Schema({
    titulo : {type: String, required : true, unique : true},
    boletin : {type : String, required : false},
    estado : {type : String, required : true}

});

module.exports = mongoose.model('Boletines' , schema_boletines);
