import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Productos = db.define('pagos',{
    idpago:{
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    titulo: {
        type: Sequelize.STRING
    },
    horario: {
        type: Sequelize.STRING
    },
    terminal: {
        type: Sequelize.STRING
    },
    coordinador: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    estado_pago: {
        type: Sequelize.STRING
    },
    pasajero1: {
        type: Sequelize.STRING
    },
    pasajero2: {
        type: Sequelize.STRING
    },
    pasajero3: {
        type: Sequelize.STRING
    },  
    pasajero4: {
        type: Sequelize.STRING
    },
    pasajaero5: {
        type: Sequelize.STRING
    },
    
});