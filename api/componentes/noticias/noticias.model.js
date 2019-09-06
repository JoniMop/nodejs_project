'use strict';

const mongoose = require('mongoose');

let schema_noticias = mongoose.Schema({
    autor : {type : String, required : true},
    titulo : {type: String, required : true, unique : true},
    noticia : {type : String, required : false}
//    estado : {type : String, required : true}

});

module.exports = mongoose.model('Noticias' , schema_noticias);
