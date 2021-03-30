import {Reserva} from '../models/Reservas.js';
import mercadopago from 'mercadopago';



const pagoReserva = async (req,res) =>{
  const {cupon} = req.params
  const reservas = await Reserva.findOne({where : {cupon}});
  mercadopago.configure({
    access_token: 'TEST-4329415140267504-010202-03daebbfe8dd3f1493158939dc2adac2-344815873'
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: reservas.cantidad,
      currency_id: 'ARS',
      unit_price: reservas.precio
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
        pago
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