// create a new set
const cities = new Set(["Dhaka","chittaganj","Cumilla","Rajshahi"]);
console.log((cities));
// Using Add method
cities.add("Mainkganj");
cities.add("Cox's BaZar");
cities.add("Rajshahi");
cities.add("Bandarban");
cities.add("Jessore");
console.log(cities)

// Create a Set
const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.keys();

// List all Elements
let text = "";
for (const x of myIterator) {
  text += x;
}


