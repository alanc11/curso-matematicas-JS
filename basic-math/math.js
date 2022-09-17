// console.group('Cuadrado');
// const ladoCuadrado = 5;
// function calculosCuadrado(lado){
//     return{
//         perimetro:lado*4,
//         area:lado**2,
//     };
    
// }
// console.groupEnd('Cuadrado');

// console.group('Triangulo');
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const ladoTriguloBase = 9;
// const alturaTriangulo = 5;
// console.log({
//     lado1: ladoTriangulo1,
//     lado2: ladoTriangulo2,
//     base: ladoTriguloBase,
// });
// function calculosTriangulo(lado1,lado2,base,altura){
//     return{
//         perimetro: (lado1 + lado2 + base),
//         area: (base*altura)/2,
//     };
// }
// console.groupEnd('Triangulo');

// console.group('Circulo');
// const radioCirculo = 3;
// const diametroCirculo = radioCirculo * 2;
// const PI = 3.141516;
// const circunferencia = diametroCirculo * PI;
// const areaCirculo = PI*(radioCirculo**2);
// console.log({
//     radio: radioCirculo,
//     diametro: diametroCirculo,
//     circunferencia: circunferencia,
//     area: areaCirculo,
    
// });
// function calculosCirculo(radio){
//     var diametro = radio*2;
//     var radioCuadrado = Math.pow(radio,2);
//     return{
//         diametro: diametro,
//         circunferencia: diametro * Math.PI,
//         area: radioCuadrado*Math.PI, 

//     };
// }
// console.groupEnd('Circulo');

// console.group('Triangulo isosceles');

// function calcularAlturaTriangulo(lados, base){
//     if(lados == base){
//         console.warn("No es un triangulo isósceles");
//     }else{
//         // h = raizcuadrada((lado**2)-(base**2)/4) 
//         const altura = Math.sqrt((lados**2)-((base**2))/4);
//         console.log(altura);
//     }
// }
// console.groupEnd('Triangulo isosceles');

// console.group('Triangulo escaleno');

// function calcularAlturaTrianguloEscaleno(lado1, lado2, base){
//     if(lado1 == base || lado1==lado2 || base==lado2){
//         console.warn("No es un triangulo escaleno");
//     }else{
//         // h = 2/a raizCuadrada(S(S-a)(S-b)(S-c)) 
//         const S = (lado1 + lado2 + base) / 2;
//         const altura = (2/base) * Math.sqrt(S*((S-base)*(S-lado1)*(S-lado2)));
//         console.log(altura);
//     }
// }
// console.groupEnd('Triangulo escaleno');