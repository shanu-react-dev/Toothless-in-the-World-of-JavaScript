//! Ways to create an Object
//? Object Literals
// let obj = {
//   username: "Nandhini",
//   age: 22,
//   gender: "male",
//   contact: 9123456780,
//   city: "Chennai",
//   address: {
//     HouseNum: 21,
//     streetName: "ABC Street",
//     Locality: "Chrompet Saravana Store",
//     city: "Chennai",
//     pin: 600044,
//     isMarried: true,
//   },
// };

// console.log(obj.age);
// console.log(obj.city);
// console.log(obj.address.Locality);

// let obj2 = new Object();
// console.log(obj2);
// obj2.username = "Shanu";
// console.log(obj2);
// obj2.username = "Sundari";
// console.log(obj2);
// obj2.gender = "female";
// console.log(obj2);

// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toLocaleTimeString());
// console.log(typeof date);

// let user = {
//   username: "Shanu",
//   age: 23,
//   gender: "Male",
//   city: "Chennai",
//   Locality: "Pammal",
//   pin: 600075,
//   "full Name": "Amarjeet Kumar Singh",
// };
// console.log(user.Locality);
// console.log(user["city"]);
// console.log(user["full Name"]);

// for (let i of user) {
//   console.log(i);
// }

/**for (let i in user) {
  //   console.log(i);
  //   console.log(user[i]);
  console.log(`${i} : ${user[i]}`);
}*/

// let user = {
//   username: "Shanu",
//   age: 23,
//   gender: "Male",
//   city: "Chennai",
//   Locality: "Pammal",
//   pin: 600075,
//   "full Name": "Amarjeet Kumar Singh",
// };
// user.username = "Payal";
// console.log(user);

//! can't able to add any new property and not able to modify existing property
// Object.freeze(user);
// user.username = "Payal";
// user.isMarried = true;
// console.log(user);
// console.log(Object.isFrozen(user));

//! seal
//? let's modifies the existing properties but can't add any new property
// Object.seal(user);
// console.log(user);
// user.city = "Delhi";
// console.log(user);
// user.isMarried = true;
// console.log(user);
// console.log(Object.isSealed(user));
// console.log(Object.keys(user));

let arr = [24, 56, 24, 79, 90, 56, 80];
let uniqueArr = new Set(arr);
console.log(uniqueArr);
