
document.addEventListener("DOMContentLoaded", e =>{
let form = document.getElementById("formulario");
let tester;
    document.addEventListener("submit", e=>{
        e.preventDefault()
       if(e.target===form){
           tester = window.open(form.pagina.value,"tester",`innerWidth=${form.ancho.value},innerHeight=${form.alto.value}`)
       }

    })


    document.addEventListener("click", e =>{
        if(e.target === form.cerrar){
            tester.close()
        }
    })
})