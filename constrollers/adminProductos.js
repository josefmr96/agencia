import {Productos} from '../models/Productos.js';

const guardarProductos = async (req, res)=>{
 
    const {destino,terminal,vendedor,precio,select,observacion,nombre1,apellido1,dni1,telefono1,nombre2,apellido2,dni2,
        telefono2,nombre3,apellido3,dni3,telefono3,nombre4,apellido4,dni4,telefono4,nombre5,apellido5,dni5,telefono5}=req.body
        const errores = [];
        const pasajero1=`${nombre1}-${apellido1}-${dni1}-${telefono1}`;
        const pasajero2=`${nombre2}-${apellido2}-${dni2}-${telefono2}`;
        const pasajero3=`${nombre3}-${apellido3}-${dni3}-${telefono3}`;
        const pasajero4=`${nombre4}-${apellido4}-${dni4}-${telefono4}`;
        const pasajaero5=`${nombre5}-${apellido5}-${dni5}-${telefono5}`;


        if(destino.trim() === ''){
            errores.push({mensaje:'El destino esta vacio'});
        }
    
        if(terminal.trim() === ''){
            errores.push({mensaje:'La terminal esta vacia'});
        }
    
        if(vendedor.trim() === ''){
            errores.push({mensaje:'El vendedor esta vacio'});
        }
        if(precio.trim() === ''){
            errores.push({mensaje:'El precio esta vacio'});
        }
        if(select.trim() === ''){
            errores.push({mensaje:'El pago esta vacio'});
        }
        if(observacion.trim() === ''){
            errores.push({mensaje:'Fecha de pago vacia'});
        }
        if(errores.length>0){
            const productos = await Productos.findAll();
            //mostrar vista con errores
         res.render('productos', {
                pagina: 'Productos',
                errores,
                destino,
                terminal,
                vendedor,
                precio,
                select,
                observacion,
                productos

            })
        }else{  
    
            try {
                
        console.log(req.body);
        console.log(errores);
          
        await Productos.create({
            titulo:destino,
            terminal,
            estado_pago:select,
            precio,
            coordinador:vendedor,
            horario:observacion,
            pasajero1,
            pasajero2,
            pasajero3,
            pasajero4,
            pasajaero5
            

        });
        res.redirect('/productos');
        
        
        
    } catch (error) {
        console.log(error)
        
    }
}
}

const paginaAdmin = async(req,res)=>{

    try{

    const pagos = await Productos.findAll();
    console.log(pagos)
    res.render('admingui',{
        pagina:'Admingui',
        pagos
    });
} catch (error) {
    console.log(error)
}

}
export{
    guardarProductos,
    paginaAdmin
}