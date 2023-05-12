// string -> cadeno de texto
// number -> numero
// boolean -> true or false
// object -> objeto

// null -> nulo
// undefined -> indefinido

// array -> lista(coleccion de elementos)
// function -> funcion
// objeto literal -> objeto con propiedades y valores


let nombre = "Juan";

let edad = 30;

let sueldo = 1.20;

let hijos = false;

let objetoPersona = {
  nombre: "Juan",
  edad: 30,
  hijos: false,
  sueldo: 1.20,
  direccion: {
    pais: "Costa Rica",
    ciudad: "San Jose",
    edificio: {
      nombre: "Edificio principal",
      telefono: "2222-3333"
    }
  }
};

let ausenciaDeValor = null;

let valorIndefinido = undefined;

let arrayNumeros = [ 1, 2, 3, 4 ];

let miFuncionAnonimaEnFormaDeExpresion = function () {
  console.log( "saludos desde mi funcion" );
}

function miFuncionEnFormaDeDeclaracion() {
  console.log( "saludos desde mi funcion" );
}

const miFuncionEnFormaDeFlecha = () => {
  console.log( "saludos desde mi funcion" );
}

// condicionales 

// truty -> true
// falsy -> false

let valorTruty = "cadena";
let valorFalsy = undefined;

let comparacionDeValores = "23" > "";

console.log( comparacionDeValores );


let dia = 28

let mes = "julio"

if ( dia === 28 && mes === "julio" ) {
  console.log( "Feliz Aniversario Peru" )
} else {
  console.log( "Hoy no es tu aniversario" )
}

let miAniversario = dia === 28 && mes === "julio" ? "Feliz Aniversario Peru" : "Hoy no es tu aniversario";


if ( dia === 28 && mes === "julio" ) {
  // console.log( "Feliz Aniversario Peru" )
} else if ( dia === 4 && mes === "julio" ) {
  // console.log( "Hoy no es tu aniversario USA" )
} else {
  // console.log( "Hoy no es tu aniversario" )
}

let miAniversario2 = dia === 28 && mes === "julio" ? "Feliz Aniversario Peru" : dia === 4 && mes === "julio" ? "Feliz Aniversario USA" : "Hoy no es tu aniversario";

// bucles 

// for

let arrayDeCalificaciones = [ 10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 100, 10 ];
let sumaTotal = 0;

for ( let posicion = 0; posicion <= arrayDeCalificaciones.length - 1; posicion++ ) {
  // console.log( arrayDeCalificaciones[ posicion ] );
}


// while 

let numeroRandom = Math.floor( Math.random() * 50 );
let contador = 0;

// while ( numeroRandom !== 10 ) {
//   contador++;
//   numeroRandom = Math.floor(Math.random() * 50);
// }

// do while

do {
  numeroRandom = Math.floor( Math.random() * 50 );
  contador++;
} while ( numeroRandom !== 10 );

console.log( `El numero random es ${numeroRandom} y se encontro en ${contador} intentos` );


// map , filter y reduce 

let arrayDePersonas = [
  {
    nombre: "Pedro",
    edad: 30,
    asistencia: true,
    colaboracion: 10
  },
  {
    nombre: "Martin",
    edad: 30,
    asistencia: false,
    colaboracion: 30
  },
  {
    nombre: "Rosa",
    edad: 30,
    asistencia: true,
    colaboracion: 50
  },
  {
    nombre: "Andrea",
    edad: 30,
    asistencia: false,
    colaboracion: 10000
  }
];

let filtrarAisistencia = arrayDePersonas.filter( ( persona ) => {
  // return persona.asistencia === true;

  if ( persona.asistencia === true ) {
    // console.log( persona, "Si me inivitaron !! " )
    return persona;
  }
} );

let frasesDeBienvenida = filtrarAisistencia.map( ( persona, index ) => {
  // console.log( persona,index + 1 , "Estoy dentro del array de personas")
  return `Bienvenida/o  a mi fiesta ${persona.nombre} , para mayores de ${persona.edad} años`
} )

// let miRecaudacion = filtrarAisistencia.reduce( ( acumulador, persona ) => {
//   return acumulador + persona.colaboracion;
// }, 0 );

let miRecaudacion = filtrarAisistencia.reduce( function ( cajaChica, persona ) {
  return cajaChica + persona.colaboracion;
}, 0 );



console.log( miRecaudacion > 50 ? "La fiesta fue un exito" : "La fiesta fue un fracaso" );


frasesDeBienvenida.forEach( ( frase, posicion ) => {
  console.log( posicion + 1, frase )
} )


// for(let posicion = 0; posicion < frasesDeBienvenida.length; posicion++){
//   console.log( posicion+1,frasesDeBienvenida[posicion] )
// }






