// Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].
const numeros1 = [5,6,50,25,2,9,8]
const numeros2 = [7,8,10]


function funcionArray(arr, arr2){
    let resultado = [...arr, ...arr2];
    return resultado.map(result =>{ //con map se pueden hacer cosas dentro de un arreglo
        return result * 2
    })
}
console.log(funcionArray(numeros1,numeros2));
