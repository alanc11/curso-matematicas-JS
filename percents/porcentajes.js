const obtenerDescuento = document.querySelector('.boton-descuento');
const aplicarDescuento = document.querySelector('.discount-button-gained');


obtenerDescuento.addEventListener('click', randomDiscount);
aplicarDescuento.addEventListener('click', applyDiscount);
const max = 60;
const min = 10;
let discount;
let finalPrice;
let initial = 700;

function randomDiscount() { 
    console.log('descuento obtenido');
    discount = Math.random() * (max - min) + min;
    discount = Math.floor(discount);
    document.querySelector('.descuento-aplicado').innerText = discount;
    
    console.log(discount);
    return (discount);
}



function applyDiscount(){
    finalPrice = 700 - (700 * (discount/100));
    console.log(finalPrice);
    document.querySelector('.precio-con-descuento').innerText = finalPrice;
    return(finalPrice);
}