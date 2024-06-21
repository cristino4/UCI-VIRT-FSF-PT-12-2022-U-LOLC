// The default keyword "this" refers to the global object
// In a browser, the global object is the Window 

// Logs Window
console.log(this);

// When the keyword "this" is used inside of an object like planet, "this" belongs to that object
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  isPopulated: true,
  population: "7.594 billion"
};