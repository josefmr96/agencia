import express from 'express';

import {paginaInicio,
        paginaProductos,
        paginaDetallePromocion,
        paginaReservas,
        paginaPromociones} from '../constrollers/paginasControlle.js';
        
import {guardarReservas} from '../constrollers/reservaController.js';
import {pagoReserva} from '../constrollers/pagoController.js';
import{guardarProductos, paginaAdmin} from '../constrollers/adminProductos.js';
import{paginaAdminViajes,
         paginaAdminCrearViaje,
         paginaAdminListadoViaje,
         paginaAdminActualizarViaje,
         paginaAdminActViaje,
         paginaAdminListadoViajeEliminar,
         paginaCrearReserva,
         paginaGuardarReserva,
         paginaListaReserva,
         paginaListadoViajeAdmin} from '../constrollers/adminViajes.js'
const router = express.Router();

router.get('/', paginaInicio ); //INICIO        
router.get('/viajes/info/:idfullday', paginaDetallePromocion); // VIAJE
router.get('/viajes', paginaPromociones); // PROMOCIONES "AKA" VIAJES
router.get('/viajes/reserva/:idfullday', paginaReservas); // RESERVA
router.post('/viajes/reserva/:idfullday', guardarReservas); // RESERVA

router.get('/productos', paginaProductos);
router.post('/productos', guardarProductos);
router.get('/admingui', paginaAdmin);



router.get('/reservaGuardada/:cupon', pagoReserva);
/* router.post('/reservaGuardada/:cupon', mercadoPago); */


//sistema admin
//fulldays
router.get('/admin/adminviajes', paginaAdminViajes);
router.get('/admin/adminlistaviajes', paginaAdminListadoViaje);
router.get('/admin/admin/lista-viajes', paginaListadoViajeAdmin);
router.get('/admin/adminlistaviajes/delete/:idfullday', paginaAdminListadoViajeEliminar);
router.get('/admin/adminlistaviajes/:idfullday', paginaAdminActualizarViaje);
router.post('/admin/adminlistaviajes/:idfullday', paginaAdminActViaje);
router.post('/admin/adminviajes', paginaAdminCrearViaje);

//reservas
// router.get('/admin/crear-reserva', paginaCrearReserva);
router.post('/admin/adminlistaviajes/resevar/:idfullday', paginaGuardarReserva);
router.get('/admin/adminlistaviajes/resevar/:idfullday', paginaCrearReserva);
router.get('/admin/adminlista/reservas/:idfullday', paginaListaReserva);
export default router;