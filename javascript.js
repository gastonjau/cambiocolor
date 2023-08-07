const obtenerBoton = document.querySelector("button");
const obtenerEspacio = document.getElementsByClassName("span-1");
const obtenerDiv = document.querySelector("div");

function random(){
    return Math.floor(Math.random()* 255)
}


obtenerBoton.addEventListener("click", () => obtenerDiv.style.backgroundColor = `rgb(${random()},${random()},${random()})`)

