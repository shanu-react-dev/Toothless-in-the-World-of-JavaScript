//! Addition and Subtraction
console.log(10 + 20); //30
var num1 = 7;
var num2 = 19;
var result = num1 - num2;
console.log(result);

var num3 = 10;
var num4 = "20";
console.log(num3 + num4);

var a = "10";
var b = null;
console.log(a + b);

var c = 40;
var d = "22";
console.log(c - d);
console.log(c + d);

var num5 = 20;
var num6 = "shanu";
console.log(num5 + num6);
console.log(num5 - num6); // (20 - Number(shanu)) (20 - NaN) => NaN
console.log(Number("Shanu"));
console.log(10 - true); // (10 - 1) => 9
console.log(10 + true);
// console.log(10 - null)
console.log(Number(null));
console.log(Number(undefined));
console.log(10 - undefined); //NaN
console.log(10 + undefined); // (10 + NaN) => NaN

//! multiplication and division
console.log(10 * "0"); //0
console.log(10 * "10"); // 100
console.log(10 * "10a"); //NaN
console.log(10 / 0); //  Infinity and typeof Infinity is number
console.log(10 / "a"); // NaN

//! Modulus
console.log(10 % 2);
console.log(10 % 3);
console.log(10 / 3);

//! Exponential

console.log(10 ** 3);
console.log(10 ** true);
console.log(1000000000 ** false);
console.log(0 ** false);
