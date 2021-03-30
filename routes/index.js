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
const router = express.Router();

router.get('/', paginaInicio );
router.get('/nosotros',paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:idpromocion', paginaDetallePromocion);

router.get('/viajes/reserva/:slug', paginaReservas);
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


export default router;