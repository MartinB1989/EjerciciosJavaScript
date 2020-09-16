let countdown = document.getElementById("countdown"), dias,horas,min,seg,faltan,
fechalimite = new Date(2020,10,24).getTime()

const intervalo = setInterval(()=>{
    let now = new Date().getTime()
    faltan = fechalimite-now
    dias = faltan/(1000*60*60*24)
    horas = (faltan%(1000*60*60*24))/(1000*60*60)
    min = (faltan%(1000*60*60))/(1000*60)
    seg =(faltan%(1000*60))/1000
    countdown.textContent = `Faltan ${Math.floor(dias)} días,${Math.floor(horas)} horas, ${Math.floor(min)} minutos y ${Math.floor(seg)} segundos `

    if(faltan<0){
        clearInterval(intervalo)
        countdown.textContent = "Feliz Cumpleaños a Mi"
    }

},1000)
