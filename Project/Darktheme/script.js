let btns = document.getElementById("btn");

let isdarkTheme = true;
btns.addEventListener("click", () => {
    if (isdarkTheme) {
        document.body.style.backgroundColor = "white";
        isdarkTheme = false;
    } else {
        document.body.style.backgroundColor = "black";
        isdarkTheme = true;
    }
})