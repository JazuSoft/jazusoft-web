// efecto contador
var animado = false;

function animateValue(id, start, end, duration) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
  
}



//animacion del contador al pasar por el objeto

window.addEventListener('scroll', function(){
    
    let animacion = document.getElementById('contador');
    let posicion = animacion.getBoundingClientRect().top;
    
    let tPantalla = window.innerHeight*0.95;
    
    if(posicion < tPantalla && animado == false){
        animateValue("valueA", 0, 150, 2000);
        animateValue("valueB", 0, 20, 2000);
        animateValue("valueC", 0, 3, 2000);
        animado = true;
    };
    
})

// footer date

let date = new Date();
let anio = date.getFullYear();
document.getElementById('anio').innerHTML = anio;


function navScroll(id){
    document.getElementById(id).scrollIntoView();
}