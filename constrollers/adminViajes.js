import {Fulldays} from '../models/Fullldays.js'
import {Reserva} from '../models/Reservas.js'
import {Terminal} from '../models/Terminales.js'
const paginaAdminViajes = async(req,res)=>{

   
    res.render('adminviajes',{
        pagina:'adminviajes'
    });


}
const paginaAdminListadoViaje = async(req,res)=>{
    const fulldays = await Fulldays.findAll();

   
    res.render('adminlistaviajes',{
        pagina:'adminlistaviajes',
        fulldays
    });


}
const paginaListadoViajeAdmin = async(req,res)=>{
    const fulldays = await Fulldays.findAll();

   
    res.render('lista-viajes',{
        pagina:'lista-viajes',
        fulldays
    });


}
const paginaAdminListadoViajeEliminar = async(req,res)=>{
    const{idfullday}=req.params
        await Fulldays.destroy({
            where: {
                idfullday: idfullday
            },
          }).then(res.redirect(`/admin/adminlistaviajes`));

   
    res.render('adminlistaviajes',{
        pagina:'adminlistaviajes',
    });


}
const paginaAdminCrearViaje = async(req,res)=>{
    const{titulo,precio,fecha,imagen,descripcion,disponibles,slug}=req.body
    console.log(req.body);
    try {
        await Fulldays.create({
            titulo,
            precio,
            fecha,
            imagen,
            descripcion,
            disponibles,
            slug
        });
        res.redirect(`/admin/adminviajes`);
    } catch (error) {
        console.log(error)
    }
   


}
const paginaAdminActualizarViaje = async(req,res)=>{
const{idfullday}=req.params
    console.log(idfullday)
    try {
       
        const fulldays = await Fulldays.findOne({where : {idfullday:idfullday}})
        console.log(fulldays)
        res.render('adminactviajes',{
            pagina:'adminactviajes',
            fulldays
        });
    } catch (error) {
        console.log(error)
    }
}
const paginaAdminActViaje = async(req,res)=>{
    const{idfullday}=req.params
    const{idfullday1,titulo,precio,fecha,imagen,descripcion,disponibles,slug}=req.body
    console.log(req.params.idfullday);

        await Fulldays.update(
            // Values to update
            {titulo: titulo,
                precio:precio,
                fecha:fecha,
                imagen:imagen,
                descripcion:descripcion,
                disponibles:disponibles,
                slug:slug,
            },
           { where:
            {
                idfullday:idfullday
            }}
        ).then(res.redirect(`/admin/adminlistaviajes`));

   

}

//RESERVASS
const paginaCrearReserva = async(req,res)=>{
    const{idfullday}=req.params
    const terminales = await Terminal.findAll()
    const fulldays = await Fulldays.findOne({where : {idfullday:idfullday}});
    Reserva.belongsTo(Fulldays, { foreignKey: 'fk_idfullday', });
   
    res.render('crear-reserva',{
        pagina:'Crear-Reserva',
        fulldays,
        terminales
    });


}
const paginaGuardarReserva = async(req,res)=>{

    //recibiendo los datos del formulario 
    const{cupon,
        precio,
        idfullday,
        disponibles,
        cantidad,
        total,
        seguro,
        titulo,
        nombre1,apellido1,dni1,fechaNac1,recogidaDB1,
        nombre2,apellido2,dni2,fechaNac2,
        nombre3,apellido3,dni3,fechaNac3,
        nombre4,apellido4,dni4,fechaNac4,
        nombre5,apellido5,dni5,fechaNac5}=req.body
        //asignacion de variables
        const disponiblesFullDay = disponibles - cantidad;

        console.log(disponiblesFullDay);
        const pasajerosDB = `TERMINAL DE SUBIDA ${recogidaDB1}
                             ${nombre1} ${apellido1} ${fechaNac1} ${dni1}
                            ${nombre2} ${apellido2} ${fechaNac2} ${dni2}`;  
        const pasajerosDB3 = `${nombre3} ${apellido3} ${fechaNac3} ${dni3}
                            ${nombre4} ${apellido4} ${fechaNac4} ${dni4}
                            ${nombre5} ${apellido5} ${fechaNac5} ${dni5}`;
try {
    await Reserva.create({
        cupon,
        precio,
        total,
        seguro,
        cantidad,
        pasajeros:pasajerosDB,
        pasajeros3:pasajerosDB3,
        viajes:titulo,
        fk_idfullday:idfullday
    });
    await Fulldays.update(
        // Values to update
        {disponibles:disponiblesFullDay
        },
       { where:
        {
            idfullday:idfullday
        }}
    ).then(res.redirect(`/admin/adminlistaviajes`));
    
} catch (error) {
    
}



}
const paginaListaReserva = async(req,res)=>{
    const{idfullday}=req.params
    Reserva.belongsTo(Fulldays, { foreignKey: 'fk_idfullday', });
    const fulldays = await Fulldays.findOne({where : {idfullday:idfullday}})
    try {
        const reservas = await Reserva.findAll({
            where: {
              fk_idfullday: idfullday
            }
            , include: [{model: Fulldays, required: true}] });
            console.log(fulldays)
            res.render('lista-reserva',{
                pagina:'Lista-Reserva',
                fulldays,
                reservas
            });
    } catch (error) {
        
    }
 


}


export{
    paginaAdminViajes,
    paginaAdminCrearViaje,
    paginaAdminListadoViaje,
    paginaAdminActualizarViaje,
    paginaAdminActViaje,
    paginaAdminListadoViajeEliminar,
    paginaCrearReserva,
    paginaGuardarReserva,
    paginaListaReserva,
    paginaListadoViajeAdmin
}