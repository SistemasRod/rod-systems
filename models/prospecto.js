//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//libreria para validar que un campo debe ser unico, la propiedad unique ya puede ser usada
const uniqueValidator = require('mongoose-unique-validator');

const categoria = {
    values: [
        'Regalos dia de las madres', 
        'Regalos dia del padre', 
        'Reconocimientos', 
        'Quinquenios',
        'Regalos a clientes',
        'Convenciones de viaje',
        'Giveaways',
        'OTROS'
    ],
    message: '{VALUE} Categoria no valida'
}

const prospectoSchema = new Schema({
    date: {type: Date, default: Date.now},
    nombre: {type: String, required: [true, 'El nombre obligatorio']},
    email: {type: String, required:[true, 'Correo obligatorio'], unique: true},
    telefono: {type: String, default: 'Sin numero registrado'},
    categoria: {type: String, default: 'OTROS', enum: categoria}
});
// validar el email
prospectoSchema.plugin(uniqueValidator, {message: 'Error, esperaba {PATH} unico o este correo ya fue regitrado'});


//convertir a modelo de mongoose y exportar
const Prospecto = mongoose.model('Prospecto', prospectoSchema);
module.exports = Prospecto;