let next=document.querySelector("#next");
let prev=document.querySelector("#prev");
let imagecontainer=document.querySelector(".image-container")
let sayi=0
next.addEventListener("click",()=>{
    clearTimeout(zamanfonk)
    sayi=sayi-45
  degistir()
   
})

prev.addEventListener("click",()=>{
    clearTimeout(zamanfonk)
    sayi=sayi+45
    degistir()
})



function degistir(){
  
    imagecontainer.style.transform=`perspective(1000px) rotateY(${sayi}deg)`;
    
   zamanfonk= setTimeout(()=>{
        
        sayi=sayi+45;
        degistir();
    },1000)
    
}
degistir();
