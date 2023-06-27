// Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

const numeros = [20,50,10,25,2];

function multiplicarArray(numeros){
    let numeroMayor = Math.max(...numeros);
    let numeroMenor = Math.min(...numeros);

    console.log(numeroMayor);
    console.log(numeroMenor);
    
    return numeroMayor * numeroMenor;
}

console.log(multiplicarArray(numeros));
