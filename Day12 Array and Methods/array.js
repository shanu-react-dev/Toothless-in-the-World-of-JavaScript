//! Array literals
// let arr = ["Shanu", 22, true, undefined, null];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[10]);
// console.log(arr[-1]);
// console.log(arr[-3]);

// arr[3] = "Sundari";
// console.log(arr);

//! length
// let res = arr.length;
// console.log(res);

//! at
// res = arr.at(4);
// console.log(res);
// res = arr.at(-2);
// console.log(res);
// res = arr.at(100);
// console.log(res)

//! Constructor function to create an array
// let arrOfFruits = new Array(
//   "Banana",
//   "grapes",
//   "Orange",
//   "Papaya",
//   "Pomegranate",
// );
// console.log(arrOfFruits);
//! concat
// let res = arrOfFruits.concat("apple", "MuskMelon");
// console.log(res);
// console.log(arrOfFruits);
// let res2 = arrOfFruits.concat(["Dragon Fruit", "Strawberry", "Mango"]);
// console.log(res2);

//! find
// let res = arrOfFruits.find(function (ele) {
//   return ele == "Banana";
// });
// console.log(res);

//! findIndex
// let res2 = arrOfFruits.findIndex(function (ele) {
//   return ele === "banana";
// });
// console.log(res2);

//! findLast and findLastIndex
// let arr = [10, 5, 5, 10, 20, "Shanu", "Sharanya", 5];
// let res3 = arr.findLast(function (ele) {
//   return ele == 15;
// });
// console.log(res3);

// let res4 = arr.findLastIndex(function (ele) {
//   return ele == 5;
// });
// console.log(res4);

// let arr = ["Mercury", "venus", "earth"];

//! includes
// let res = arr.includes("jupiter");
// console.log(res);

//! indexOf
// res = arr.indexOf("venus");
// console.log(res);

//! join
// res = arr.join();
// console.log(res);
// res = arr.join("");
// console.log(res);
// res = arr.join("|");
// console.log(res);

//! palindrome
// let str = "racecar";
// let splitChar = str.split("");
// console.log(splitChar);
// let revChar = splitChar.reverse();
// console.log(revChar);
// let revStr = revChar.join("");
// console.log(revStr);

// let revStr = str.split("").reverse().join("");
// console.log(revStr);
// if (str == revStr) {
//   console.log("palindrome");
// } else {
//   console.log("Not palindrome");
// }

//!pop
// let arr = ["shanu", "Sharanya", "Sundari", "sheila", "Shakeela"];

// let res = arr.pop();
// console.log(res);
// console.log(arr);

//! push
// let res2 = arr.push("Shivanya", "Sharadh");
// console.log(res2); // updated length
// console.log(arr);

//! reverse
// let res3 = arr.reverse();
// console.log(res3);
// console.log(arr);

// let res4 = arr.shift();
// console.log(res4);
// console.log(arr);

// let res5 = arr.unshift("Sharadh", "Shraddha");
// console.log(res5);
// console.log(arr);

// let arr = ["shanu", "Sharanya", "Sundari", "sheila", "Shakeela"];
// let res = arr.slice(3);
// console.log(res);
// res = arr.slice(2, 3); // (2, 3-1) => [Sundari]
// console.log(res);
// res = arr.slice(-3, -1); // (-3, -1-1) (-3,-2)
// console.log(res);
// console.log(arr);

//! splice
let arr = ["shanu", "Sharanya", "Sundari", "sheila", "Shakeela"];

// let res = arr.splice(2);
// console.log(res);
// console.log(arr);

// let res = arr.splice(0, 2);
// console.log(res);
// console.log(arr);

// let res = arr.splice(0, 1, "Shivani");
// console.log(res); // [shanu]
// console.log(arr);

// arr = [10, 40, 7, 98, 56];

// let res = arr.sort(function (a, b) {
//   return b - a;
// });
// console.log(res);
