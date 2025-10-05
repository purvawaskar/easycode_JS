let container=document.getElementById("container");
let shadow=document.getElementById("moving-shadow")



document.addEventListener("mousemove",(e)=>{
    shadow.style.left=`${e.clientX/5}px`;
    shadow.style.top=`${e.clientY/5}px`;
})


document.addEventListener("mouseenter",(e)=>{
    shadow.style.backgroundColor="rgba(255, 6, 6, 0.6)";
   
})

document.addEventListener("mouseleave",(e)=>{
    shadow.style.backgroundColor="rgba(9, 66, 152, 1)";
    

})


