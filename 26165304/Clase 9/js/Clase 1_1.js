var aveo = {
    "marca"     : "Chevrolet",
    "modelo"    : "Aveo",
    "año"       : 2015,
    "precio"    : 1500,
    "mostrar"   : function(){
                    console.log("La Marca del Carro es " + this["marca"])
    },
    "aumento"   : function(aumentar){
                    this.precio += aumentar
    },

}

console.log("El Carro es un " + aveo["modelo"] + " del " + aveo["año"])
aveo.mostrar()
console.log("El Precio Base es " + aveo.precio + "Bs.")
aveo.aumento(1000)
console.log("El Precio de Compra es " + aveo.precio + "Bs.")