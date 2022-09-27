//* CALCULANDO LA MEDIA GEOMETRICA

function calcularMediaGeometrica (array){
    let sumaLista = 1;
    for(let i=0; i < array.length; i++){
        sumaLista = sumaLista * array[i];
    }
    let mediaGeo = Math.pow(sumaLista,1/array.length);
    console.log(mediaGeo);
    return mediaGeo;
}

calcularMediaGeometrica([1.20, 1.15, 1.33, 1.25]);
