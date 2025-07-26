// object and object method

// keys and values method

const person={
    name:"soniya",
    age:21,
    gender:"female"
}
console.log(person)
let res= Object.keys(person)  // display only keys of object
console.log(res)


const student={
    id: 101,
    name:"pooja",
    address:"Pune"
}

console.log(student)
let result=Object.values(student)   // return values of object
console.log(result)


// entries method

const mobile={
    model_name: "SamsungA24Ultra",
    Company:"Samsung"

}
let results=Object.entries(mobile)

// freeze method

let bankaccount = {
    name: "Purva waskar",
    account_no: 234785859,
    balance: 500000,
    bank_name: "SBI"
}
Object.freeze(bankaccount);

// This line will have no effect because the object is 

bankaccount.balance = "100000";
console.log(bankaccount);


// for Of loop

let colors=["red","blue","red","orange"] 
for(let i of colors){
    console.log(i)
}


let numbers=[1,2,3,4,5,6]
for (const j of numbers) {
    console.log(j)
}


//for in loop

const person2 = {
      name: "mrunal",
      age: 19
    };
    for (const element in person2) {
      console.log(element); 
    }



