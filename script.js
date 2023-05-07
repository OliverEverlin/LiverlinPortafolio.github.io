// alert("xddd, con que asi se mandan alertas");

let menuVisible = false; 
//defino una variable de control del boton menu

// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    //si esta visible lo oculta y si no lo muestra
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//oculto el menu una vez que selecciono una opcion
function seleccionar(){
    //antes de colocarlo me daba error puesto que no 
    //indique que hacer en caso se seleccione un botton
    document.getElementById("nav").classList = ""; //oculta lista
    menuVisible = false; //cambia el valor por si vuelvo a apretar
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("Python");
        habilidades[3].classList.add("Inventor");
        habilidades[4].classList.add("Autocad");
        habilidades[5].classList.add("Electrónica");
        habilidades[6].classList.add("ProjectManagement");
        habilidades[7].classList.add("Creatividad");
        habilidades[8].classList.add("Comunicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 