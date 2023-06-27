// Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales»
function numeroMayor(num1, num2, num3) {
    if (num1 > num2 && num2 > num3) {
        console.log(`el numero mayor es ${num1}`);
    }else if(num2 > num3 && num2 > num3){
        console.log(`el numero mayor es ${num2}`);
    }else if (num3 > num1 && num3 > num2){
        console.log(`el numero mayor es el ${num3}`);
    } else {
        console.log('los numeros son iguales');
    }
}

numeroMayor(50,50,50);


