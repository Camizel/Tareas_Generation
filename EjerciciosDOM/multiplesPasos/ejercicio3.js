
// Seleccione la sección con una identificación de contenedor sin usar querySelector.
const sinQuerySelector = document.getElementById('container');

// Seleccione la sección con una identificación de contenedor usando querySelector.
const conQuerySelector = document.querySelector('#container');

// Seleccione toda la lista de elementos con una clase de "second".
const conClaseSecond = document.querySelectorAll('.second');

// Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de la lista dentro de la etiqueta ol.
const conClaseThird = document.querySelector('#container ol .third ');

// Agregar el texto "¡Hola!" a la sección con un ID de contenedor.
const saludoH1 = document.createElement ('H1');
conQuerySelector.textContent = 'hola';

conQuerySelector.appendChild(saludoH1);

// Agregar una clase que se llame principal al div  de pie de página.
footer.classList.add('principal');
console.log(footer);

// Elimine la clase principal en el div con una clase de pie de página.
footer.classList.remove('principal');
console.log(footer);

// Crea un nuevo elemento li.
const elementoLi = document.createElement('LI');

// Dale al li el texto "cuatro".
elementoLi.textContent = 'cuatro';

// Agregue el li al elemento ul.
const containerUl = document.querySelector('#container ul');
containerUl.appendChild(elementoLi);