//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//libreria para validar que un campo debe ser unico, la propiedad unique ya puede ser usada
const uniqueValidator = require('mongoose-unique-validator');


const prospectoSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre obligatorio']},
    email: {type: String, required:[true, 'Correo obligatorio'], unique: true},
    telefono: {type: String, default: 'Sin numero registrado'},
    date: {type: Date, default: Date.now},
    camp: {type: String, default: 'sin campaña'}
});
// validar el email
prospectoSchema.plugin(uniqueValidator, {message: 'Error, esperaba {PATH} unico o este correo ya fue regitrado'});


//convertir a modelo de mongoose y exportar
const Prospecto = mongoose.model('Prospecto', prospectoSchema);
module.exports = Prospecto;