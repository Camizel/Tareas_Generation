// Modificar el estilo del texto del párrafo mediante código javascript. Ejemplo de archivo HTML:
// Al hacer clic en el botón, la fuente, el tamaño de fuente y el color del texto del párrafo deben cambiar.
const parrafo = document.querySelector('#text')
const btn = document.querySelector('#jsstyle')

btn.addEventListener('click', cambiarEstilos)

function cambiarEstilos(){
  parrafo.style.fontFamily = 'Lucida Sans Regular'
  parrafo.style.fontWeigh = 'bold'
  parrafo.style.fontSize = '20px'
  parrafo.style.color = 'violet';
}