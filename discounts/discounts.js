const btn = document.querySelector('#canejar');
const inputPrice = document.querySelector('#price'); 
const inputCupon = document.querySelector('#cupon'); 
const pResult = document.querySelector('#result'); 

btn.addEventListener('click', calculateDiscount);

function calculateDiscount(){
    const precio = inputPrice.value;
    const cupon = inputCupon.value;
    

    if(cupon=='SORPRESA15'){
        const cupon = 50;
        console.log(cupon);
        const finalPrice = (precio * (100-cupon) /100);
        pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
        return;
        
    }else if(cupon=='CUPONMAGICO25'){
        const cupon = 10;
        console.log(cupon);
        const finalPrice = (precio * (100-cupon) /100);
        pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
        return;
    }else if(cupon=='VERANO2022'){
        const cupon = 25;
        console.log(cupon);
        const finalPrice = (precio * (100-cupon) /100);
        pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
        return;
    }else if(cupon=='EASYWEB2021'){
        const cupon = 30;
        console.log(cupon);
        const finalPrice = (precio * (100-cupon) /100);
        pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
        return;
    }else{
        pResult.innerText = 'Cupón no válido o expirado';
    }

    
}