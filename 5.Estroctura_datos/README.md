# Estroctura de datos
## Indice
[Array](#lista-o-array)
[Objetos](#objetos)
a parte de los tipos de datos primitivos, javascript nos proporciona los tipo de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipo de datos estructurados que trabajan de manera independiente o  en conjunto.
## Lista o Array
las listas en `JS` son un tipo de dato estrocturado que almacena o puede guardar distintos datos primitipos separados por comas `,`, cada tipo de dato que se almacene en una lista se le conoce como elementos.
Asi cada elemento estara separado por una coma.
### creacion 
primero debemos crear un enlace (una variable) y luego tentremos que asignarle un nombre, asignar una lista que se cree con corchetes separados por comas.
```js
//lista vacia
let milista=[]
//lista de numeros
let numeros=[1,2,3,4]
//lista de nombres
let nombres=["edwin","jory","adan","nadine"]
// lista mixta
let mixto=[1,"","edwin"]
```
### acceder a un elemento del array
para poder acceder a aun elemnto del array debemos entender que `JS` asignara por cada elemnto un indice que nos permitira aacceder a un elemnto especifico este indice es incremental y comensada de cero con el primer elemento, el ultimo elemnto sera la cantidad de elemnto menos uno
```js
let numero =[2,5,34,76,19]
console.log(numero[2])
```
existe otra manera de acceder a los elemntos de una lista, esto se logra recorriendo cada elemnto de una lista esto se logra con un bucle `for`
```js
let nombres=["","","",""]
for (let i=0;i<nombre.length;i++){
    console.log(nombres[i])
}
```
### metodos
los metodos son funciones que nos permiten crear, actualizar y eliminar los elementos 
- metodo para recuperar la longitud de elemntos que tiene una lista 
```js
let numero=[2,3,4,5]
numero.length
```
- metodo para agregar un elemento al final de la lista
```js
let vocales=["a"]
vocales.push("e")
```
- metodo para eliminar el ultimo elemento de una lista
```js
let vocales=["a","e"]
vocales.pop()
```
### Tarea averiguar que los metodos mas usados para el tratamiento de listas en js
# Métodos más usados para el tratamiento de listas en JavaScript

## Métodos de Iteración
- **`forEach()`**  
  Ejecuta una función por cada elemento del arreglo.  
  ```javascript
  [1, 2, 3].forEach(num => console.log(num));
  // Salida: 1, 2, 3
map()
Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento.

javascript
Copiar código
let doblados = [1, 2, 3].map(num => num * 2);
console.log(doblados); // [2, 4, 6]
filter()
Crea un nuevo arreglo con los elementos que cumplan una condición.

javascript
Copiar código
let mayores = [1, 2, 3, 4].filter(num => num > 2);
console.log(mayores); // [3, 4]
reduce()
Reduce el arreglo a un único valor acumulando resultados.

javascript
Copiar código
let suma = [1, 2, 3].reduce((acc, num) => acc + num, 0);
console.log(suma); // 6
find()
Retorna el primer elemento que cumpla una condición.

javascript
Copiar código
let encontrado = [1, 2, 3, 4].find(num => num > 2);
console.log(encontrado); // 3
some()
Retorna true si al menos un elemento cumple la condición.

javascript
Copiar código
let hayMayor = [1, 2, 3].some(num => num > 2);
console.log(hayMayor); // true
every()
Retorna true si todos los elementos cumplen la condición.

javascript
Copiar código
let todosMayores = [1, 2, 3].every(num => num > 0);
console.log(todosMayores); // true
Métodos para Modificar Arreglos
push()
Agrega uno o más elementos al final del arreglo.

javascript
Copiar código
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
pop()
Elimina el último elemento del arreglo y lo retorna.

javascript
Copiar código
let arr = [1, 2, 3];
let eliminado = arr.pop();
console.log(eliminado); // 3
console.log(arr); // [1, 2]
shift()
Elimina el primer elemento del arreglo y lo retorna.

javascript
Copiar código
let arr = [1, 2, 3];
let eliminado = arr.shift();
console.log(eliminado); // 1
console.log(arr); // [2, 3]
unshift()
Agrega uno o más elementos al inicio del arreglo.

javascript
Copiar código
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
splice()
Agrega, elimina o reemplaza elementos en cualquier posición.

javascript
Copiar código
let arr = [1, 2, 4];
arr.splice(2, 0, 3); // Inserta 3 en la posición 2
console.log(arr); // [1, 2, 3, 4]
Métodos de Acceso y Manipulación
slice()
Retorna una copia de una parte del arreglo.

javascript
Copiar código
let arr = [1, 2, 3, 4];
let subArr = arr.slice(1, 3); // Del índice 1 al 3 (sin incluir el 3)
console.log(subArr); // [2, 3]
concat()
Combina dos o más arreglos.

javascript
Copiar código
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2);
console.log(combinado); // [1, 2, 3, 4]
join()
Convierte un arreglo en una cadena de texto, separando los elementos con un delimitador.

javascript
Copiar código
let arr = ["Hola", "mundo"];
let texto = arr.join(" ");
console.log(texto); // "Hola mundo"
includes()
Verifica si un elemento está presente en el arreglo.

javascript
Copiar código
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
Métodos para Ordenar Arreglos
sort()
Ordena los elementos del arreglo (por defecto como cadenas).

javascript
let arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // Ordena numéricamente
console.log(arr); // [1, 2, 3, 4]
reverse()
Invierte el orden de los elementos del arreglo.

```javascript

let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
Métodos de Búsqueda
indexOf()
```
Retorna el índice de la primera aparición de un elemento, o -1 si no existe.

```js

let arr = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(4)); // -1

lastIndexOf()
```
Retorna el índice de la última aparición de un elemento.

```javascript
let arr = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); //
```
## Objetos
los objetos son tipos de datos estructurados similares a las listas, para poder acceder a un elemento de las lista javascript les asignaraindices, en este caso los objetos como unica diferencia de las lista nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`
cada clave:valor es un elemento de un objeto se deseamos crear mas elementos tendremos que separarlos por comas.
### creacion
para crear un objeto debemos encerra los elementos en llaves`{}` cada elemento debera estar conformado por su `clave:valor`.
```javascript
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
    },
    accion:()=>{console.log("hola soy jory")}
}
```
### acceder a un elemento del objeto
### metodos
