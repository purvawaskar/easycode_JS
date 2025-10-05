let date = new Date();
console.log(date);

console.log(date.getFullYear());  //get current year
console.log(date.getMonth());    //get current month
console.log(date.getDate());     //get current date
console.log(date.getDay());     //get current day of the week

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let currentDate = `${date.getDate()} / ${months[date.getMonth()]} / ${date.getFullYear()}` // output in DD/MM/YYYY format
console.log(currentDate);


let time= new Date();

console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());

console.log(`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()} : ${time.getMilliseconds()}`); // output in HH:MM:SS:MS format