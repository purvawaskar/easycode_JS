let container=document.getElementById("container");
let shadow=document.getElementById("moving-shadow")

document.addEventListener("mousemove",(e)=>{
    shadow.style.left=`${e.clientX/5}px`;
    shadow.style.top=`${e.clientY/5}px`;
})


