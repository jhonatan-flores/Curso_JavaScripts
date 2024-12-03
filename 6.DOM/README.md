# DOM-Document Object model
modelo de documento de objetos
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos XML y HTML.
el DOM transforma el archivo HTML en un arbol de nodos jerarquico. facilmente manipulables.
el DOM convierte todo del contenido del archivo HTML  en un objeto de javascript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titutlo">titulo</h1>
    <p class="parrafo">este es el la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    <ul>
</body>
```
- **mi aarchivo script.js**
```javascript
 ducument:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            Text:"este es el la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Attr:null,
            Texst:null,
            child:[
                {
                    Element:li,
                    Attr:null,
                    Text;"Primer elemento",
                    child:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text;"Segundo elemento",
                    child:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text;"Tercer elemento",
                    child:null
                },
            ]
        }
    ]
 }
```
DOM a demas de realizar el trabajo de convertir un archivo `HTML` en un objeto de javascript, nos ofrece una `API` (Aplication Programing Interfacez - Interfaz de Programacion de Aplicaciones).

## Selectores
los selectores nos permiten obtener o captura una o varias etiquetas `HTML` incluyendo sus atributos, contenido e hijos si los tuviera.
los selectores que podemos utilizar son variados podemos captura etiquetas a traves de sus atributos como de el nombre de la etiqueta misma.
los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos`.
y son los siguientes:
- **get ElementById** - devuelve un elemento(etiqueta) que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
``` 
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClassName** - devuelve un elemento que tanga una clase especifica.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p class="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=documento.getElementByClassName("parrafo")
```
- **querySelector** - devuelve el primer elemento ue coincida con el selector ingresado puede ser un id, class, name o tag.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p class="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titutlo=querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subTitulo=documento.querySelector("h2")
```
**averiguar que otros selectores o metodos para recorrer el DOM tiene javascript**

## Manipulacion del DOM
- **createElement** - este metodo crea un elemento HTML con el nombre que le pasemos por parametro
```js
let titulo=document.createElement("h1")
```
- **appendChild** - nos permite hacer hijo un elemento dentro de otro
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DOM
- **className** - esta propiedad nos permite setear o caprurar el nombre de la clase que tenga un elemento.
- **id** - lo mismo que classv pero con el atributo id.
- **innerHTML** - devuelve o permite insertar codigo HTML (incluyendo tag y texto).
- **textContent** - nos permite agregar o modificar el contenido de un elemento.
- **value** - nos permite optener o setear valores de un elemento `input`.
## Acciones o Eventos con elementos en el DOM (averiguar)
El código que compartiste parece intentar asignar un evento al DOM utilizando `addEventListener`, pero tiene un error en el tipo de evento: "clic" debería ser "click" para que funcione correctamente en JavaScript.

`addEventListener` en JavaScript
El método addEventListener se utiliza para escuchar eventos en elementos del DOM, como clics, teclas presionadas, movimientos del mouse, etc.

element.addEventListener(evento, manejador[, opciones]);
evento: Nombre del evento (en inglés, como click, keydown, submit, etc.).
manejador: Función que se ejecutará cuando ocurra el evento.
opciones (opcional): Objeto o boolean que define propiedades adicionales, como si el evento debe capturarse en la fase de captura (true) o burbuja (false).
```javascript

document.getElementById("miBoton").addEventListener("click", () => {
    alert("¡Botón clickeado!");
});
```
```js
addEventListener("clic",()=>{
    
})
```
> [!NOTE]
> tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a travez de palabras reservadas darle un estilo o significado al contenido de las etiquetas). la primera tecnologia fue `xml`, despues de la ultima generacion de tecnologias de markado de texto `markdown`. 
()