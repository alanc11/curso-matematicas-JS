// * ANALISIS PERSONAL PARA JUANITA

const personaEnBusqueda = 'Juanita';


function encontrarPersona(personaEnBusqueda){
  return salarios.find(persona => persona.name == personaEnBusqueda);
}


function medianaPorPersona(nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento){
    return elemento.salario;
  });

  const medianaSalarios = Platzimath.calcularMediana(salarios);
 // console.log(medianaSalarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];
  for(let i = 1; i < trabajos.length; i++){
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimeinto = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimeinto / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = Platzimath.calcularMediana(porcentajesCrecimiento);
  console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;
  console.log(nuevoSalario);
  return nuevoSalario;
}

//! ANALISIS EMPRESARIAL

const empresas = {};
for(persona of salarios){
  for(trabajo of persona.trabajos){
    if(!empresas[trabajo.empresa]){
      empresas[trabajo.empresa] = {};
    }
    if(!empresas[trabajo.empresa][trabajo.year]){
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
function analisisEmpresarial(nombreEmpresa){
  
}


function medianaEmpresaYear(nombre, year){
  if(!empresas[nombre]){
    console.warn('La empresa no existe');
    
  }else if(!empresas[nombre][year]){
    console.warn('La empresa no dio salarios ese año');
  }else{
    return Platzimath.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionEmpresa (nombre){
  if(!empresas[nombre]){
    console.warn('La empresa no existe');
  }else{
    const empresaYear = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYear.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });

  let porcentajesCrecimiento = [];
  for(let i = 1; i < listaMedianaYears.length; i++){
    const salarioActual = listaMedianaYears[i];
    const salarioPasado =listaMedianaYears[i - 1];
    const crecimeinto = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimeinto / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = Platzimath.calcularMediana(porcentajesCrecimiento);
  const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
  const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
  const nuevaMediana = ultimaMediana + aumento;
  console.log(nuevaMediana);
  return nuevaMediana;
  }
}

//? ANALISIS GENERAL

function medianaGeneral (){
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );
  //console.log(listaMedianas);
  const mediana = Platzimath.calcularMediana(listaMedianas);
  console.log(mediana);
  return mediana;
}

function medianaTop10(){
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );
  const medianasOrdenadas = Platzimath.ordenarLista(listaMedianas);
  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;
  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
  //: slice
  //: splice
  console.log(top10);

  const medianaTop10 = Platzimath.calcularMediana(top10);
  console.log(medianaTop10);
}