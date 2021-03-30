import {Viaje} from '../models/Viaje.js';
import {Promocion} from '../models/Promociones.js';
import {Testimonial} from '../models/Testimoniales.js';
import {Salidas} from '../models/Salidas.js';
import {Reserva} from '../models/Reservas.js';
import{Pasajero} from '../models/Pasajeros.js'
import  {Fulldays} from  '../models/Fullldays.js';
import {MayoJulios} from '../models/MayoJulios.js';
import {Terminal} from '../models/Terminales.js';

const paginaInicio = async (req, res)=>{


        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home'
        });
   
}
const paginaPromociones = async (req, res)=>{
    //consultar 3 viajes del modelo viaje
    const promociones = await Promocion.findAll();
    try {

        res.render('promociones', {
            pagina: 'Promociones',
            promociones
        });
    } catch (error) {
        console.log(error)
    }
   
}
const paginaFulldays = async (req, res)=>{
    //consultar 3 viajes del modelo viaje
    const fulldays = await Fulldays.findAll();
    try {

        res.render('fulldays', {
            pagina:'fulldays',
            fulldays
        });
    } catch (error) {
        console.log(error)
    }
   
}
const paginaMayojulio = async (req, res)=>{
    //consultar 3 viajes del modelo viaje
    const mayoJulios = await MayoJulios.findAll();
    try {

        res.render('mayo_julio', {
            pagina:'mayo_julio',
            mayoJulios
        });
    } catch (error) {
        console.log(error)
    }
   
}
const paginaProductos = async (req, res)=>{
    
    res.render('productos', {
            pagina: 'Productos'
    });

}

const paginaNosotros =  (req, res)=>{  
    res.render('nosotros', {
            pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res)=>{
    //consultar BD
   /*  Viaje.belongsTo(Salidas, { foreignKey: 'fk_idsalidas' }); */
/*     const salidas = await Salidas.findAll() */
 //optimizar luego los 2 await
    const viajes = await Viaje.findAll(/* { include: [{model: Salidas, required: true}]} */);
    console.log(JSON.stringify(viajes, null, 2));
    
    res.render('viajes', {
           pagina: 'Proximos Viajes',
           viajes
         /*   salidas */


       });
   }
const paginaTestimoniales = async (req, res)=>{
   try {
       const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
   } catch (error) {
       console.log(error)
   }
   }

   //muestra un viajre por su slug 

const paginaDetallePromocion = async (req, res)=>{
    const{idpromocion} =req.params;

    try {

        const promocion = await Promocion.findOne({where : {idpromocion}})
        console.log(promocion)
    
        res.render('viaje',{
            pagina: 'Informacion Viaje',
            promocion
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
const paginaReservas = async (req, res)=>{
    const{slug} =req.params;
    
    
    try {
        const pasajeros = await Pasajero.findAll();
        const terminales = await Terminal.findAll();
        const promocion = await Promocion.findOne(
            {where : {slug:slug}/* , include: [{model: Salidas, required: true}] */});
        res.render('reserva',{
            pagina: 'Informacion Viaje',
            promocion,
            pasajeros,
            terminales
        });
        
        
    } catch (error) {
        console.log(error);
    }
  
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetallePromocion,
    paginaReservas,
    paginaProductos,
    paginaPromociones,
    paginaFulldays,
    paginaMayojulio
}