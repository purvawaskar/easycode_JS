// Types of Functions 

// 1. Anonymous function (a function without name)

let person=function(name){
    return (`hii ${name}`)
} 
let res = person("purva");
console.log(res);


let add=function(a,b){
    return a+b
}

let res1=add(5,4)
console.log(res1)



// 2. Arrow function

let add1=(x,y)=>{
    return(x+y)
}
console.log(add1(10,30))

let sub=(num1,num2)=>{
    return(num1-num2)
}
console.log(sub(10,5))



// higher order function

// a higher order function is function which receive another function as parameter

let callback = () => {
    console.log("I am callback function");
}

let highorder = (func) => {
    console.log("I am higher order function");
    func();
}
highorder(callback)



let post = () => {
    console.log("Download successfuly");
}

let get = (post) => {
    console.log("Downloading...");
    post();
}

get(post);


let addition = (a, b) => {
    console.log(a + b);
}

let subsrction = (a, b) => {
    console.log(a - b);
}

let mulatipication = (a, b) => {
    console.log(a * b);
}

let division = (a, b) => {
    console.log(a / b);
}



let calculator = (addition, subsrction, mulatipication, division) => {
    addition(10, 20);
    subsrction(12, 22);
    mulatipication(15, 20);
    division(5, 10);

}

calculator(addition, subsrction, mulatipication, division);


// 4. Callback function

// a function which passed another function

let parent = (func) => {
    console.log("I am parent");
    func();
}

let child = () => {
    console.log("I am child");
}

parent(child);