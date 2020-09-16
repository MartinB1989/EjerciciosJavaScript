let watch = document.getElementById("watch")
let btn_iniciar = document.getElementById("iniciar")
let btn_parar = document.getElementById("parar")
let btn_iniciar_alarma = document.getElementById("iniciar-alarma")
let btn_parar_alarma = document.getElementById("parar-alarma")
let audio = document.getElementById("audio")
let intervalo
let boton_flecha = document.getElementById("boton-flecha")
let darkmode = document.getElementById("darkmode");



document.addEventListener("DOMContentLoaded", e =>{

    
(()=>{
    if(localStorage.getItem("modo")){
    
        document.body.classList.add("mododark")
        darkmode.innerHTML = "<a href='#''>☀️</a>"
    }
})();


(()=>{
    
    if(localStorage.getItem("scroll")){
        console.log("esta")
        if(scrollY>900){
            boton_flecha.classList.remove("no-ver")
            let c = localStorage.setItem("scroll","nidea")
        }
        else{
            boton_flecha.classList.add("no-ver")
            let c =localStorage.removeItem("scroll")
        }
    
    }
})();
})


document.addEventListener("click", e =>{

    if(e.target.matches("#iniciar")){

            intervalo = setInterval(()=>{
            watch.textContent = new Date().toLocaleTimeString()
        },1000)
        btn_iniciar.disabled = true
        btn_parar.disabled = false
    }

    else if(e.target.matches("#parar")){

        clearInterval(intervalo)
        btn_iniciar.disabled = false
        btn_parar.disabled = true
        
    }

    else if(e.target.matches("#iniciar-alarma")){
        audio.play()
        btn_iniciar_alarma.setAttribute("disabled","")
        btn_parar_alarma.removeAttribute("disabled","")    
    }

    else if(e.target.matches("#parar-alarma")){
        audio.pause()
        btn_parar_alarma.setAttribute("disabled","")
        btn_iniciar_alarma.removeAttribute("disabled","")    
    }

   else if(e.target.matches("#darkmode a")){
        e.preventDefault()
        if(darkmode.textContent =="🌙"){
            document.body.classList.add("mododark")
            darkmode.innerHTML = "<a href='#''>☀️</a>"
            let modolocal = localStorage.setItem("modo","mododark")
        }
        else{
            document.body.classList.remove("mododark")
            darkmode.innerHTML= "<a href='#''>🌙</a>"
            let modolocal = localStorage.removeItem("modo")
        }
    }
    
}) 

    
document.addEventListener("scroll", ()=>{

    if(scrollY>900){
        boton_flecha.classList.remove("no-ver")
        let c = localStorage.setItem("scroll","nidea")
    }
    else{
        boton_flecha.classList.add("no-ver")
        let c =localStorage.removeItem("scroll")
    }

})

    
    
