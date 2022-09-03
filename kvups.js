let menu=document.getElementById('ham')
menu.addEventListener("click",function(){
    document.getElementById("overlay").style.width="20%"
   console.log('hai')
})

let close=document.getElementById('close')
close.addEventListener("click",function(){
        document.getElementById("overlay").style.width="0%"
       console.log('hai')

})


