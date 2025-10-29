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

//string destructuring 

const myString = "HelloWorld";
const [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10] = myString;
console.log(w1 + w2 + w3 + w4 + w5);
console.log(w6 + w7 + w8 + w9 + w10);

//// array destructuring 
const colours =["red","green","blue"];
const [color1,color2,color3]= colours;
console.log(color1);
console.log(color2);
console.log(color3);


