import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Salidas = db.define('salidas',{
    idsalidas:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    
    mardel: {
        type: Sequelize.INTEGER
    },
    disponibles: {
        type: Sequelize.INTEGER
    },
})