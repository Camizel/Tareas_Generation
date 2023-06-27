//Crea un objeto con las propiedades: nombre, apellido, edad, email, dirección y muestra los valores de cada propiedad. (por consola).

const persona = {
    nombre: 'Camila',
    apellido: 'Munoz',
    edad: '24',
    email: 'munozp.camila98@gmail.com',
    direccion: 'avenida xx',
    mostrarInfo: function(){
        console.log(`el nombre de la persona es ${this.nombre}, el apellido es ${this.apellido}, su edad es ${this.edad}, su correo es${this.email}, su direccion es ${this.direccion}`);
    }
}
persona.mostrarInfo()