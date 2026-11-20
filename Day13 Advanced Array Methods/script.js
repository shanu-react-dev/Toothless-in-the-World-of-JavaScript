let arr = [1, 2, 4, 9, 10];

//! map
// [1, 4, 16, 81, 100]
let res = arr.map(function (ele, index) {
  //   console.log(ele);
  return ele * ele;
});

// let str = "Shanu";
// str.map(function () {});

console.log(res);

let fruits = ["Orange", "Papaya", "Grapes", "Pineapple", "Apple"];
let res2 = fruits.map(function (ele, index) {
  //   console.log(index);
  //   console.log(ele);
  return ele.toUpperCase();
});
console.log(res2);

// res2 = fruits.map(function (ele, index) {
//   if (ele.includes("pp")) {
//     return ele;
//   }
// });
// console.log(res2);
//! filter
// res2 = fruits.filter((ele, index) => {
//   if (ele.includes("pp")) {
//     return ele;
//   }
// });
// console.log(res2);

//! forEach
// let data = fruits.forEach((ele) => console.log(ele));
// console.log(data);
// fruits.forEach(function (ele) {
//   console.log(ele);
// });

//! reduce
// let arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res5 = arrOfNums.reduce(function (acc, currVal) {
//   return acc + currVal;
// });
// console.log(res5);

// let emptyArr = [];

// let res6 = emptyArr.reduce((acc, currVal) => acc + currVal, 0);
// console.log(res6);
