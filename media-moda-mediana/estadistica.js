//TODO: CALCULANDO EL PROMEDIO DE DIFERENTES FORMAS
const Platzimath = {

};

// ! Forma numero 1 de calcular el promedio

Platzimath.calcularPromedio = function calcularPromedio(array){
    let sumaLista = 0;
    for(let i=0; i < array.length; i++){
        sumaLista = sumaLista + array[i];
    }
    const promedio = sumaLista / array.length;
    //console.log(promedio);
    return promedio;
}

// ! Utilizando el método reduce de los arrays

Platzimath.calcularPromedioReduce = function Promedio(array){
    const funcionReduce = (valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    };
    let sumaLista = array.reduce(funcionReduce);
    const promedio = sumaLista / array.length;
    console.log(promedio);
}

//: CALCULANDO MEDIANA EN LISTAS 


Platzimath.esPar = function esPar(lista){
    return !(lista.length % 2);
}

Platzimath.esImpar = function esImpar(lista){
    return (lista.length % 2);
}

Platzimath.calcularMediana = function calcularMediana(lista) {
    const listaEsPar = Platzimath.esPar(lista);
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
      const medianaListaPar = Platzimath.calcularPromedio(listaMitades);
      return medianaListaPar;
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
    //   console.log(indexMitadListaImpar);
    //   console.log(medianaListaImpar);
      return medianaListaImpar;
    }
  }
//* ORDENANDO ARRAYS EN ORDEN DE MAYOR A MENOR O DE MENOR A MAYOR

Platzimath.ordenarLista = function ordenarLista (listaDesordenada){
    function ordenarListaSort(valorA, nuevoV){
        return valorA - nuevoV;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

//// Calculando moda


Platzimath.calcularModa = function calcularModa(lista){
    const listCount = {}
    for(let i = 0; i < lista.length; i++){
        const element = lista[i];
        if(listCount[element]){
            listCount[element] += 1;
        }else{
            listCount[element] = 1;
        }
    }
    console.log(listCount);
}


