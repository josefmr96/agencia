import Sequelize from 'sequelize';
import db from '../config/db.js';
//recogida fue lo primero que se me ocurrio cuando cree la db y la relacione xD

export const Recogida = db.define('recogidas',{
    idrecogidas:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    
    recogida: {
        type: Sequelize.STRING
    },
    
});