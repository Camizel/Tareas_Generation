
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)



function numMayor() {
    let num1 = parseInt(prompt('Escriba un numero'));  //parse int convierte a numero el string
    let num2 = parseInt(prompt('Escriba otro numero'));

    if (num1 > num2){
        console.log(`El ${num1} es mayor`);
    }else if (num2 > num1){
        console.log(`El ${num2} es mayor`);
    } 
    else {
        console.log(`Los numeros son iguales`);
    }
}

numMayor();

