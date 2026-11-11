//! function

//? Named Function or Function Declaration or Function Definition
// function greet() {
//   console.log("Good afternoon");
// }
// greet();
// greet();

// function printName(username) {
//   console.log("Hii, I am " + username);
// }
// printName("Ajith");

// function sumOfTwoVal(a, b) {
//   console.log("The sum of given number is: ", a + b);
// }
// sumOfTwoVal(10, 15);

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
// let anonymous = function (a) {
//   console.log("I am anonymous function");
//   console.log(a);
// };

// anonymous();
// anonymous(9);

// let namedExpression = function dabba(param1) {
//   console.log("I am dabba function stored inside a variable!!");
//   console.log("Parameter 1 value is: ", param1);
// };
// // dabba();
// namedExpression("Shanu");

//? IIFE
// (function () {
//   console.log("I am an IIFE function!!");
// })();

//? Arrow Function
// let arrow = () => console.log("I am an Arrow Function!!");
// arrow();

// normal function
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 30);

// let sum = (a, b) => console.log(a + b);
// sum(10, 30);

// function sum() {
//   console.log("Hello I am Shanu");
//   return "Shanu";
// }
// let retVal = sum();
// console.log(retVal);

// function sumOfTwoNum(a, b) {
//   console.log(a + b); // 10 + 45=>55
//   return a + b;
// }

// sumOfTwoNum(10, 45);

// let sumOFMyValAndFun = 20 + sumOfTwoNum(10, 45);
// console.log(sumOFMyValAndFun); // NaN

// let sum = (a, b) => a + b; // Implicit return, no need of return keyword
// let retVal = sum(10, 50);
// console.log(retVal);

// let difference = (a, b) => {
//   let result = a - b;
//   console.log(result);
//   return result; // Explicit return return keyword is mandatory
// };
// let retVal = difference(40, 25);
// console.log(retVal);

//! HOF and Callback Function
// function HOF(fun) {
//   console.log("I am a Higher Order function");
//   fun();
// }
// function CallBack() {
//   console.log("I am a Callback Function!!");
// }

// HOF(CallBack);

// HOF(function () {});
// HOF(() => "Shanu");

//! nested Function
// function parent() {
//   console.log("I am a parent function");
//   function child() {
//     console.log("I am a child function");
//     function grandChild() {
//       console.log("I am a grand child function");
//     }
//     grandChild();
//   }
//   child();
// }

// parent();
// child();

// function sum(a, b) {
//   let result = a + b;
//   console.log("The sum of two numbers:", result);
//   return "The return value is " + result;
// }

// let retVal = sum(10, 5);
// console.log(retVal);

// function parent() {
//   console.log("I am a parent!!");

//   return function () {
//     console.log("I am a value from returned function!");
//   };
// }
// let retVal = parent();
// console.log(retVal);
// retVal();

//! function currying
// parent()();

//! generator function
// function multiStatements() {
//   console.log("First statement");
//   console.log("second statement");
//   console.log("third statement");
// }

// multiStatements();

// function* multiStatements() {
//   yield console.log("First statement");
//   yield console.log("second statement");
//   yield console.log("third statement");
//   yield "Shanu";
//   return "Complete execution";
// }
// let data = multiStatements(); //generator object
// console.log(data);
// let res1 = data.next();
// console.log(res1);
// let res2 = data.next();
// console.log(res2);
// let res3 = data.next();
// console.log(res3);
// let res4 = data.next();
// console.log(res4);
// let res5 = data.next();
// console.log(res5);
