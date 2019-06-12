// web framework
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

// logica para procesar los recursos
const indexRouter = require('./routes/index');
const teachersRouter = require('./routes/teachers');
const lessonsRouter = require('./routes/lessons');

let app = express();
// configuracion de servidor e interpretacion de mensajes del cliente
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'www')));

// rutas de los recursos, representa el Nivel 1 de un API REST
app.use('/', indexRouter); // pagina de API doc

app.use('/lessons', lessonsRouter); // operaciones hacia el recurso de 'clases'

app.use('/teachers', teachersRouter); // operaciones hacia el recurso de 'maestro'

module.exports = app;
