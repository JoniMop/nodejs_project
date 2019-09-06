'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
  dburl = 'yourMONGODB',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/**
 * Exportamos todas las rutas dentro del index.js
 */
const padreDeFamilia = require('./componentes/padresDeFamilia/padreDeFamilia.route');
const CentroEducativo = require('./componentes/CE/CE.route');
const adminMep = require('./componentes/admin/admin.route');
const noticias = require('./componentes/noticias/noticias.route');
const boletines = require('./componentes/boletines/boletines.route');
const citas = require('./componentes/citas/citas.route');
const etiquetas = require('./componentes/etiquetas/etiquetas.route');
const actividades = require('./componentes/actividades/actividades.route');
const utiles = require('./componentes/utiles/utiles.route');
const servicios = require('./componentes/servicios/servicios.route');
const faqs = require('./componentes/faqs/faqs.route');



/**
 * Le indicamos que le de acceso externo a las rutas inicializadas
 */
app.use('/api', padreDeFamilia);
app.use('/api', CentroEducativo);
app.use('/api', adminMep);
app.use('/api', noticias); 
app.use('/api', boletines); 
app.use('/api', citas);
app.use('/api', etiquetas);
app.use('/api', actividades);
app.use('/api', utiles);
app.use('/api', servicios);
app.use('/api', faqs); 

// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};
