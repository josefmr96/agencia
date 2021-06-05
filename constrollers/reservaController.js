import {Fulldays} from '../models/Fullldays.js';
import {Reserva} from '../models/Reservas.js';
// import {SMTPClient} from 'emailjs'; 
const guardarReservas = async (req,res)=>{

    console.log( req.body.totalDB)
    //recibimos las variables por el req.body para al envio del mail 
    const{cupon,
        multiDB,
        totalDB,
        precioDB,
        idfullday,
        disponibles,
        salidaDB,
        nombre1,apellido1,dni1,fechaNac1,recogidaDB1,
        nombre2,apellido2,dni2,fechaNac2,
        nombre3,apellido3,dni3,fechaNac3,
        nombre4,apellido4,dni4,fechaNac4,
        nombre5,apellido5,dni5,fechaNac5}=req.body;
        //creando variables para registar en la DB
        const pasajerosDB = `TERMINAL DE SUBIDA ${recogidaDB1}
                                ${nombre1} ${apellido1} ${fechaNac1} ${dni1}
                                ${nombre2} ${apellido2} ${fechaNac2} ${dni2}`;  
        const pasajerosDB3 =    `${nombre3} ${apellido3} ${fechaNac3} ${dni3}
                                ${nombre4} ${apellido4} ${fechaNac4} ${dni4}
                                ${nombre5} ${apellido5} ${fechaNac5} ${dni5}`;
        const cantidad =multiDB;
        const total1 = multiDB * precioDB
        const precio =precioDB;
        const terminal =recogidaDB1;
        const disponiblesFullDay = disponibles - cantidad;
        //contenido html del cuerpo del mail con las variables
        // const contentHTML=`
        // <ul>
        // <h1>Datos de la Reserva</h1>
        // <li>${totalDB}</li>
        // <li>${cupon}</li>
        // <li>${multiDB}</li>
        // <li>${precioDB}</li>
        // <li>${salidaDB}</li>
        // <h1>Información de los pasajeros</h1>
        // <li>${nombre1}</li>
        // <li>${apellido1}</li>
        // <li>${dni1}</li>
        // <li>${fechaNac1}</li>
        // <li>${recogidaDB1}</li>
        // </ul>
        // <ul>
        // <li>${nombre2}</li>
        // <li>${apellido2}</li>

        // <li>${dni2}</li>

        // <li>${fechaNac2}</li>

        // </ul>
        // <ul>
        // <li>${nombre3}</li>
        // <li>${apellido3}</li>

        // <li>${dni3}</li>

        // <li>${fechaNac3}</li>

        // </ul>
        // <ul>
        // <li>${nombre4}</li>
        // <li>${apellido4}</li>

        // <li>${dni4}</li>

        // <li>${fechaNac4}</li>

        // </ul>
        // <ul>
        // <li>${nombre5}</li>
        // <li>${apellido5}</li>

        // <li>${dni5}</li>

        // <li>${fechaNac5}</li>

        // </ul>
        //  `;
        //credenciales para el envio del mail
        try {
        
        //   const client = new SMTPClient({
        //     user:'alene.kreiger@ethereal.email',
        //     password:'GCFY8jh1Rdwgq77AzF',
        //     host: 'smtp.ethereal.email',
        //     tls: true,
        //     port:587
        // });
        
        // // send the message and get a callback with an error or details of the message that was sent
        // client.send(
        //     {
        //         text: 'i hope this works',
        //         from: '<alene.kreiger@ethereal.email>',
        //         to: '<alene.kreiger@ethereal.email>',
        //         cc: 'alene.kreiger@ethereal.email',
        //         subject: contentHTML,
        //     },
        //     (err, message) => {
        //         console.log(err || message);
        //     }
        // );
            
                await Reserva.create({
                    cupon,
                    precio,
                    cantidad,
                    total:total1,
                    pasajeros:pasajerosDB,
                    pasajeros3:pasajerosDB3,
                    terminal,
                    fk_idfullday:idfullday
                });
                await Fulldays.update(
                    // Values to update
                    {disponibles:disponiblesFullDay
                    },
                   { where:
                    {
                        idfullday:idfullday
                    }}).then(res.redirect(`/reservaGuardada/${cupon}`));
   
        } catch (error) {
          console.log(error)
          
        }
        


}
export {
    guardarReservas
}