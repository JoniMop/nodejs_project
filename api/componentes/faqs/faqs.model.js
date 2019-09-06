'use strict';

const mongoose = require('mongoose');

let faqsSchema = mongoose.Schema({
    pregunta : {type : String, required : true},
    descripcion : {type: String, required : true},
    estado : {type : String, required : true}
    
});



module.exports = mongoose.model('FAQs' , faqsSchema); 

