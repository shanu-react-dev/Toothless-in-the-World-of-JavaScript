## Variables Declaration

_In JavaScript we can declare variables in three ways. There are three keywords by which we can declare variables. var, let and const._

## var let and const

_All of these three are keywords in JavaScript used to declare the variabels. All of these are having different behaviors._

| Keywords | Declaration  | Initialization | Dec & Init | Re-Decl      | Re-Init      | Re-dec & Re- init |
| -------- | ------------ | -------------- | ---------- | ------------ | ------------ | ----------------- |
| var      | possible     | Possible       | Possible   | Possible     | Possible     | Possible          |
| let      | possible     | Possible       | Possible   | Not Possible | Possible     | Not Possible      |
| const    | Not Possible | Not Possible   | Possible   | Not Possible | Not Possible | Not Possible      |

_Variables create using var keyword present inside global scope where as let and const variable will have block scope._

_Variables created using var keyword we can access before its initialization but we can't access let and const variables._

_Variables created using const variable can't be changed until and unless it is Non-Primitive datatype._

_Let and Const were introduced in ES6 feature of JavaScript to avoid global variable pollution._

## Global Namespace Pollution

_Global namespace pollution in JavaScript occurs when too many variables, objects, or functions are declared in the global scope, making them accessible anywhere in the application_
