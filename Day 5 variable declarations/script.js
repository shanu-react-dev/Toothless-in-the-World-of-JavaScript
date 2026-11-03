//! Variable declaration
// var age; //! declaration
// console.log(age); // undefined
// age = 91; //! initialization
// console.log(age); //91

// var username = "Shanu"; //! Declaration and Initialization at the same time
// console.log(username);

// var username; //! re declaration
// console.log(username); //Shanu

// username = "Sundari"; //! re initialization
// console.log(username);

// var username = "Karthik"; //! redeclaration and reinitialization at the same time
// console.log(username);

//! let and const
//? This was introduced in ES6 feature to avoid global pollution.
// let username; //! Only declaration
// console.log(username); // undefined

// username = "Suman"; //! Only Intialization
// console.log(username); //Suman

// let age = 19; //! declaration and initialization at the same time
// console.log(age);

// let username; //! Redeclaration is not possible here

// username = "Simran"; //! Re initialization is possible
// console.log(username);

// let username = "Dabab"; //! Redeclaration and Re initialization is not possible
// console.log(username);

//todo const variable
//? It is used to make the variable as constant (Unchangable). We can't modify this variable until and unless it is non primitive datatype such as arrays and objects.
// const username; //! only declaration is not possible
// console.log(username);
// username = "Shanu"; //! only initialization is not possible
// console.log(username);

// const username = "Shanu"; //! Declaration and initialization at the same time
// console.log(username);

// const username; //! Redeclaration is not possible
//!Cannot redeclare block-scoped variable 'username'.

// username = "Sundari";
// console.log(username); // Assignment to constant variable. not possible

// const arrOfFruits = ["Grapes", "Orange", "Papaya", "Pomegranate"];
// console.log(arrOfFruits);
// console.log(arrOfFruits[2]);
// arrOfFruits[2] = "Mango";
// console.log(arrOfFruits[2]);
// console.log(arrOfFruits);

// arrOfFruits = "Shiva";
// console.log(arrOfFruits);

// console.log(user, "Before initializing the varibale"); // undefined

// var user = {
//   userName: "Shanu",
//   age: 21,
//   gender: "Male",
//   address: "Chennai",
// };

// console.log(user);

// console.log(user2); // Uncaught Reference error, can't be accessed before its initialization

// let user2 = {
//   userName: "Laxmi",
//   age: 22,
//   gender: "Female",
//   address: "Bhubaneswar",
// };
// console.log(user2);
