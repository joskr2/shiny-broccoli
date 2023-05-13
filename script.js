
const header = document.getElementsByTagName( 'header' )[ 0 ];
const container = document.getElementsByClassName( 'contenedor' )[ 0 ];
const container2 = document.getElementById( 'subcontenedor' );
const subcontenedor2 = document.querySelector( '#subcontenedor2' );
const imagen = document.querySelector( '.imagen' );

console.log( imagen.getAttribute( 'src' ), "attr imagen" );

imagen.setAttribute( 'src', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' );

console.log( imagen.getAttribute( 'src' ), "attr imagen" );

console.log( "Innerhtml \n", header.innerHTML );

console.log( "OuterHtml \n", header.outerHTML );

subcontenedor2.textContent = "Hola amigos de codiGo!";

console.log( header, container, container2, subcontenedor2 );

console.log( "clases de la etiqueta imagen", imagen.classList.value );

// header.style.backgroundColor = "skyblue";
// header.style.height = "100px";
// header.style.width = "100%";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// header.style.flexDirection = "column";

let numero = 1;

if ( numero === 0 ) {
  console.log( "numero es igual a 0" );
} else if ( numero === 1 ) {
  header.style.cssText = "background-color: skyblue; height: 100px; width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; font-size: 20px; color: white;font-weight: bold;";
}


const urlImagen = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";


if ( urlImagen.includes( "google" ) ) {
  imagen.setAttribute( 'src', urlImagen );
  imagen.style.width = "200px";
  imagen.style.height = "200px";
  imagen.style.borderRadius = "50%";
  imagen.style.border = "5px solid skyblue";
  imagen.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.75)";
}


imagen.addEventListener( 'click', event => {
  console.log( event );
  console.log( "click en la imagen" );
  imagen.style.display = "none";
  // alert( "Mi imagen desaperecio!!" );
} )

// imagen.addEventListener( 'mouseover', event => {
//   console.log( event );
//   console.log( "mouse sobre la imagen" );
//   imagen.style.border = "5px solid red";
//   alert( "Mi imagen tiene un borde rojo!!" );
// } )

window.addEventListener( "keypress", event => {
  console.log( String.fromCharCode( event.keyCode ) );
} )

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'c') {
    event.preventDefault();
  }
})

// function insertarDespuesDe(nodoReferencia, nuevoNodo) {
//   nodoReferencia.parentNode.insertBefore(nuevoNodo, nodoReferencia.nextSibling);
// }

// insertarDespuesDe(imagen, footer);


// const footer = document.createElement("footer");
// footer.textContent = "Hola, soy el footer";

 let body = document.querySelector("body");

// body.insertBefore(container, body.lastChild);

// body.appendChild(container2);
// body.appendChild(footer);

console.log("padre del elemento header", header.parentNode);

const listDesordenada = document.createElement("ul");

for(let i = 0 ; i < 5 ; i++){
  let listElement = document.createElement("li");
  listElement.textContent = `Elemento ${i}`;
  listDesordenada.appendChild(listElement);
}

body.insertBefore(listDesordenada, body.lastChild);

listDesordenada.removeChild(listDesordenada.childNodes[2]);

listDesordenada.childNodes.forEach(element => {
  console.log(element.textContent,"elemento");
});
console.log("lista  desordenada", listDesordenada.childNodes);