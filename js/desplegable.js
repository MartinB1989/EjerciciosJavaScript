let menu = document.getElementById("menu");
let desplegable = document.getElementById("desplegable")
let vofi = false;

menu.addEventListener("click", e =>{
    if(vofi){
        // desplegable.classList.replace("menu-false","menu-true")
        desplegable.classList.add("menu-false")
        vofi=false
    }else{
        // desplegable.classList.replace("menu-true","menu-false")
        desplegable.classList.remove("menu-false")

        vofi=true
    }
})

desplegable.addEventListener("click", e =>{
    desplegable.classList.add("menu-false")
    vofi=false
})