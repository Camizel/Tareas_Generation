
//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)

function letraA() {
    let palabra = prompt('Escribe una frase'); //la frase que nos pasaran
    let contador = 0; 

    for (let i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) === 'a'){
            contador++;
        } 
    }
    console.log(`La letra a se encuentra ${contador} veces`);
    
}
letraA();