 // setTimeout example

let result= setTimeout(() => {
    console.log("hello I am a timeout")
}, 4000);


console.log(result); 

clearTimeout(result);  // to clear the console


setTimeout(() => {
    console.log("I am Purva")

}, 6000);


// setInterval example

let res = setInterval(() => {
    console.log("hello I am a interval") //
}, 2000);


clearInterval(res);  // to clear the console