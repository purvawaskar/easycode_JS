let shadow = document.getElementById("moving-shadow");

document.addEventListener("mousemove", (e) => {
    shadow.style.left = `${e.offsetX}px`;
    shadow.style.top = `${e.offsetY}px`;
})