'use strict';

console.log( "Hola mundo!" )


var variable = "Hola mundo!"

var numero = 10;

console.log( numero2 + "" );

var booleano = true;
let otraVariable = "Hola mundo!"

var numero2

console.log( numero2 )


const PI = 3.1416;

const NOMBRE = "Juan";


console.log( NOMBRE )


let suma = 4 + 5;

let resta = 4 - 5;

let multiplicacion = 4 * 5;

let division = 4 / 5;

let residuo = 4 % 5;


console.log( suma )




let miEdad = 18;

let edadMinima = "18";



// == // Igualdad

// === // Igualdad estricta

// que es la igualdad estricta 

console.log( miEdad == edadMinima )
console.log( miEdad === edadMinima )


// != // Diferente

console.log( miEdad != edadMinima )


// !== // Diferente estricto

console.log( miEdad !== edadMinima )


// > // Mayor que

console.log( miEdad > edadMinima )

console.log( miEdad > 18 )
console.log( miEdad >= 18 )

// < // Menor que

console.log( miEdad < edadMinima )

console.log( miEdad < 18 )
console.log( miEdad <= 18 )


// && // AND

console.log( true && true )

let a = true;
let b = false;
let and = a && b; // false
let or = a || b;  // true
let not = !a;



// condicionales 


if ( miEdad >= 18 ) {
  console.log( "Eres mayor de edad" )
} else {
  console.log( "Eres menor de edad" )
}




let x = 10;
let y = 5;
let z = 15;


// if ( x < y && y < z ) {
//   console.log( 'x es menor que y y y es mayor que z' );
// } else if ( x === 5 || y === 5 ) {
//   console.log( 'x o y es igual a 5' );
// } else {
//   console.log( 'z es falso' );
// }


let ejemplo = miEdad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";


if ( x < y && y < z ) {
  console.log( 'x es menor que y y y es mayor que z' );
} else {
  console.log( 'x o y es igual a 5' );
}

let resultado = x < y && y < z ? 'x es menor que y y y es mayor que z' : 'x o y es igual a 5';

console.log( resultado )

let dia = 1;


if ( dia === 1 ) {
  console.log( "Lunes" )
} else if ( dia === 2 ) {
  console.log( "Martes" )
} else if ( dia === 3 ) {
  console.log( "Miercoles" )
} else if ( dia === 4 ) {
  console.log( "Jueves" )
} else if ( dia === 5 ) {
  console.log( "Viernes" )
} else if ( dia === 6 ) {
  console.log( "Sabado" )
} else if ( dia === 7 ) {
  console.log( "Domingo" )
} else {
  console.log( "No es un dia de la semana" )
}

// switch

switch ( dia ) {
  case 1:
    console.log( "Lunes" )
    break;
  case 2:
    console.log( "Martes" )
    break;
  case 3:
    console.log( "Miercoles" )
    break;
  case 4:
    console.log( "Jueves" )
    break;
  case 5:
    console.log( "Viernes" )
    break;
  case 6:
    console.log( "Sabado" )
    break;
  case 7:
    console.log( "Domingo" )
    break;
  default:
    console.log( "No es un dia de la semana" )
    break;
}


// bucles 


// for

// para cantidades conocida ,(con un limite)

for ( let numero = 0; numero <= 10; numero++ ) {
  console.log( numero )
}


//while

// para cantidades desconocidas ,(sinlimite)

let num = 0;

while ( num <= 10 ) {
  console.log( num )
  num++
}



let minusculas = convertirAminusculas( "HOLA MUNDO" );

console.log( minusculas )

// hoisting

const convertirAmayusculas2 = function ( texto ) {
  return texto.toUpperCase();
}

function convertirAminusculas( texto ) {
  let textoMinusculas = texto.toLowerCase();
  return textoMinusculas;
}


const convertirAmayusculas = texto => texto.toUpperCase();



// objetos 

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 18,
  direccion: {
    calle: "Av. Siempre viva",
    numero: 123
  },
  telefono: [
    123456,
    654321
  ],
  saludar: function () {
    console.log( "Hola" )
  }
}

const miJSON = JSON.stringify( persona );


const parseToJSON = JSON.parse( miJSON );

console.log( parseToJSON )

console.log( miJSON )

console.log( persona )



// Arreglos

let arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let arreglo2 = [ "Hola", "Mundo", "Como", "Estas" ];

let arreglo3 = [ true, false, true, false, true, false, true, false, true, false ];

let arreglo4 = [ 1, "Hola", true, 4, "Mundo", false, 7, "Como", true, 10 ];

let arreglo5 = [
  {
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    nombre: "Juan",
    apellido: "Ramirez",
  },
  {
    nombre: "Pedro",
    apellido: "Perez",
  },
  {
    nombre: "Pablo",
    apellido: "Perez",
  }
]


let mapeo = arreglo5.map( ( persona, index ) => {

  console.log( persona.nombre, persona.apellido, index )

  return persona.nombre;

} )


console.log( mapeo )

let filtrado = arreglo5.filter( persona => persona.nombre === "Juan" );

console.log( filtrado )


const numbs = [ 1, 2, 3, 4 ];
const sum = numbs.reduce( ( result, item ) => result + item, 0 );
console.log( "La suma es : ",sum ); // 10


console.log(typeof(numbs))

