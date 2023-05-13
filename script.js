// Obtener referencias a los elementos del DOM
const todoForm = document.getElementById( "todo-form" );
const todoInput = document.getElementById( "todo-input" );
const todoList = document.getElementById( "todo-list" );
const addElement = document.getElementById( "Agregar" )
const agregarElemento = event => {
  // event.preventDefault();
  const tarea = todoInput.value;
  console.log( tarea );

  if ( tarea !== "" ) {
    const li = document.createElement( "li" );
    li.textContent = tarea;

    const deleteBtn = document.createElement( "button" );

    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add( "delete-btn" );

    deleteBtn.addEventListener( "click", function () {
      li.remove();
    } );

    li.appendChild( deleteBtn );
    todoList.appendChild( li );

    todoInput.value = "";
  }
}

addElement.addEventListener( 'click', () => {
  agregarElemento();
  console.log( "Elemento" )
  console.log( todoList, todoList )
} )


const contenedor = document.querySelector(".contenedor");

contenedor.style.display = "flex";
contenedor.style.margin = "auto";
contenedor.style.justifyContent = "center";