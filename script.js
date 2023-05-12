
class Carro {
  marca = ""
  modelo = ""
  color = ""
  anho = ""

  constructor( marca, modelo, color, anho ) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anho = anho;
  }


  acelerar() {
    console.log( "Acelerando" );
  }

  frenar() {
    console.log( "Frenando" );
  }
}

class CarroAutomatico extends Carro {
  constructor( marca, modelo, color ) {
    super( marca, modelo, color );
    this.anho = 1998;
  }

  parqueoAutomatico() {
    console.log( "Estacionando" );
  }

}


let toyota = new Carro( "Toyota", "Corolla", "Rojo", 2019 );
let honda = new Carro( "Honda", "Civic" );

let telsa = new CarroAutomatico( "Tesla", "bochito", "marron" )

// console.log( toyota );

// telsa.parqueoAutomatico();

// console.log( telsa.anho );


class Persona {
  nombre = ""
  apellido = ""
  edad = 0

  constructor( nombre, apellido, edad ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }


  saludar() {
    console.log( "Hola, mi nombre es " + this.nombre + " " + this.apellido );
  }
  saludar( veces ) {
    for ( let i = 0; i < veces; i++ ) {
      console.log( "Hola, mi nombre es " + this.nombre + " " + this.apellido );
    }
  }
  saludar( veces, saludo ) {
    for ( let i = 0; i < veces; i++ ) {
      console.log( saludo + ", mi nombre es " + this.nombre + " " + this.apellido );
    }
  }
}

// let juan = new Persona( "Juan", "Perez", 30 );
// juan.saludar( 5, "Heyy hola !! " );



class Mamifero {
  nombre = ""
  edad = 0
  color = ""
  patas = true

  constructor( nombre, edad, color ) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
  }

  comer() {
    console.log( "Comiendo" );
  }

  dormir() {
    console.log( "Durmiendo" );
  }
}


class Perro extends Mamifero {
  
  esFiel = true
  constructor( nombre, edad, color , esFiel ) {
    super( nombre, edad, color );
    this.esFiel = esFiel;
  }

  ladrar() {
    console.log( "Ladrando" );
  }
}

let firulais = new Perro( "Firulais", 5, "Cafe", false );

firulais.patas = false;

console.log( firulais );
console.log( firulais.esFiel );