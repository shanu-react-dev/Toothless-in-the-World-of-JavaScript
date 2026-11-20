let arr = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "Uranus",
  "neptune",
  "pluto",
];

//! traditional way to iterate
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// }

//! es6 feature
for (let i of arr) {
  console.log(i);
}

let str = "Shanu";
for (let i of str) {
  console.log(i);
}
