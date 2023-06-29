const formularioDOM = document.querySelector("#form");

/* 
evita el renderizado de la pagina  */
formularioDOM.addEventListener("submit",function(e) {
    e.preventDefault();
console.log("evento ok");
alert("se envio tu fornulario");
}); 