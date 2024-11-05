# FUNCIONES
- [FUNCIONES](#funciones)
  - [estructura de una funcion (como se crear una funcion)](#estructura-de-una-funcion-como-se-crear-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y Parametros Posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
  - [tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [funcines como valor](#funcines-como-valor)
    - [funcion como declaracion](#funcion-como-declaracion)
    - [funcion de flecha](#funcion-de-flecha)
    - [Diferencias](#diferencias)

## estructura de una funcion (como se crear una funcion)
para crear una funcion debemos realizar los siguientes pasos.
1. hacer uso del keyword `function`
2. darle un nombre a la funcion
3. crear los parametros que recibira entre parentesis `()`
4. crear el cuerpo de la funcion `{}`
```js
//funcion sin parametros
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(texto){
    console.log("tu parametro es",texto)
}
//funcion con varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
para ejcutar una funcion devemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que reciba
```js
//creando la funcion
function saludo(){
    console.log("hola")
}
//ejecutamos la funcion
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
//ejecutar
saludo2("jory")
```

> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION** - los nombres de las funcioines deben representar acciones, por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.

```js
function crearUsuario(){

}
function enviarCorre(){

}
```
## Tipos de Argumentos y Parametros
es la manero como se reemplazan los argumentos con los parametros
### Argumentos y Parametros Posicionales
poscicionales se le llama por que los argumentos tomaran los parametros en el orden que se le pase a la funcion segun la posicion entre argumento y parametro
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(2,4,6,8)
console.log(respuesta)
```
### Argumentos y Parametros Nominales
se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre}, ${apellido}, ${sexo}`
    return respuesta
}
//nominal
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicion
registroAlumno("jory","rodrigues","todos los dias")
```
> [!INFO]
> Posicinales en orden y Nominales especificar el parametro y su valor
## tipos de funciones por su notacion 
### funcines como valor 
en este caso se crea como una funcion como si fuera el valor de un enlace
```js
let saludo=funcion(){
    console.log("bienvenido")
} 
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamrlo o ejecutarlo debemos de poner el nombre del enlace mas los parentecis 
al igual que una funcion clasica podemos tambien pasarle parametros
### funcion como declaracion
se le conoce como `funcion declarativa` a la manera clasica de como creamos un funcion 
```js
funtion saludo(){
    return"saludos a todos"
}
console.log(saludo())
```
### funcion de flecha
esta funciones introducida a partir de la vercion ecma script 5 `es5`
se implemento para la creacion y ejecucion rapido y mas entendible de las funciones, la funcion flecha evita la `verborisidad` en JS.
> [!NOTE]
> verbosidad o verboso se utiliza en la progrmacion para referirce a un codigo que necesita demaciadas lineas de codigo o nocesita cumplir estrictamente una serie de reglas podemos comprar la verbosidad a un texto demaciado o rodundante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
 la funcion flecha tiene la siguiente estructura.
el parametro seguido del simbolo flecha => y del cuerpo de ser necesario o solo de codigo que retornara 
```js
funxtion saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola, "texto)
console.los(mensaje("el primo"))
// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre}, ${apellido}`
    return alumno
}

console.log(registroAlumno("edwin","cachondo"))

```
### Diferencias
las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flechaes el binding.
### binding
es una tecnica que guarda las funciones y variables (enlaces) sube al principio la de declaracion no el valor a la cabecera del archivo javascript
```js
despedida()
function saludo(){
    return "hola"
}
function despedida(){
    return "adios"
}
```
```js
function saludo()
function despedida()
```
## la pila de llamadas (call stack)
es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
**Averiguar sobre LIFO**
```js
//programa que haga una ensalada
function cortarTomate() {
    console.log("cortando tomates")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino para el primo")
}
function cortarLimon() {
    console.log("cortando limon")
}
function prepararEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mesclando las verduras")
}
function comer() {
    prepararEnsalada()
    console.log("tragando la ensalada")
}
comer()
```
## CLOSURE o Funciones de Cierre(Funciones que retornan Funciones)
Un `closure`es una funcion que encapsula una serie de variable y difiniciones locales que unicamente seran accecibles si son devueltas con el keyword `return`.
Antes de que aparesca la version de `ecma 6` los `closure` eran un pattron creacional que nos permita modularizar nuestro codigo, en lugar de usar las `clases`, que eran populares en otros lenguajes pero que `JS` aun no lo implementaba.
```js
//una funcion que retorna otra funcion (por lo general es una funcion anonima)
//funcion clasica
function retornaValor(n){
    return n+1
}
//lamando a la funcion clasica
retornaValor(10)
//funcion closure
function RetornaValor(n){
    return function(){
        return n+1
    }
}
//llamando a la funcion closure
RetornaValor(10)()
```
> [!NOTE]
> Las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el preceso de la ejecucion de su funcion padre