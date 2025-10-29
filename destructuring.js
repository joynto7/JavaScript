// creating an object 
const person = {
    firstname:"alice",
    lastname: "Johnson",
    age : 25

};
//destructing the object
const {firstname,lastname,age} = person;
console.log(firstname +" "+ lastname);
console.log(age)
