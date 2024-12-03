let parrafoDos=getElement.getElementById("dos")
let texto=prompt("ingresa un texto")
parrafoDos.textContent=texto
// parrafoDos.textContent=texto

//<div id="miId" class="miClase" style="background:red;width:200px;height:200px"></div>
let newElem=document.createElement("div")
newElem.id="miId"
newElem.className=""
let respuesta=prompt("escribe el color azul o rojo para ver el cuadro")
if (respuesta=="rojo"){
    newElem.className="cuadro_rojo"
}else{
    newElem.className="cuadro_azul"
}
// newElem.style="background:red;width:200px;height:200px"
let body=document.querySelector("body")
body.appendChild(newElem)