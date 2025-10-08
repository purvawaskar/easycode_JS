// JSON methods and localStorage

let person = {
    "name" : "purva",
    "age" :  21,
    "city" : "pune"
}

let res=JSON.stringify(person)
console.log(res)



let res2=JSON.parse(res);
console.log(res2);

//Local storage which provided by browser


localStorage.setItem("user_name","purva")

localStorage.setItem("user_age","21")