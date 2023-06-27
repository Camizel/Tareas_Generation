//Escribe un programa que pida un número y diga si es divisible por 2(consola)

function divisiblePor(){
    let num1 = parseInt(prompt('Escriba un numero'));

    if (num1 % 2 === 0){
        console.log(`El nmumero ${num1} es divisible por 2`);
    } else {
        console.log(`El numero ${num1} no es divible por 2`);
    }
}

divisiblePor();