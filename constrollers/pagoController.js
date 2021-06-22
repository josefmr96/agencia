import {Reserva} from '../models/Reservas.js';
import mercadopago from 'mercadopago';



const pagoReserva = async (req,res) =>{
  const {cupon} = req.params
  const reservas = await Reserva.findOne({where : {cupon}});
  const comision =reservas.precio * 0.15
  const total =  reservas.precio + comision
  mercadopago.configure({
    access_token: 'APP_USR-4329415140267504-010202-779b7778be9440049333305d702d3d0e-344815873'
});

var preference = {
  items: [
    {
      title: 'Pago de viaje',
      quantity: reservas.cantidad,
      currency_id: 'ARS',
      unit_price: total
    }
  ]
};

const pago = await mercadopago.preferences.create(preference)
.then(function(response){ 
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
    res.render('pago',{
        pagina: 'Informacion Viaje',
        reservas,
        pago,
        comision,
        total
    });
        
        
  
}

/* const mercadoPago = async (req,res) =>{
      

    res.render('pago',{
      pagina: 'Informacion Viaje',
      pago
  
});
  
} */

export{
  pagoReserva
}