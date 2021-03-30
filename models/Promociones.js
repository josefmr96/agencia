import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Promocion = db.define('promociones',{
    idpromocion:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.NUMBER
    },
    fecha: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.NUMBER
    },
    slug: {
        type: Sequelize.STRING
    },
    fk_idhotel: {
        type: Sequelize.STRING
    },

});