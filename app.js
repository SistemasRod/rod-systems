// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//conexion a db
const mongoose = require('mongoose');
//conexion local
const uri = 'mongodb://localhost:27017/rodsystems';
//conexion en la nube con mongo atlas
//const uri = 'mongodb+srv://user_udemy:gAzxg81oroZqB77q@udemy.n8ana.mongodb.net/dbpruebas?retryWrites=true&w=majority'

const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
mongoose.connect(uri, options).then(
  () => { console.log('conectado a mondo db'); },
  err => { err }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/user'));
app.use('/api/login', require('./routes/login'));
app.use('/api/rodselect', require('./routes/prospecto'));
app.use('/api/rodselect', require('./routes/cotizacion'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('escuchando en el puerto: '+ app.get('puerto'));
});