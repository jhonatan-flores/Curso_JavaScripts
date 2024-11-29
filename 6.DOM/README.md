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
> [!NOTE]
> tecnologias para el procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a travez de palabras reservadas darle un estilo o significado al contenido de las etiquetas). la primera tecnologia fue `xml`, despues de la ultima generacion de tecnologias de markado de texto `markdown`. 
()