// BOTONES AGREGAR
const botonesAgregar =
document.querySelectorAll('.btn-agregar');


// LISTA CARRITO
const listaCarrito =
document.querySelector('#lista-carrito');


// TOTAL
const total =
document.querySelector('#total');


// BADGE
const badge =
document.querySelector('#badge');


// BOTÓN VACIAR
const btnVaciar =
document.querySelector('#btn-vaciar');


// MENSAJE VACÍO
const mensajeVacio =
document.querySelector('#msg-vacio');



// VARIABLES
let cantidadItems = 0;

let totalAcumulado = 0;



// ACTUALIZAR BADGE
function updateBadge(){

  badge.textContent = cantidadItems;

}



// ACTUALIZAR TOTAL
function updateTotal(){

  total.textContent =
  '$' +
  totalAcumulado.toLocaleString('es-CO');

}



// AGREGAR PRODUCTO
function agregarAlCarrito(nombre, precio){

  mensajeVacio.style.display = 'none';


  // CREAR LI
  const li =
  document.createElement('li');


  // CLASES
  li.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );


  // HTML
  li.innerHTML = `

    <div>

      <strong>${nombre}</strong>

      <br>

      $${Number(precio)
      .toLocaleString('es-CO')}

    </div>

    <button
    class="btn btn-danger btn-sm btn-eliminar">

      ✕

    </button>

  `;


  // AGREGAR
  listaCarrito.appendChild(li);


  // SUMAR
  cantidadItems++;

  totalAcumulado += Number(precio);


  // ACTUALIZAR
  updateBadge();

  updateTotal();



  // BOTÓN ELIMINAR
  const btnEliminar =
  li.querySelector('.btn-eliminar');


  btnEliminar.addEventListener('click', () => {

    eliminarItem(li, precio);

  });

}



// ELIMINAR PRODUCTO
function eliminarItem(li, precio){

  li.remove();


  cantidadItems--;

  totalAcumulado -= Number(precio);


  updateBadge();

  updateTotal();


  // REVISAR SI ESTÁ VACÍO
  const items =
  listaCarrito.querySelectorAll(
    'li:not(#msg-vacio)'
  );


  if(items.length === 0){

    mensajeVacio.style.display = 'block';

    listaCarrito.appendChild(
      mensajeVacio
    );

  }

}



// BOTONES
botonesAgregar.forEach((boton) => {

  boton.addEventListener('click', () => {

    const nombre =
    boton.dataset.nombre;

    const precio =
    boton.dataset.precio;


    agregarAlCarrito(
      nombre,
      precio
    );

  });

});



// VACIAR CARRITO
btnVaciar.addEventListener('click', () => {


  const items =
  listaCarrito.querySelectorAll(
    'li:not(#msg-vacio)'
  );



  items.forEach((li) => {

    li.remove();

  });



  cantidadItems = 0;

  totalAcumulado = 0;



  updateBadge();

  updateTotal();



  mensajeVacio.style.display =
  'block';

});
