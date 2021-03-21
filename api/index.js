const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const meals = require('./routes/meals');
const app = express();

//use:agregar pluginnes para a nuestro servidor de express para agregar funcionaludades

app.use(bodyParser.json());
app.use(cors());

//conectarse con el servidor de base de datos de mongo atlas.
//.connect es para finalmente dertese cuenta que se conecto
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParse: true,
  useUnifiedTopology: true,
});






app.use('/api/meals', meals);
module.exports = app;
