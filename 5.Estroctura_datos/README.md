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
## Objetos
### creacion 
### acceder a un elemento del objeto
### metodos