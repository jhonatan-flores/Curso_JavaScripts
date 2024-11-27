// crear una lista que almacene las cinco vocales y luego las muestre por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)

// //acceder a la vocal "o"
// console.log(vocales[3])

// // accediendo a los elementos con for 
// for (let i=0;i<vocales.length;i++){
//     console.log(vocales[i])
// }

// console.log(vocales.length)

// trabajo 
// tengo una lista de 7 frutas
//crear un programa que identifique si en mi lista existe naranja, de existr me mostrara su indice, de no existir me mostrara un mensaje de error.
// Lista de frutas
// let frutas = ["manzana", "pera", "plátano", "mango", "uva", "fresa", "cereza"];

// // Verificar si 'naranja' está en la lista
// let frutaABuscar = "naranja";
// let indice = frutas.indexOf(frutaABuscar);

// if (indice !== -1) {
//     console.log(`La fruta "${frutaABuscar}" se encuentra en el índice ${indice}.`);
// } else {
//     console.log(`Error: La fruta "${frutaABuscar}" no está en la lista.`);
// }

// //ejercicio
// // crear dos funciones que reciban por parametros una lista de numeros una funcion encontrara de devolvera el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista. ojo no usar los metodos de min y max.
// // Función para encontrar el número menor
// function encontrarMenor(lista) {
//     let menor = lista[0]
//     for (let i = 1; i < lista.length; i++) {
//         if (lista[i] < menor) {
//             menor = lista[i]
//         }
//     }
//     return menor
// }

// function encontrarMayor(lista) {
//     let mayor = lista[0]
//     for (let i = 1; i < lista.length; i++) {
//         if (lista[i] > mayor) {
//             mayor = lista[i]
//         }
//     }
//     return mayor
// }

// let numeros = [45, 7, 89, 3, 12, 78, 34]

// console.log("Número menor:", encontrarMenor(numeros))
// console.log("Número mayor:", encontrarMayor(numeros))

// // crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista.
// function contarVocalA(lista) {
//     let contador = 0
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === 'a') {
//             contador++
//         }
//     }
//     return contador
// }

// let letras = ['a', 'b', 'c', 'a', 'd', 'a', 'e'];
// console.log(`La vocal "a" aparece ${contarVocalA(letras)} veces.`)

// //
// let texto="hola mundo"
// //["hola","mundo"]
// let listaTexto=texto.split(" ")
// console.log(listaTexto)
// let lista=["hola","como","estas"]
// //"hola como estas"
// let nuevoTexto=lista.join(", ")
// console.log(nuevoTexto)

// //tengo la siguiente url
// // www.gatitas.com/?q=marina+gold
// // crea yn programa que me capture solo la query 
// // "marina gold"
// let url="www.gatitas.com/?q=marina+gold"
// let listaUrl=url.split("=")
// let obtenerPrimerElemento=contarUrl[1]
// let dividoTextoEnDos=obtenerPrimerElemento.split("+")
// let juntarTexto=dividoTextoEnDos.join(" ")
// // let listaUrl=Url.split("=")[1].split("+").join(" ")
// console.log(juntarTexto)
let datosJory=["jory","redrigues",20,"M"]
let datosJoryObjeto={
    nombre:"jory",
    apellido:"rodrigues",
    edad:20,
    sexo:"todos los dias",
    ganado:["el primo","los chamos","las emfermeras","mineros"],
    direccion:{
        tipoCalle:"pasaje",
        nombreCalle:"querobamba",
        numeroVivienda:222,
        numeroCuarto:5
    }
}
console.log(datosJoryObjeto.ganado)
console.log(datosJoryObjeto["sexo"])
console.log(datosJoryObjeto.ganado[3])


//ejercicio
// crear una funcion que me genere un objeto de caracteristicas tecnoicas de una computadora, el objeto debera tener como minimo los siguientes valores
// marca, modelo, procesador, ram, disco y tarjeta de video.
let datosComputadora = ["Dell", "XPS 15", "Intel Core i7", "16GB", "1TB SSD", "NVIDIA GTX 1650"];
let datosComputadoraObjeto = {
    marca: "Dell",
    modelo: "XPS 15",
    procesador: "Intel Core i7",
    ram: "16GB",
    disco: "1TB SSD",
    tarjetaVideo: "NVIDIA GTX 1650",
}

console.log(datosComputadoraObjeto.perifericos)
console.log(datosComputadoraObjeto["procesador"])
console.log(datosComputadoraObjeto.perifericos[2])
// averiguar como eliminar un elemento de un objeto
delete datosComputadoraObjeto.tarjetaVideo;