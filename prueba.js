/* 
class Producto {
    constructor (id,modelo,precio,caracteristica,){

    this.id = id
    this.modelo = modelo
    this.precio = parseInt(precio)
    this.caracteristica = caracteristica
    this.info = `Productos para su adquisicíon:\nIdentificacion: ${id}\nModelo: ${modelo}\nPrecio: ${precio}\nDescripcíon: ${caracteristica}`
    }

    info(){
        alert(this.info)
    }

}

const argBD = [];

argBD.push(new Producto("1","Mate","50","a"))
argBD.push(new Producto("2","Dulce de Leche","60","a"))
argBD.push(new Producto("3","Alfajor Entre Dos","70","a"))
argBD.push(new Producto("4","Vino","20","a"))


argBD.info()
     */

/* class Producto {
    constructor(nombre,modelo,precio,caracteristica){
        this.id = nombre
        this.id = modelo
        this.id = parseInt(precio)
        this.id = caracteristica
        
    }
}


const argProd = []

let seguirComprando = true
while(seguirComprando){
    let argproducto = new Producto("1","Mate","50","a");
    let argproducto1 = new Producto("2","Dulce de Leche","60","a");
    let argproducto2 = new Producto("3","Alfajor Entre Dos","70","a");
    let argproducto3 = new Producto("4","Vino","20","a");
    argProd.push(argproducto);
    argProd.push(argproducto1);
    argProd.push(argproducto2);
    argProd.push(argproducto3);
    
    let finalizaCompra = parseInt(prompt("1 si, 2 no"))
    if(finalizaCompra == 2){
        seguirComprando = false;
    }
}

function mostrarProductos(){
    for(producto of argProd){
        alert(producto)
    }
}
  */


const argProductos = [
    {id: 1, nombre: "Mate",modeloMarca: "camba", precio: 10, caracteristica: " Rico"},
    {id: 2, nombre: "Dulce de Leche",modeloMarca: "camba", precio: 20, caracteristica: " .." },
    {id: 3, nombre: "Alfajor",modeloMarca: "camba", precio: 30, caracteristica: " .." },
    {id: 4, nombre: "Vino",modeloMarca: "camba", precio: 40, caracteristica: " .." },

];

const argCarritoProd = []

let argSeleccionProd = prompt(`Bienvenido! quisiera comprar algun producto durante su visita?\n1) Si.\nProcedemos a mostrar una lista de disponibilidad\n2) No.\nLamentamos que no pueda llevarse ningun recuerdo, hasta pronto!.`)
while(argSeleccionProd){
    if (argSeleccionProd == 1){
        alert("A continuacion nuestras lista de productos")
        let argListaProductos = argProductos.map( /* Cambiar por `` y utilizar ${} como el ejemplo de abajo */
            (el) => `\nId: ${el.id}\nProducto: ${el.nombre}\nModelo: ${el.modeloMarca}\nPrecio:$ ${el.precio}\nCaracteristicas: ${el.caracteristica}\n`
        );
        alert(argListaProductos.join(" - "))
        break
    }else if (argSeleccionProd == 2){
        alert("Gracias por viajar con nosotros igualmente! un placer")
        break
    }
}

while(argSeleccionProd == 1){
    let producto = prompt("A continuacion puede agregar algun producto segun su nombre:\n1) Mate.\n2)Dulce de Leche.\n3)Alfajor.\n4)Vino.")
    let precio = 0
    if(producto == "Mate"|| producto == "Dulce de Leche" || producto == "Alfajor" || producto == "Vino"){
        switch(producto){
            case "Mate":
                precio = 10
                break;
            case "Dulce de Leche":
                precio = 20
                break;
            case "Alfajor":
                precio = 30
                break;
            case "Vino":
                precio = 40
                break;   
            default:
                break;           
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))
    argCarritoProd.push({producto,precio,unidades})

    }else{
        alert("Error! El producto seleccionado no se encuentra en la lista de disponibilidad\nAtencion! Verique que el nombre del producto haya sido escrito correctamente")
    }
    
    argSeleccionProd = parseInt(prompt("¿Desea seguir comprando algun otro producto de su interes?:\n1) Si.\n2) No."))
    while(argSeleccionProd == 2){
        alert("Gracias por la compra,que disfrute su estadia.")
        argCarritoProd.forEach((el) => {
            alert(`Producto: ${el.producto}\nUnidades: ${el.unidades}\nEl total a pagar es = ${el.precio * el.unidades}`)
            const total = argCarritoProd.reduce((acc,el)=>acc + el.precio * el.unidades,0)
            alert(`La suma total de los productos seleccionados son: $ ${total} pesos `)
        })
    break;    
    }
    
}
