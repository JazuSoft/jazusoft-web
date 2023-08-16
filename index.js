// efecto contador
// let animado = false;

// function animateValue(id, start, end, duration) {
//     if (start === end) return;
//     let range = end - start;
//     let current = start;
//     let increment = end > start? 1 : -1;
//     let stepTime = Math.abs(Math.floor(duration / range));
//     let obj = document.getElementById(id);
//     let timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
  
// }



//animacion del contador al pasar por el objeto

// window.addEventListener('scroll', function(){
//     let animacion = document.getElementById('services');
//     let posicion = animacion.getBoundingClientRect().top;
    
//     let tPantalla = window.innerHeight*0.95;
    
//     if(posicion < tPantalla && animado == false){
//         animateValue("valueA", 0, 15, 2000);
//         animateValue("valueB", 0, 1352, 2000);
//         animateValue("valueC", 0, 566, 2000);
//         animado = true;
//     };
    
// })

// footer date

let date = new Date();
let anio = date.getFullYear();
document.getElementById('anio').innerHTML = anio;


function navScroll(id){
    document.getElementById(id).scrollIntoView();
}

// change language

let check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;
    if(id == true){
        location.href = 'spanish/index.html';
    }else{
        location.href = '../index.html';
    }
}

// Obtener la referencia a la imagen
const image = document.getElementById('imgCar2');

// Función para ajustar el tamaño de la imagen
function adjustImageSize() {
  const screenWidth = window.innerWidth;
  const extraHeight = Math.floor((screenWidth - 1316) / 3.75); // Calcula el aumento de altura
  
  // Calcular la nueva altura sumando el extraHeight
  const newHeight = 199 + extraHeight;
  
  // Asegurarse de que la altura no sea negativa
  if (newHeight > 0) {
    image.style.height = `${newHeight}px`;
  }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
adjustImageSize();
window.addEventListener('resize', adjustImageSize);
