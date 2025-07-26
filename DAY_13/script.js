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


