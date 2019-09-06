'use strict';
let mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, requiered: true },
    nombre: { type: String, required: true }

});

module.exports = mongoose.model('admin', adminSchema);