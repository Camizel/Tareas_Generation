// Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

const numeros1 = [5,6,50,25,2,9,8]
const numeros2 = [7,8,10]

function booleanoArray(arr, arr2){
    let resultado = [...arr, ...arr2];
    if(resultado.length >= 10){
        return true;
    }else{
        return false;
    }
}

console.log(booleanoArray(numeros1,numeros2));

