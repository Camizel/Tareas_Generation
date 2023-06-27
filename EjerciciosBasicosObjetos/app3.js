//Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Mostrar por consola.

// Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).

const producto = {
    precio: 4000,
    descuento: 0.10,
    neto: function(){
        const descuento = (this.precio - (this.precio * this.descuento));
        console.log(`El precio final es de ${descuento}`);
    }
}
producto.neto();