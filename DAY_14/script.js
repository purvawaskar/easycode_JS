// function in javascript

// how to create function 

function greet(){           // function keyword and function name
    console.log("hello")
}
greet()       // function call with function name



// function with parameter

//function add(a,b){
 //   console.log(a+b)
//}
//add(5 ,4)


function addition(num1=0,num2=0,num3=0){
    console.log(num1+num2+num3)
}
addition(5,5,5)


function multiply(num1 = 0, num2 = 0) {
    console.log(num1 * num2);
}

multiply(5,9);



let n1 = parseInt(prompt("enter first number"));
let n2 = parseInt(prompt("enter second number"));
let operation = prompt("enter operation");

switch (operation) {
    case "+":
        add(n1, n2);
        break;

    case "-":
        sub(n1, n2);
        break;

    case "*":
        mul(n1, n2);
        break;

    case "/":
        div(n1, n2);
        break;

    default:
        console.log("Invalid operation");
}

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}