class Cliente {
    constructor(nombre,apellido,edad,dni,telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.dni = dni
        this.telefono = telefono
    }
    datosDelCliente(){
        const selectFCont = new Continentes()
        this.nombre = prompt("Ingrese su nombre completo")
        this.apellido = prompt("Apellido/s")
        this.edad = parseInt(prompt("Edad"))
        this.dni = parseInt(prompt(`DNI (sin utilizar " . " para la separacion de numeros)`))
        this.telefono = parseInt(prompt("Telefono Fijo o Celular"))
        let editarDatos = prompt("Esta conforme con los datos dados?: 1-Si , 2-No")
        while(editarDatos){
            if(editarDatos == 1){
                cliente.mostrarInfo()
                alert("Sigamos nuestro recorrido en su eleccion de destino arribar")
                selectFCont.mostrarInfo()
                america.continenteInfo()
                asia.continenteInfo()
                africa.continenteInfo()
                europa.continenteInfo()
                oceaniaAustralia.continenteInfo()
                selectFCont.selectCont()
                break;
            }else{
                alert("Volvamos a editar")
                editarDatos=("a continuacion ingresaremos los datos nuevamente!")
            }
        
                
        alert("Debido a modificaciones de datos recientes, debera ingresar a la pagina luego de 5(cinco) minuos \n para poder seguir recorriendo nuestras opciones turisticas \Gracias por viajar con nosotros!");
        break;
                
        }

    }
    mostrarInfo(){
        return alert(`
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Telefono: ${this.telefono}
        `)

        /* return document.write(
        `
        Nombre: <b>${this.nombre}</b></br>
        Apellido: <b>${this.apellido}</b></br>
        Edad: <b>${this.edad}</b></br>
        DNI: <b>${this.dni}</b></br>
        Telefono: <b>${this.telefono}</b></br>
        `   
        ) */
    }
}

class Continentes {
    constructor(nombre,ubicacion,clima,religion){
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.clima = clima
        this.religion = religion
        this.info =`${nombre}, se ubica en ${ubicacion} con un clima ${clima}. Lo interesante es la religion predominante que es ${religion}.`
    }
   
    mostrarInfo(){
        alert("A continuacion mostraremos las descripciones generales de los continentes a elegir")
    }   
    continenteInfo(){
        alert(this.info)
    } 
    selectCont(){
        let opcionesCont = parseInt(prompt("??Cual quiere que sea su destino? Seleccione seg??n n??mero: \n 1: America \n 2: Asia \n 3: Africa \n 4: Europa \n 5: Oceania/Australia"))
        switch(opcionesCont){
            case 1:
                alert("Perfecto! Tenemos disponibilidad Argentina para su destino, a continuacion daremos detalles de este hermoso pais!")
                argentina.paisesInfo()
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
                    
                    argSeleccionProd = parseInt(prompt("??Desea seguir comprando algun otro producto de su interes?:\n1) Si.\n2) No."))
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
                
                break;
            case 2:
                alert("Muy buena opcion!, Japon se encuentra disponible para su visita, a continuacion daremos detalles de este hermoso pais!")
                japon.paisesInfo() 
                break;
            case 3:
                alert("Un Safari nos espera!, Sudafrica ser?? el destino rodeado de gran flora y fauna,a continuacion daremos detalles de este hermoso pais! ")
                sudafrica.paisesInfo()
                break;
            case 4:
                alert("Francia,el lugar del amor, de una de las gastronomia mas alta del mundo, a continuacion daremos detalles de este hermoso pais! ")
                francia.paisesInfo()
                break;
            case 5:
                alert("La preservacion es nuestro lema, iniciara un viaje a Australia para quedar maravillado con sus costumbres,a continuacion daremos detalles de este hermoso pais!")
                australia.paisesInfo()
                break;
            default:
                alert("Ha ingresado un numero erroneo al lugar del destino correspondiente \nPor favor prestar atencion a las opciones.")
                let releccion = prompt("Quiere volver elegir su lugar de destino?\n 1 - Si \n 2 - No")
                if(releccion == 1){
                let opcionesCont = parseInt(prompt("??Cual quiere que sea su destino? Seleccione seg??n n??mero: \n 1: America \n 2: Asia \n 3: Africa \n 4: Europa \n 5: Oceania/Australia"))
                switch(opcionesCont){
                    case 1:
                        alert("Perfecto! Tenemos disponibilidad Argentina para su destino, a continuacion daremos detalles de este hermoso pais!")
                         argentina.paisesInfo()
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
                            
                            argSeleccionProd = parseInt(prompt("??Desea seguir comprando algun otro producto de su interes?:\n1) Si.\n2) No."))
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
                        
                        break;
                    case 2:
                        alert("Muy buena opcion!, Japon se encuentra disponible para su visita, a continuacion daremos detalles de este hermoso pais!")
                         japon.paisesInfo() 
                        break;
                    case 3:
                        alert("Un Safari nos espera!, Sudafrica ser?? el destino rodeado de gran flora y fauna,a continuacion daremos detalles de este hermoso pais! ")
                        sudafrica.paisesInfo()
                        break;
                    case 4:
                        alert("Francia,el lugar del amor, de una de las gastronomia mas alta del mundo, a continuacion daremos detalles de este hermoso pais! ")
                        francia.paisesInfo()
                        break;
                    case 5:
                        alert("La preservacion es nuestro lema, iniciara un viaje a Australia para quedar maravillado con sus costumbres,a continuacion daremos detalles de este hermoso pais!")
                        australia.paisesInfo()
                        break;
                    default:
                        alert("La opcion no corresponde a ninguna de las expuesta \n Lo esperamos nuevamente, hasta luego!") 
                        break;
                    }
                }else{
                    alert("Lamentamos que ningun destino le haya interesado! hasta la proxima!")
                    break;
                }
        }    
    }

} 

    
class Paises extends Continentes{
    constructor(pais,ubicacion,cultura,tradiciones,cocina,excursiones){
    super (ubicacion);
    this.pais = pais
    this.cultura = cultura
    this.tradiciones = tradiciones
    this.cocina = cocina
    this.excursiones = excursiones
    this.info = `PAIS: ${pais}\nUBICAC??ON: ${ubicacion}\nCULTURA: ${cultura}\nTRADICIONES: ${tradiciones}\nGASTRONOMIA: ${cocina}\nEXCURSIONES: ${excursiones}`
    }
    paisesInfo(){
        alert(this.info)
    }
}


