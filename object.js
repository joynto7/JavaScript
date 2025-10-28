const car ={
    type : 'fait',
    model : '11xCarbonMagnate',
    color :'black',
    year : 2025
}

// An object representing a flower
const flower ={
    type : 'rose',
    color : 'black',
    smell : 'Strong',
    petals : 32
}
console.log(car);
console.log(flower);

const person ={
    name : 'Maria',
    age :22,
    city : 'Mirpur',
    profession : 'Engineer'
};
// Acessing object properties
console.log(person)
console.log("Person Name:"+person.name);
console.log("City Name:"+person.city);
console.log("Age :"+person.age);

// Add new property to object
person.country ='Bangladeshi';
console.log("Updated Person Object:",+ person)
