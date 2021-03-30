import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

import dotenv from 'dotenv';
dotenv.config({path:'variables.env'})

const app = express();

//conectar db

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

//habilitar pug

app.set('view engine', 'pug');

//obtener año actual

app.use( (req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    return next();
});

//agregar body parser para leer los datos del form
app.use(express.urlencoded({extended:true}));

//definir carpeta public

app.use(express.static('public'));




//agregar router
app.use('/', router);

app.listen(port,host, ()=>{
    console.log('El servidor esta funcionando en el puerto')
}) 