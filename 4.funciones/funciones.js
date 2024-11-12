//EJERCICIO
//Crear un funcion que me de un saludo de bienbenida
// function saludo(){
//     console.log("Bienvenido de nuevo")
// }

//funcion como valor
// let saludo=function(){
//     console.log("bienbenido")
// }

// saludo()

//binding en javascript lo que haces es subir las funciones declarativas a la cabecera de mi archivo
// console.log(despedida())//todas las funciones internamente lo prioriza o lo sube arriba

// //en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en estos caso debemos ejecutar la funcion despues de haberlo crearlo
// let saludo=()=>{return "hola primo"}
// console.log(saludo())

// //en el caso de la funcion declarativa el binding eleva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
// function despedida(){
//     return "adios"
// }

// ejercicio crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma mas uno de esta variable y la resta mas uno de la misma variable ademas de poder tener una funcion que me permita acceder al valor actual y poder mostrarlo.
//Let contador=0
//function incremento
//return contador++
//function decremento
//return contador--
//function valorContador
//Return Contador 
// let contador = 0;
// function incremento() {
//     return contador++;
// }
// function decremento() {
//     return contador--;
// }
// function valorContador() {
//     console.log(contador);
// }
// console.log(incremento());   
// console.log(incremento()); 
// console.log(decremento()); 
// console.log(valorContador()); 

function contador(){
    let contador=0
    function incre(){
        return contador++
    }
    function decre(){
        return contador--
    }
    function valueContador(){
        console.log(contador)
    }
    return{
        valueContador,
        incre,
        decre
    }
}
// let count1=contador()
// count1.valueContador()
// count1.incre()
// count1.decre()
// count1.valueContador()

// let count1=contador()
// for (let i=0;1<5;1++){
//     count1.incre()
// }
// count1.valueCount()

// let count2=contador()
// for (let i=0;1<5;1++){
//     count1.decre()
// }
//     count2.valueCount()

function Contador(nombre) {
    this.count = 0;
    this.nombre = nombre;
}

Contador.prototype = {
    incremento: function() { this.count++; },
    decremento: function() { this.count--; },
    mostrarDato: function() { return `${this.count}, ${this.nombre}`; },
    actualizarNombre: function(nuevoNombre) { this.nombre = nuevoNombre; }
};

// Instancia de la clase Contador
let contadorUno = new Contador("El primo");
console.log(contadorUno.mostrarDato());  

contadorUno.incremento();
contadorUno.incremento();
console.log(contadorUno.mostrarDato());  
// Actualizar el nombre y mostrar nuevamente
contadorUno.actualizarNombre("El segundo primo");
console.log(contadorUno.mostrarDato());  // Output con el nombre actualizado