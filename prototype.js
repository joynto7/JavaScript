// creating a constructor function
function person(first , last, age, city){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.city = city;
}

// creating objects using constructor function
const student = new person('command','Line',23,'Dhaka');
const teacher  = new person('alex ','joshenpen',23,'california');
const enginner = new person('kim','jon um', 45,'north korea')
console.log(student);
console.log(teacher);
console.log(enginner);
