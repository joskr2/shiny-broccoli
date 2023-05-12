// Ejercicio de bucles:
// Escribe un bucle que imprima los números del 1 al 10 en la consola.

// for ( let i = 1; i <= 10; i++ ) {
//   console.log( i );
// }

//  Ejercicio de condicionales:
// Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar.


let numero1 = function ( numero ) {
  if ( numero % 2 === 0 ) {
    return `El ${numero} es par`
  } else {
    return `El ${numero} es impar`
  }
}

console.log( numero1( 5 ) );


// Ejercicio de map:
// Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()).


let arregloDeNumeros = [ 10, 25, 30, 41 ]

let arreglosAlCuadrado = arregloDeNumeros.map( ( elemento ) => { return elemento * elemento } )

// arreglosAlCuadrado.forEach( ( numero ) => {
//   console.log( numero )
// } )

// Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números pares.

let numerosPares = arregloDeNumeros.filter( ( numero ) => {
  if ( numero % 2 === 0 ) {
    return numero
  }
} )

numerosPares.forEach( ( numero ) => {
  console.log( numero )
} )

// Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método reduce para calcular la suma de todos los elementos del arreglo.

let sumaNumeros = arregloDeNumeros.reduce( ( acumualdor, numero ) => {
  return acumualdor += numero
},0 )

console.log(sumaNumeros)
