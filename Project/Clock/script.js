// add time into h1 and also update time the time after every one sec

let timeContainer =  document.getElementById("time-container");
let dateContainer = document.getElementById("date-container");
let btn = document.getElementById("btn")

let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

const generateTime = () =>{
    let date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let milisec = date.getMilliseconds();
    timeContainer.innerHTML = `${hour %12 || 12}::${min}::${sec} <span id="mili-sec">${milisec}</span>`
    dateContainer.innerHTML = `${date.getDate()} / ${months[date.getMonth()]}/ ${date.getFullYear()}`
}

setInterval(()=>{
    generateTime()
},1)

