import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Reserva = db.define('reservas',{
    idreserva:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fk_idpasajero: {
        type: Sequelize.INTEGER
    },
    fk_idviaje: {
        type: Sequelize.INTEGER
    },  
    fk_idpago: {
        type: Sequelize.INTEGER
    },
    cantidad: {
        type: Sequelize.TEXT
    },
    total: {
        type: Sequelize.INTEGER
    },
    precio: {
        type: Sequelize.TEXT
    },
    cupon: {
        type: Sequelize.TEXT
    },
    seguro: {
        type: Sequelize.TEXT
    },
    pasajeros: {
        type: Sequelize.TEXT
    },
    terminal: {
        type: Sequelize.TEXT
    },
});