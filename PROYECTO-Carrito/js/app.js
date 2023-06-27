// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    // cuando agregas un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);
}

// FUNCIONES
function agregarCurso(e){
    e.preventDefault(); //es para evitar que se vaya hacia arriba la pagina al apretar el boton
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// lee el contenido del html al que le dimos click y extrae la info del curso

function leerDatosCurso(curso){
    // console.log(curso);

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    console.log(infoCurso);
    
    // agrga elemntos al arreglo del carrito

    articulosCarrito = [...]
}