// Escriba una función con el nombre de esVocal() que tome un carácter, devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario

function esVocal(caracter) {
    let vocal = caracter.toLowerCase();
    if (vocal.length == 1){
    if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
      console.log('El caracter que introdujo si es vocal (true)');
    } else {
      console.log('El caracter que introdujo no es vocal (false)');
    }
    }else {
        console.log('introdujo mas de un caracter, vuelva a intentarlo solo con uno');
    }
}
  console.log(esVocal('i'));
  