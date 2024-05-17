// Standard Function Definition

function hello() {
  console.log('hello world');
}

// Arrow Function
// Comes up more when we start using Array Methods

const HelloArrow = () => {
  console.log('hello, arrow function!');
};

// Invoke the function
hello();
HelloArrow();

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello('Mary');

// with multiple things, the order matters
function favoriteThings(food, number, place) {
  console.log('My favorite food is: ', food);
  console.log('My favorite things are: ', food, number, place);
}

favoriteThings('pizza', 100, 'home');

// Return keyword

function add(a, b) {
  //don't need it to console log, but I do want it to return the correct value
  return a + b;
}

console.log('add a = b:');

let answer = add(5, 7); // return 12

console.log('The answer is:', answer);
