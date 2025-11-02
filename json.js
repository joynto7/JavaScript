// Creating an new object

const user = {
  name: "alex jonathon",
  age: 21,
  skills: ["JavaScript", "Cybersecurity"]
};

// convert to JSON String

const String = JSON.stringify(user);
console.log(typeof(String))

// Creating an Array

const Countries = ["Bangladesh","India","Russia","America"];
// Converting into a String 
const countryName = JSON.stringify(Countries);
// print the output
console.log(Countries);



