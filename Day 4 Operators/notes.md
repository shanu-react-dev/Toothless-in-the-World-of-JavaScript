## Operators in JavaScript

_Operators are predefined symbol and it is used to perform some specific tasks based on operands (variable or value). There are multiple operators in JavaScript._

1. **Arithmetic Operator:** _In JavaScript arithmetic operators are used to perform mathematical expressions such as addition(+) subtraction (-) multiplication (\*) division (/) modulus (%) and exponent (\*\*)._

## Type Conversion and Type Coercion

_Both are the way to convert a dataype to another datatype such as from a number to a string. **Type Conversion** refers to manually converting data into another type. wheras **Type Coercion** refers to implicit conversion, Here the data will be automatically will get converted from one type to another._

```javaScript
// Manual Conversion
// Here a developer is trying to convert one string datatype into a number
let a = Number("95")

let b = 10
let c = "20"
console.log(b + c) // 1020
// Here implicit conversion is happening whenever it is a string datatype and we are performing addition then the values will be concatenated.
//! it will only work with addition. rest of the arithmetic operators will be converting into numbers.
```

## Truthy Value and Falsy Values

_Truthy Values refers to a value when It is converted to boolean it will always return true. Whereas Falsy values are the value which will be always returning me false when we try to convert it to boolean._

```javascript
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(" ")); // true
console.log(Boolean("S")); // true
```

2. Relational Or Comparison Operator

_Relational Opeartors are used to compare between two values. It will always return one boolean value. There are multiple Relational Operators as follows._

    1. **less than `<`:** _It will compare two values and returns true if the first value is lesser than the second one, else it will return false._
    2. **greater than `>`:** _It will compare two values and returns true if the first value is greater than the second one, else it will return false._
    3. **less than equals to `<=`:** _It will compare two values and returns true if the first value is lesser than or equals to the second one, else it will return false._
    4. **greater than equals to `>=`:** _It will compare two values and returns true if the first value is greater or equals to the second one, else it will return false._
    5. **double equals to `==`:** _This operator checks only for the values if both values are equal then it will return true else false. e.g `9 == "9"` it will return true becuase values are equal._
    6. **triple equals to `===`:** _This operator compares two operands or values strictly, It compares values along with its type if both are same then it will return true else false. e.g. `9 === "9"` This will return false values are equal but datatypes are different._
    7. **not equals to `!=`:** _This is similar to double equals operator and if the values are equal then it will return false else it will return true. It also compares only values._
    8. **not double equals to `!==`:** _This is strict operator and checks for the values and its datatypes. If anything is not equal then it will return true else false._

3. **Assignment operator:** _These operators are used to assign values to the existing or new variables. Here we can perform the operation as well as assgin the updated values together._

4. **Logical Operators:** _The logical operators are used to group two or more conditions together. If there are conditions it will always return one boolean value else it will return one value itself._
5. **Unary Operators:** _Unary Operator is an operator which will perform the operations only on one operand. There are several Unary operators as follows._
   - **Increment Operator:** _This is a unary operator which will help to increase the value by 1. it is having pre-increment operator where firs the operations will be performed and the value will be assigned. We have Post Increment operator where the value will be assigned first then it will be increased by 1._
   - **Decrement Operator:** _This is also a unary operator and it helps to decrease the value by 1. Here we have pre-decrement where the value will be decreased first then it will be assigned. We have post-decrement also where the value will be assigned first then it will be decreased by 1._
