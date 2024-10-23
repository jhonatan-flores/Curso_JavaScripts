//ejemplo de condicion simple
//capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
// if (typeof edad == "number"){
//     //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
//     console.log(edad*edad)
// }

//ejemplo de condicion simple de una linea
// if (1+1==2) console.log("es verdad");

//Ejercicio de condiciones
//crear un programa que me pida un numero y me muestre por consola si es numero par o impar
// let numPri = Number(prompt("Ingrese un numero"))
// if (numPri % 2 == 0){
//     console.log("es un número par");
// }else{
//     console.log("es un número impar");
// }

//EJERCICIO
//crear un programa que pida al usuario su edad y dependiendo la edad le daremos una serie de regalos
/**
 * - si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * - si su edad esta entre 9 a 13 años: te ganaras un pelota firmada por cuto
 * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia
 * - si su edad es mayor o igual a 18: te ganaras al primo lo haces leña
 */
let edadPerson = Number(prompt("ingrese su edad"))
if (edadPerson >= 4 && edadPerson < 9){
    console.log("te ganaste un chupetin")
}
else if (edadPerson >= 9 && edadPerson < 14){
    console.log("te ganaste una pelota firmada por cuto")
}
else if (edadPerson >= 14 && edadPerson < 18){
    console.log("te ganste un celular nokia")
}
else if (edadPerson >= 18 && edadPerson <= 100){
    console.log("te ganaste al primo de browl star")
}else{
    console.log("no tienes la edad necesaria")
}

//realizar un programa que pida 5 nombres a traves del navegador 
//y realizara las siguientes evaluaciones en el caso de que sea 
//naranja o limon ->"es una fruta citrica"
//platano, manzana -> "es una fruta dulce" 
// fresa, pera, papaya -> para la ensalada defruta 
// si engresa otro tipo de frutas -> "no tiene clasificacion"
// Inicializar un arreglo vacío para almacenar los nombres de las frutas
// Inicializar un arreglo con espacio para 5 frutas
let frutas = [];

// Usar un bucle for para pedir 5 frutas al usuario
for (let i = 0; i < 5; i++) {
  frutas[i] = prompt(`Introduce el nombre de una fruta (${i + 1}/5):`);
}

// Recorrer el arreglo de frutas y realizar las evaluaciones
for (let i = 0; i < 5; i++) {
  switch (frutas[i]) {
    case 'naranja':
    case 'limón':
      console.log(frutas[i] + ' es una fruta cítrica.');
      break;
    case 'plátano':
    case 'manzana':
      console.log(frutas[i] + ' es una fruta dulce.');
      break;
    case 'fresa':
    case 'pera':
    case 'papaya':
      console.log(frutas[i] + ' es perfecta para la ensalada de frutas.');
      break;
    default:
      console.log(frutas[i] + ' no tiene clasificación.');
  }
}
