cargarEventListeners();
let documentos;
function cargarEventListeners(){
const selector = document.querySelector('#select');
document.addEventListener('DOMContentLoaded', ()=>{

 
})
selector.addEventListener('change',e=>{

    console.log(e)
    const precioDB = document.querySelector('#precioDB').value
    const precio = document.getElementById('precio');
    const inputMulti = document.createElement('input');
    const inputTotal = document.createElement('input');
     function multiplicar(){
        
   /*  const precioValue = precioDB.innerHTML; */
    const multiplicador = e.target.value;
    
        const total= Number(precioDB) *  e.target.value;
        console.log(total);
        inputMulti.classList.add('form-control', 'reservaForm')
        inputMulti.setAttribute("name", "multiDB");
        inputTotal.classList.add('form-control', 'reservaForm1')
        inputTotal.setAttribute("name", "totalDB");
        inputMulti.value=`${multiplicador}`;
        inputTotal.value=`$${total}`;
        precio.appendChild(inputMulti);
        precio.appendChild(inputTotal);
      console.log(inputTotal.value);
    }
    multiplicar();
    function form2(){
        const contenedor = document.querySelector("div.formulario1").style.display = 'block';
       const contenedor1 = document.querySelector("div.formulario2").style.display = 'block';
       const boton = document.querySelector("div.boton").style.display = 'block';}
       selector.hidden = true;
     
    if(e.target.value ==='2') {
       form2();
    }else if(e.target.value ==='3'){
        form2();
        const contenedor2 = document.querySelector("div.formulario3").style.display = 'block'; 
        
    } else if(e.target.value === '4'){
        form2();
        const contenedor2 = document.querySelector("div.formulario3").style.display = 'block'; 
        const contenedor3 = document.querySelector("div.formulario4").style.display = 'block'; 

    } else{
        form2();
        const contenedor2 = document.querySelector("div.formulario3").style.display = 'block'; 
        const contenedor3 = document.querySelector("div.formulario4").style.display = 'block'; 
        const contenedor4 = document.querySelector("div.formulario5").style.display = 'block';

    }
})



}






