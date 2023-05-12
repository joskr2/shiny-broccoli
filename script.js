//operador rest ( ... ) -> palabra clave : contraer, junatre muchos valores en un solo valor(array)

function sumar( ...numeros ) {
  let resultado = 0;
  for ( let numero of numeros ) {
    resultado += numero;
  }
  return resultado;
}

let conjuntoDeNumeros = []
console.log( sumar( 1, 2, 3, 4, 5 ) ); // Salida: 15

// operador spread ( ... ) -> palabra clave : expandir, expandir un array en muchos valores

const numeros = [ 1, 2, 3, 4, 5, 9, -6, 9.8 ];
console.log( ...numeros ); // Salida: 1 2 3 4 5 9 -6 9.8

let nuevoArray = [ ...numeros, 10, 20, 30, 40, 50 ];

console.log( nuevoArray ,"spread operator para la copia"); // Salida: [1, 2, 3, 4, 5, 9, -6, 9.8, 10, 20, 30, 40, 50]