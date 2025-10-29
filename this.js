 // using this keyword in object
 const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },

};
console.log("Full Name:"+ person.fullName());


