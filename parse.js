const jsonData = `{
  "name": "Artificial",
  "age": 25,
  "location": "Dhaka, Bangladesh",
  "skills": ["JavaScript", "HTML", "CSS"],
  "isStudent": true,
  "contact": {
    "email": "artificial@example.com",
    "phone": "+880123456789"
  }
}`;


//converting json into an object

const obj = JSON.parse(jsonData);
// show the output
console.log(obj);
console.log(obj.age);
console.log(obj.name);
console.log(obj.skills);
console.log(obj.location);