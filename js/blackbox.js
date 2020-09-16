let blackbox = document.getElementById("black-box"), 
pelota = document.querySelector(".pelota"), x=0,y=0, limitepelota = pelota.getBoundingClientRect(),
limitestage = blackbox.getBoundingClientRect()
let intervalo
let vofijate = 0 
let h = 0
let v = 0


document.addEventListener("keypress", (e) =>{
    if(vofijate==0){
        if(e.key=="s"&& (limitepelota.bottom+y)<limitestage.bottom) y=y+5
        else if(e.key=="w" && (limitepelota.top+y)>limitestage.top) y=y-5
        else if(e.key=="a" && (limitepelota.left+x)>limitestage.left) x=x-5
        else if(e.key=="d" && (limitepelota.right+x)<limitestage.right) x=x+5

        pelota.style.transform = `translate(${x}px,${y}px)`
    }
  
})

document.addEventListener("click", e =>{

    if(e.target.matches("#black-box") && vofijate == 0){
        vofijate = 1
       
        
        intervalo = setInterval(()=>{
            if(((limitepelota.left+x)<limitestage.left) && ((limitepelota.right+x)<limitestage.right)) h=0
            if(h==0)x++
            if(((limitepelota.left+x)>limitestage.left) && ((limitepelota.right+x)>limitestage.right)) h=1
            if(h==1)x--
            if(((limitepelota.top+y)<limitestage.top) && ((limitepelota.bottom+y)<limitestage.bottom)) v=0
            if(v==0)y++
            if(((limitepelota.top+y)>limitestage.top) && ((limitepelota.bottom+y)>limitestage.bottom)) v=1
            if(v==1)y--
            pelota.style.transform = `translate(${x}px,${y}px)`
            
                        
        },5)
        
        
    }
    else{
        if(e.target.matches("#black-box") && vofijate==1){
            vofijate = 0
            clearInterval(intervalo)
        }
    }
    
})

