import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Pasajero = db.define('pasajeros',{
    idpasajero:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    
    cantidad: {
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
    pasajero5: {
        type: Sequelize.STRING
    },
    fk_idhabitacion: {
        type: Sequelize.STRING
    },
    
});