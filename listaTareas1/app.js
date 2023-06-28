
// Funcionalidades:
// 1. Recibir el valor de la nueva tarea por input text. El campo debe mostrar un placeholder de identificación.
// 2. Agregar la tarea a la lista al presionar un botón.
// 3. Listar las tareas en una lista ordenada y las nuevas tareas deben aparecer a medida se agregan.
// 4. Botón para borrar todas las tareas.
// 5. Desplegar un mensaje de advertencia si se presiona el botón de agregar tareas si el campo está vacío.
// 6. El input debe limpiarse al presionar el botón de agregar.
// 7. Estilos quedan a criterio del grupo.

const formulario = document.querySelector('#formulario');
const inputNombreTarea = document.querySelector('#nombreTarea');
const botonBorrar = document.querySelector('#btnBorrar');
const listaFinal = document.querySelector('#lista')
const listaOrdenada = document.createElement('OL')

formulario.addEventListener('submit', () => {
  const valor = inputNombreTarea.value;

  if(valor != ''){
    const elementoLi = document.createElement('LI');
    elementoLi.textContent = valor;
    listaOrdenada.appendChild(elementoLi);
    listaFinal.appendChild(listaOrdenada);
} else {
    alert('El campo esta vacio');
}
inputNombreTarea.value = '';
});

botonBorrar.addEventListener('click', () => {
   while(listaOrdenada.firstChild){
    listaOrdenada.removeChild(listaOrdenada.firstChild);
   }

});
