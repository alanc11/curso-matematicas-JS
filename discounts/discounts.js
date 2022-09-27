const btn = document.querySelector('#canejar');
const inputPrice = document.querySelector('#price'); 
const inputCupon = document.querySelector('#cupon'); 
const pResult = document.querySelector('#result'); 

btn.addEventListener('click', calculateDiscount);

// const couponsObj = {
//     'verano2020' : 50,
//     'alan2021' : 20,
//     'nuevo' : 10,
//     'cuponMagico' : 60,
//     'descuentoPromo' : 5,
//     'PromoLimited' : 35,
//     'SuperPromo' : 40,
// };

const couponsList = [];
couponsList.push({
    name: 'cupon1',
    discount: 50,
});
couponsList.push({
    name: 'cupon2',
    discount: 10,
});
couponsList.push({
    name: 'cupon3',
    discount: 60,
});

function calculateDiscount(){
    const price = Number(inputPrice.value);
    const coupon = inputCupon.value;
    let discount;

    function funcionFiltro(cuponElement){
        return cuponElement.name == coupon;
    }

    const couponInArray = couponsList.filter(funcionFiltro);


    if(couponInArray.length>0){
        discount = couponInArray[0].discount;
         const finalPrice = (price * (100-discount) /100);
         pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
         return;
         
    }else{
        pResult.innerText = 'Cupón no válido o expirado';
    }
}
  // if(!price || !coupon){
    //     alert('¡Llena el formulario!');
    //     return;
    // }

    // if(couponsObj[coupon]){
    //     discount=couponsObj[coupon];
    //     const finalPrice = (price * (100-discount) /100);
    //     pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
    //     return;
    //     console.log(couponsObj[coupon])
    // }else{
    //     pResult.innerText = 'Cupón no válido o expirado';
    // }


///////////////////////////////////////////////////////////////
// const precio = inputPrice.value;
    // const cupon = inputCupon.value;
    
    // if(!precio || !cupon){
    //     alert('¡Llena el formulario!');
    //     return;
    // }

    // if(cupon=='SORPRESA15'){
    //     const cupon = 50;
    //     console.log(cupon);
    //     const finalPrice = (precio * (100-cupon) /100);
    //     pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
    //     return;
        
    // }else if(cupon=='CUPONMAGICO25'){
    //     const cupon = 10;
    //     console.log(cupon);
    //     const finalPrice = (precio * (100-cupon) /100);
    //     pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
    //     return;
    // }else if(cupon=='VERANO2022'){
    //     const cupon = 25;
    //     console.log(cupon);
    //     const finalPrice = (precio * (100-cupon) /100);
    //     pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
    //     return;
    // }else if(cupon=='EASYWEB2021'){
    //     const cupon = 30;
    //     console.log(cupon);
    //     const finalPrice = (precio * (100-cupon) /100);
    //     pResult.innerText = 'El nuevo precio con el descuento es de $' + finalPrice;
    //     return;
    // }else{
    //     pResult.innerText = 'Cupón no válido o expirado';
    // }
