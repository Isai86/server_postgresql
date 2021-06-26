const express = require('express');
require('dotenv').config({ path: '.env' });
const path = require('path');
const fileUpload = require('express-fileupload');
var cors = require('cors');

const db = require('./config/db');
db.sync().then(() => console.log('Base de datos conectada')).catch((err) => console.log(err));

const app = express();

//Cors
app.use(cors());



//Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//RUTAS
//Importar rutas
app.use('/api/empleados', require('./routes/empleados'));

//Leer el host y el puerto 
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;


app.listen(port, host, () => {
    console.log(`El servidor esta funcionando en el puerto ${process.env.PORT}`)
});