
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//libreria para validar que un campo debe ser unico, la propiedad unique ya puede ser usada
const uniqueValidator = require('mongoose-unique-validator');

const receptores = {
    values: ['COLABORADORES', 'CLIENTES', 'SOCIOS', 'OTROS'],
    message: '{VALUE} Receptor no valido'
}
const regalos = {
    values: ['JOYERIA', 'ARTICULOS DE PIEL', 'RELOJES', 'BOLIGRAFOS', 'PINES', 'MOCHILAS-PORTAFOLIOS', 'GAMER', 'RECONOCIMIENTOS', 'OTROS'],
    message: '{VALUE} Regalo no valido'
}


const cotizacionSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre es obligatorio']},
    apellidos: {type: String, required: [true, 'Los apellidos son obligatorios']},
    email: {type: String, required:[true, 'Correo obligatorio']},
    date: {type: Date, default: Date.now},
    telefono: {type: String, default: 'sin numero registrdo'},
    empresa: {type: String, required: [true, 'La empresa es obligatoria']},

    presupuesto: {type: String, required:[true, 'Presupuesto obligatorio']},
    personas: {type: String, required:[true, 'Cantidad de personas necesario']},
    entrega: {type: Date, default: Date.now},
    receptor: {type: String, default: 'OTROS', enum: receptores},
    regalo: {type: String, default: 'OTROS', enum: regalos},

    comentario: {type: String, default: 'Sin comentarios'},

    activo: {type: Boolean, default: true}
});




//convertir a modelo de mongoose y exportar
const Cotizacion = mongoose.model('Cotizacion', cotizacionSchema);
module.exports = Cotizacion;