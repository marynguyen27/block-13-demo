// Conditionals (if/else)

// Functions

// Parameters
function hello(/*parameter*/) {}

// parameters cannot be called keywords, like function.
// otherwise, it can be called whatever.
// avoid basic parameter names, you should know what it is from the name

// example parameter
function hello(message, message2) {
  console.log(message, message2);

  return 42;
}

let msg = 'This is my message';

hello(/*arguments*/);

hello(msg);
hello('this is a new message');
let result = hello([1, 2, 3, 4]);

console.log('Function Hello:', result);
