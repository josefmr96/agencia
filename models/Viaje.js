import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    idviajes:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fk_idpromocion:{
        type: Sequelize.INTEGER
    },
    fk_idfullday:{
        type: Sequelize.INTEGER
    },
    fk_idenero:{
        type: Sequelize.INTEGER
    },
    fk_idmarzo:{
        type: Sequelize.INTEGER
    },
    fk_idmayo:{
        type: Sequelize.INTEGER
    },
    fk_idagosto:{
        type: Sequelize.INTEGER
    },
    fk_idoctubre:{
        type: Sequelize.INTEGER
    },
 
});