/* --------Constantes---------- */

const america = new Continentes("America","a","b","c")
const asia = new Continentes("Asia","a","b","c")
const africa = new Continentes("Africa","","","");
const europa = new Continentes("Europa","","","");
const oceaniaAustralia = new Continentes("Oceania/Australia","","","");

const argentina = new Paises(
    "Argentina",
    "random",
    "La cultura de Argentina es el resultado de una interesante mezcla de culturas ind??genas, europeas y afroamericanas. De all?? que a menudo sea definido como un pa??s multicultural y multi??tnico.",
    "El tango, el f??tbol, el asado y el mate son sus se??as de identidad m??s caracter??sticas y entre las costumbres de Argentina encontramos un amplio folklore lleno de fiestas y tradiciones",
    "Asado - El asado es el plato insignia de argentina, proveniente de llanura pampeana donde m??s que una comida t??pica, hacer asados se convierte en todo un ritua /// Locro - El locro es una especie de sopa espesa y abundante hecha de ma??z, porotos, papas y zapallo con alg??n tipo de carne y condimentada con comino, laurel, ajo, perejil y otras hierbas, aunque la receta puede cambiar seg??n la tradici??n de cada provincia argentina.",
    "Senderismo Reserva Natural de Villavicencio - Bodegas de Luj??n de Cuyo - Paseo Ecol??gico - Gom??n Cataratas",
    )
