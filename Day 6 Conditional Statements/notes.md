## Conditional Statements

_Conditional statement is a way to execute a particular block of code based on certain conditions. In JavaScript we can perform conditional statements using if, if else, else if, switch._

1. **if:** The if statement is also known as true block statment. Here the particular block of code will be executed only if the condition is true. If the condition is false then no output will be displayed.

```javascript
if (condition) {
  // block of code or statments
}
```

2. **if else:** Here we have if else which is used to provide the output on both scenario whether the condition is true or false. Inside `if` we will have true statement block whereas inside else we will be having false statement block.

```javascript
if (condition) {
  // true block statements
} else {
  // false block statemnets
}
```

3. **else if:** This way of conditional statement allows us to check multiple conditions and based on the condition particular block will be executed.

```javascript
if (condition1) {
  // true block
} else if (condition2) {
  // true block
} else if (condition3) {
  // true block
} else {
  // false block
}
```

4. **switch:** Switch is also a way of conditional statement and it executes code based on cases which will be compared with the variables or values (Strictly).

```javascript
let isLoggedIn = true;
switch (isLoggedIn) {
  case true:
    console.log("User is logged in");
    break;
  case false:
    console.log("User is not logged In");
    break;
  case "true":
    console.log("User is logged In");
  default:
    console.log("Don't know what is there");
}
```
