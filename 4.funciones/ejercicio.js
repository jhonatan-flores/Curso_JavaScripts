// Haciendo uso de las funciones de tipo closure 
//Ejerciccio1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de vienvenidad mas el nombre que ingreso el usuario
// Closure para verificar edad y dar bienvenida
// Closure para dar bienvenida
// Closure para verificar edad y dar bienvenida
function crearVerificadorDeEdad() {
    return function(nombre, edad) {
        if (edad >= 18) {
            console.log(`Bienvenido, ${nombre}!`);
        } else {
            console.log(`Lo siento, ${nombre}. Debes tener al menos 18 años.`);
        }
    };
}

// Crear la función closure que verificará la edad
const verificadorDeEdad = crearVerificadorDeEdad();

// Pedimos el nombre y la edad al usuario
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));

// Llamamos al closure con los datos ingresados
verificadorDeEdad(nombre, edad);
