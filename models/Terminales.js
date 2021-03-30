import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Terminal = db.define('terminales',{
    idterminal:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    terminal:{
        type: Sequelize.STRING,
    },

});