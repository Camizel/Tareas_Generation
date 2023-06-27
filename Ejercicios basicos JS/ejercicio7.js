
//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)
function numMayor() {
    let num1 = parseInt(prompt('Escriba un numero'));  //parse int convierte a numero el string
    let num2 = parseInt(prompt('Escriba otro numero'));
    let num3 = parseInt(prompt('Escriba otro numero'));

    if (num1 > num2 && num1 > num3){
        console.log(`De los numeros agregados ${num1},${num2},${num3} ,El ${num1} es mayor`);
    }else if (num2 > num1 && num2 > num3){
        console.log(`De los numeros agregados ${num1},${num2},${num3} ,El ${num2} es mayor`);
    } else if(num1 === num2 && num1 === num3){
        console.log(`Todos son iguales`);
    }
    else {
        console.log(`De los numeros agregados ${num1},${num2},${num3} ,El numero mayor es el ${num3}`);
    }
}
numMayor();