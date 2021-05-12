import express from 'express';

import {paginaInicio,
        paginaProductos,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetallePromocion,
        paginaReservas,
        paginaPromociones,
        paginaFulldays,
        paginaMayojulio} from '../constrollers/paginasControlle.js';

import {guardarTestimonial} from '../constrollers/testimonialController.js';
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

router.get('/', paginaInicio );
router.get('/nosotros',paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:idfullday', paginaDetallePromocion);

router.get('/viajes/reserva/:idfullday', paginaReservas);
router.post('/viajes/reserva/:slug', guardarReservas);

router.get('/productos', paginaProductos);
router.post('/productos', guardarProductos);
router.get('/admingui', paginaAdmin);



router.get('/reservaGuardada/:cupon', pagoReserva);
/* router.post('/reservaGuardada/:cupon', mercadoPago); */

router.get('/promociones', paginaPromociones);
router.get('/fulldays', paginaFulldays);
router.get('/mayo_julio', paginaMayojulio);


router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


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