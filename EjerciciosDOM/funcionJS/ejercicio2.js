// Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario.
// Imprime los nombres en la consola.

const formulario = document.querySelector('#form1')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')

formulario.addEventListener('submit',  (e) => {
  e.preventDefault();
 console.log(`el nombre es ${nombre.value} y su apellido ${apellido.value}`);
 
})