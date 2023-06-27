
// Dado el código HTML a continuación, completarlo para que cuando se rellenen los campos de nombre y apellido y hacer clic en “enviar datos”, aparezca por pantalla el texto

//«hola nombre apellido, gracias por rellenar el formulario»


const formulario = document.querySelector('#formulario');
const btn = document.querySelector('#btn');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;

    const apellido = document.querySelector('#apellido').value;

    const saludo = document.querySelector('#saludo');

    saludo.textContent = `Hola ${nombre} ${apellido}, gracias por rellenar el formulario`;

})

