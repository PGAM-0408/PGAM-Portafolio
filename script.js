//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// CARRUSEL DE ILUSTRACIONES
let indice = 0;
function moverCarrusel(direccion) {
  const carrusel = document.querySelector(".carrusel-contenedor");
  const proyectos = carrusel.querySelectorAll(".proyecto");
  const visible = 3; // cantidad de proyectos por vista en desktop
  const total = proyectos.length;

  // calcular pasos
  indice += direccion;
  if (indice < 0) indice = 0;
  if (indice > total - visible) indice = total - visible;

  carrusel.style.transform = `translateX(-${indice * (100 / visible)}%)`;
}

let indiceFront = 0;
function moverCarruselFront(direccion) {
  const carruselFront = document.querySelector(".carrusel-track");
  const proyectosFront = carruselFront.querySelectorAll(".proyecto-front");

  // detecta cuántas caben en pantalla
  const visibleFront = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 992 ? 2 : 3);
  const totalFront = proyectosFront.length;

  // mover de 1 en 1
  indiceFront += direccion;
  if (indiceFront < 0) indiceFront = 0;
  if (indiceFront > totalFront - visibleFront) indiceFront = totalFront - visibleFront;

  // paso = tamaño de una tarjeta
  const paso = 100 / visibleFront;

  carruselFront.style.transform = `translateX(-${indiceFront * paso}%)`;
}
