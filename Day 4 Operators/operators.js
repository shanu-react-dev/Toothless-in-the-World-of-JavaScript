//! Addition and Subtraction
// console.log(10 + 20); //30
// var num1 = 7;
// var num2 = 19;
// var result = num1 - num2;
// console.log(result);

// var num3 = 10;
// var num4 = "20";
// console.log(num3 + num4);

// var a = "10";
// var b = null;
// console.log(a + b);

// var c = 40;
// var d = "22";
// console.log(c - d);
// console.log(c + d);

// var num5 = 20;
// var num6 = "shanu";
// console.log(num5 + num6);
// console.log(num5 - num6); // (20 - Number(shanu)) (20 - NaN) => NaN
// console.log(Number("Shanu"));
// console.log(10 - true); // (10 - 1) => 9
// console.log(10 + true);
// console.log(10 - null)
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(10 - undefined); //NaN
// console.log(10 + undefined); // (10 + NaN) => NaN

//! multiplication and division
// console.log(10 * "0"); //0
// console.log(10 * "10"); // 100
// console.log(10 * "10a"); //NaN
// console.log(10 / 0); //  Infinity and typeof Infinity is number
// console.log(10 / "a"); // NaN

//! Modulus
// console.log(10 % 2);
// console.log(10 % 3);
// console.log(10 / 3);

//! Exponential

// console.log(10 ** 3);
// console.log(10 ** true);
// console.log(1000000000 ** false);
// console.log(0 ** false);

//! Questions
// console.log(Infinity + NaN);
// console.log(typeof "shanu" + 10); //string10
// console.log(typeof true + 10); // Boolean10
// console.log(Boolean(undefined) + 10); // (false + 10) -> (0 + 10) => 10 //! Type conversion (Explicit conversion)
// console.log(true + 9); // Type Coercion //!(Implicit conversion)

// console.log(Boolean(null)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false

// console.log(Boolean(" ")); // true
// console.log(Boolean("S")); // true

// console.log(" " + 9); // ' 9'
// console.log(Boolean(" ") + 9); //10

//! Relational Operator or Comparison Operator
// let a = 10;
// let b = 20;
// console.log(a > b);
// console.log(a < b);

// let num1 = 10;
// let num2 = "10";
// console.log(num1 <= num2);
// console.log(num1 >= num2);

// let num3 = "amar";
// let num4 = "Amar";
// console.log(num3 < num4); // 97 < 65
// console.log(num3 > num4);
// console.log(num3 == num4);

// let num5 = 10; // number
// let num6 = "10"; // string
// console.log(num5 == num6); // 10 == 10
// console.log(num5 === num6); // 10 == 10 && number == string

// console.log(num5 != num6); // 10 not equals to 10
// console.log(num5 !== num6); // 10 not equals to 10 && number not equals to string
// console.log(null == undefined);

// console.log(typeof "" == "string"); // true
// console.log(Number("") === 0); // true
// console.log(typeof ""); // string == string
// console.log(10 > 11n);

// console.log(10 < 9 > 10); // false > 10 -> 0 >10 => false
// console.log(10 > 9 < 9); // 10>9<9 -> true < 9 -> 1 < 9 = > true

//! In Python the above programming will follow different approach
//  (10 < 9 > 10) = > (10<9 && 9 > 10)

//! Assignment Operator
// let userName = "Shanu";
// let num1;
// num1 = 10;
// num1 = num1 + 5; // 10 + 5 = 15
// console.log(num1);
// let num1 = 10;
// let num2 = 5;
// let result = num1 + num2; // 10 + 5
// console.log(result); //15
// console.log(num1);
// console.log(num2);
// num1 = num1 + num2; //10 + 5 = 15
// num1 += num2;
// console.log("Updated value of num1:", num1);

// let num3 = 18;
// let num4 = 24;
// num3 = num3 - num4
// num3 -= num4;
// console.log(num3);
// num4-=num3 // num4 = num4 - num3 = 24 - 18
// console.log(num4)

// num4 /= num3
// console.log(num4)

// num4 *= num3;
// console.log(num4);

// num4 %= num3;
// console.log(num4);

// num4 **= num3;
// console.log(num4);

//! Unary Operator
// let a = 10;
// console.log(a++); // 10 //! post increment
// console.log(a);
// console.log(++a); // 10 + 1=> 11 //! pre-increment
// console.log(a);

// let b = 19;
// console.log(b--); // 19 //! post decrement
// console.log(b); // 18

// console.log(--b); //18 //! pre-decrement
// console.log(b); //18

// let num1 = 10;// 11, 12
// let num2 = 5;// 4

// let expr = num1++ + num2 - --num2 + ++num1; // 22, 17, 10, 23
// // 10 + 5 - 4 + 12 = 23
// console.log(expr);

// let num1 = 20;
// let num2 = 15;
// let expr = (num1 % num2) + ++num1 - num2; //9, 11, 7
// // 5 + 21 - 15 => 11
// console.log(expr);

//! Logical Operators in JS
//? AND Operator
// let a = 10;
// let b = 20;
// let res = a < b && b > a; // 10  < 20 && 20 > 10
// console.log(res);
// let res2 = a && b;
// let res2 = b && a;
// console.log(res2);

//? OR
// let res3 = a || b; // 10 || 20
// console.log(res3);
// let res4 = a > b || b < a;
// console.log(res4);
// console.log(null && undefined);
// console.log(null || undefined);
// console.log(null || undefined || 0 || false);

//? NOT (!)
let userName = "Shanu";
console.log(!userName);
let user2 = null;
console.log(!user2);
