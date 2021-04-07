import {Reserva} from '../models/Reservas.js';
import {SMTPClient} from 'emailjs'; 
const guardarReservas = async (req,res)=>{

    console.log( req.body.totalDB)
    //recibimos las variables por el req.body para al envio del mail 
    const{cupon,
        multiDB,
        totalDB,
        precioDB,
        salidaDB,
        nombre1,
         apellido1,
        correo1,
        dni1,
        telefono1,
        fechaNac1,
        recogidaDB1,
        nombre2,
         apellido2,
        correo2,
        dni2,
        telefono2,
        fechaNac2,
        recogidaDB2,
        nombre3,
         apellido3,
        correo3,
        dni3,
        telefono3,
        fechaNac3,
        recogidaDB3,
        nombre4,
         apellido4,
        correo4,
        dni4,
        telefono4,
        fechaNac4,
        recogidaDB4,
        nombre5,
         apellido5,
        correo5,
        dni5,
        telefono5,
        fechaNac5,
        recogidaDB5}=req.body;
        //creando variables para registar en la DB
        const pasajeros = `${nombre1}-${apellido1}-${correo1}`;
        const cantidad =multiDB;
        const total1 = multiDB * precioDB
        const precio =precioDB;
        const terminal =recogidaDB1;
        //contenido html del cuerpo del mail con las variables
        const contentHTML=`
        <ul>
        <h1>Datos de la Reserva</h1>
        <li>${totalDB}</li>
        <li>${cupon}</li>
        <li>${multiDB}</li>
        <li>${precioDB}</li>
        <li>${salidaDB}</li>
        <h1>Información de los pasajeros</h1>
        <li>${nombre1}</li>
        <li>${apellido1}</li>
        <li>${correo1}</li>
        <li>${dni1}</li>
        <li>${telefono1}</li>
        <li>${fechaNac1}</li>
        <li>${recogidaDB1}</li>
        </ul>
        <ul>
        <li>${nombre2}</li>
        <li>${apellido2}</li>
        <li>${correo2}</li>
        <li>${dni2}</li>
        <li>${telefono2}</li>
        <li>${fechaNac2}</li>
        <li>${recogidaDB2}</li>
        </ul>
        <ul>
        <li>${nombre3}</li>
        <li>${apellido3}</li>
        <li>${correo3}</li>
        <li>${dni3}</li>
        <li>${telefono3}</li>
        <li>${fechaNac3}</li>
        <li>${recogidaDB3}</li>
        </ul>
        <ul>
        <li>${nombre4}</li>
        <li>${apellido4}</li>
        <li>${correo4}</li>
        <li>${dni4}</li>
        <li>${telefono4}</li>
        <li>${fechaNac4}</li>
        <li>${recogidaDB4}</li>
        </ul>
        <ul>
        <li>${nombre5}</li>
        <li>${apellido5}</li>
        <li>${correo5}</li>
        <li>${dni5}</li>
        <li>${telefono5}</li>
        <li>${fechaNac5}</li>
        <li>${recogidaDB5}</li>
        </ul>
         `;
        //credenciales para el envio del mail
        try {
        
          const client = new SMTPClient({
            user:'alene.kreiger@ethereal.email',
            password:'GCFY8jh1Rdwgq77AzF',
            host: 'smtp.ethereal.email',
            tls: true,
            port:587
        });
        
        // send the message and get a callback with an error or details of the message that was sent
        client.send(
            {
                text: 'i hope this works',
                from: '<alene.kreiger@ethereal.email>',
                to: '<alene.kreiger@ethereal.email>',
                cc: 'alene.kreiger@ethereal.email',
                subject: contentHTML,
            },
            (err, message) => {
                console.log(err || message);
            }
        );
            
                await Reserva.create({
                    pasajeros,
                    cantidad,
                    precio,
                    terminal,
                    total:total1,
                    cupon
                });
                res.redirect(`/reservaGuardada/${cupon}`);
   
        } catch (error) {
          console.log(error)
          
        }
        


}
export {
    guardarReservas
}