# Scopes in JavaScript

_Scope reperesents the visibility or accessibility of a variable. It tells where the variable has been declared or where it can be accessed. There are three types of scopes in JavaScript._

- **global scope:** The variable declared in global scope can be accessed anywhere whether it is a function, class or anything.
- **block scope:** The variables declared using let and const keywords follows block scope but the variabels created using var keyword does not follow block scope. A block scope said to be a conditional statmenet like if else, switch or loops like for, while, do while. These are known as block {}.
- **Local Scope:** Local Scope is also said as Function scope where the variables declared using any keywords var, let and const can be accessed only inside the function. It can't be accessed outside of the functions.

## Closures

_Closure is a situation where child function can be able to access the parent function variables (variables declared inside parent function) even after execution of parent function._

## Hoisting

_Hoisting is a mechanism which moves the variable decalration to the top of their current scope. Means variables can be accessed before its initialization like variables created using var keyword and named functions._
