//! function

//? Named Function or Function Declaration or Function Definition
function greet() {
  console.log("Good afternoon");
}
greet();
greet();

function printName(username) {
  console.log("Hii, I am " + username);
}
printName("Ajith");

function sumOfTwoVal(a, b) {
  console.log("The sum of given number is: ", a + b);
}
sumOfTwoVal(10, 15);

// let number = 10;
// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("odd");
// }

// let number2 = 25;
// if (number2 % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// function EvenOrOdd(num) {
//   if (num % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("Odd");
//   }
// }
// EvenOrOdd(19);
// EvenOrOdd(20);

//? Anonymous Function
// function(){
//     console.log("Shanu is a good boy!!")
// }

//? Function Expression
let anonymous = function (a) {
  console.log("I am anonymous function");
  console.log(a);
};

anonymous();
anonymous(9);

let namedExpression = function dabba(param1) {
  console.log("I am dabba function stored inside a variable!!");
  console.log("Parameter 1 value is: ", param1);
};
// dabba();
namedExpression("Shanu");

//? IIFE
(function () {
  console.log("I am an IIFE function!!");
})();

//? Arrow Function
let arrow = () => console.log("I am an Arrow Function!!");
arrow();

// normal function
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 30);

let sum = (a, b) => console.log(a + b);
sum(10, 30);
