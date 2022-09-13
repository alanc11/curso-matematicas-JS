console.group('Cuadrado');
const ladoCuadrado = 5;
function calculosCuadrado(lado){
    return{
        perimetro:lado*4,
        area:lado**2,
    };
    
}
console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const ladoTriguloBase = 9;
const alturaTriangulo = 5;
console.log({
    lado1: ladoTriangulo1,
    lado2: ladoTriangulo2,
    base: ladoTriguloBase,
})
function calculosTriangulo(lado1,lado2,base,altura){
    return{
        perimetro: (lado1 + lado2 + base),
        area: (base*altura)/2,
    };
}
console.groupEnd('Triangulo');
