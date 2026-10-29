//! var, let and const
// var username = "Shanu";

// var age = 20;
// var gender = "male";
// console.log(username);
// console.log(age);
// console.log(gender);
// console.log("My name is ", username);
// console.log("My age is " + age)

//! Primitive datatypes
// let username = "Shanu";
// console.log(username);
// console.log("Type of username:", typeof username);
// let age = 20.8;
// console.log(age);
// console.log(typeof age);
// let isMarried = true;
// console.log(isMarried);
// console.log(typeof isMarried);

// let kids = null;
// console.log(kids);
// console.log(typeof kids);

// let jobs = undefined;
// console.log(jobs);
// console.log(typeof jobs);
// console.log("1945");
// console.log(typeof "1945");

// let isLoggedIn;
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// let uniqueVal = Symbol;
// console.log(uniqueVal);
// console.log(typeof uniqueVal);

// let longval = 1234567890123456710;
// console.log(longval);

// let largeNumber = 1234567890214891273984n;
// console.log(largeNumber);
// console.log(typeof largeNumber);

//! What is the typeof typeof null or any other datatype
//? always string
// console.log(typeof typeof null);
// console.log(typeof typeof undefined);

//! Non-Primitive Datatypes
//todo 1. Array
let fruits = ["Orange", "Papaya", "Grapes", "Pomegranate"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[3]);

//todo Object
let userData = {
  userName: "Amar",
  age: 21,
  gender: "Male",
  isMarried: true,
};
console.log(userData);
console.log(userData.userName, userData.age, userData.gender);
console.log(userData.age);
