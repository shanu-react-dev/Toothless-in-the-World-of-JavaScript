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
