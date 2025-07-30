// get element by id

let result=document.getElementById("container")
console.log(result)


// query selector

let res=document.querySelector(".heading")
console.log(res)

let res1=document.querySelector("#main")
console.log(res1)


// 2.modify the element:

//innertext

let container=document.getElementById("container")

container.innerText="hello I am Div"
console.log(container)


let mainheading=document.querySelector("#main")

mainheading.innerText="i live in Jejuri"
console.log(mainheading)


//   innerHTML

let container1 = document.querySelector(".heading");
container1.innerHTML = "<h2>I am BBA-CA student</h2>";
console.log(container1);


// controling style

let change=document.getElementById("container")
change.style.backgroundColor="pink"
change.style.color="blue"
change.style.fontSize="50px"
console.log(change)