const japon = new Paises(
    "Japon",
    "random",
    "Se caracteriza por una lengua propia, religiones propias y tradiciones propias, pero amalgamadas en un complejo proceso de sincretismo a lo largo de los siglos.",
    "Kimonos, sake, caligraf??a, arreglo floral, son algunos de los conceptos que definen la tradici??n japonesa. Muchas de estas artes, como la ceremonia del t??, fueron introducidas a Jap??n desde China, pero los japoneses han sabido transformarlas y darles unas caracter??sticas propias.",
    "Gyoza - empanadillas japonesas rellenas normalmente de cerdo y verduras. Originalmente de China /// Teriyaki - carne, pescado, pollo o vegetales a la plancha, a la parrilla o fritos en sart??n glaseado con salsa de soja endulzada. /// Sushi es arroz al vinagre acompa??ado o mezclado con diversos ingredientes frescos, normalmente pescado o marisco.",
    "Tour por Asakusa en kimono. V??stete con un kimono tradicional japon??s y disfruta de esta visita guiada por Asakusa, un conocido distrito de Tokio famoso por sus preciosos templos. - Visita guiada por Harajuku, Shibuya y Omotesando. Con este tour recorrer??s Harajuku, Shibuya y Omotesando, tres barrios de Tokio donde poder descubrir la ancestral cultura nipona, sus tradiciones y costumbres, y disfrutar adem??s de una arquitectura fascinante.  /// Visita guiada por el barrio de Akihabara. Tiendas de manga y anime, disfraces cosplay, videojuegos??? Recorre el barrio de Akihabara en busca de las mejores tiendas de electr??nica y tiendas m??s frikis de Tokio.",
)
const sudafrica = new Paises(
    "Sudafrica.",
    "random",
    "Es rica su tradici??n en poes??a oral y m??sica.",
    "Poseen ataudes tematicos en forma de leon,cebra,elefantes entre otros celebrando el funeral lleno de color y como un acto de alegr??a hacia qui??n fue la persona en vida./// Escupir para bendecir: usa los escupitajos al estrechar la mano de un anciano en se??al de respeto y escupen a los reci??n nacidos para bendecirles./// Saltar un toro: hace que los ni??os peque??os corran, salten y sobrepasen un toro para demostrar su hombr??a. Van practicando hasta poder saltar varios toros de una sola vez y adem??s suelen hacerlo desnudos.",
    "1) Boerewors: una salchicha que tradicionalmente se ha sometido a braai (barbacoa). - 2) Bunny chow: es una especie de pan relleno de curry. - 3) Biltong: carne curada en salaz??n (similar a una carne seca).",
    "Caza en Sud??frica - Safaris de Caza en Limpopo, ??frica o Safaris fotograficos en la reserva.",   
    )
const francia = new Paises(
    "Francia",
    "random",
    "La cultura en Francia son sus calles, sus museos, las decenas de exposiciones, de conciertos, operas, obras de teatro y miles de peque??as manifestaciones, encuentros, conferencias, exposiciones, muestras que en cualquier ciudad ser??an un acontecimiento.",
    "Tiene valiosas tradiciones, entre ellas la gastronom??a, en la que destacan sus quesos y vinos, al igual que la Alta costura y algunas otras tradiciones relacionadas con el lujo.",
    "Empezamos con este delicioso plato de pel??cula, el Ratatouille, tra??do desde la preciosa regi??n de la Provenza, y, utilizado tanto de guarnici??n como de primer plato, como pudimos comprobar en la preciosa localidad de Aix-en-Provence. /// El confit de Canard, un tierno muslo de pato que se deshace en la boca, despu??s de haberlo salado y cocinado a fuego lento con su propia manteca durante 3 ?? 4 horas /// Coq au Vin o pollo estofado con vino tinto, proveniente de la regi??n de Occitania.",
    "Crucero tur??stico y cena gourmet por el r??o Sena en Bateaux Parisiens - Crucero tur??stico y cena gourmet por el r??o Sena en Bateaux Parisiens - Crucero nocturno con cena y m??sica en vivo por el r??o Sena en Par??s con Bateaux Mouches",
)
const australia = new Paises(
    "Australia",
    "random",
    "Los aussies, como se conoce a los nativos australianos, son personas s??per amables,ademas es un pa??s que se caracteriza por abrigar a muchas culturas en un solo lugar; Finalmente, Australia es uno de los pa??ses con una cultura fuertemente marcada de comida org??nica",
    "Una de las tradiciones australianas por excelencia es el d??a de Australia. Cada 26 de enero, las ciudades de Australia se llenan de banderas y fiesta para conmemorar la llegada de los brit??nicos en 1787. Durante todo el d??a, se organizan barbacoas en los parques y playas, y hay muchos fuegos artificiales.",
    " BARBACOA AUSTRALIANA /// POLLO A LA PARMESANA: Es un filete de pollo empanado sobre el que se pone jam??n, salsa napolitana y un trozo de queso fundido /// Estos bizcochos emblem??ticos con forma de cubo est??n recubiertos por una capa de glaseado de chocolate y coco rallado, y merecen el t??tulo de ??el pastel nacional de Australia??",
    "Crucero de submarinismo y esn??rquel en la Gran Barrera de Coral desde Cairns - Ruta ecotur??stica en grupo peque??o por la Gran Carretera Oce??nica desde Melbourne - Tour de d??a completo en Blue Mountains: Three Sisters, Scenic World y Featherdale ",

)

/* ----------------------------------------COMIENZA LA EJECUCION DEL PROGRAMA--------------------------------------------- */

alert("Bienvenidos al sistema de viaje CAMBA! \nPuede elegir su destino favorito dentro del MUNDO! teniendo en cuenta sus gustos! \nVamos a requerir algunos datos para completar el registro; a continuacion podr?? brindarlos")

const cliente = new Cliente()
cliente.datosDelCliente()
