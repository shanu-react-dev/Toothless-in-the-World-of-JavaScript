//! if
// let username = "Shanu";

// if (username === "Shanu") {
//   console.log("I am Shanu");
// }

// if (true) {
//   console.log("I am Shanu");
// }

// if (true) {
//   console.log("Hii This is Dabba");
// }

// if (username === "sharanya") {
//   console.log("This is Shanu");
// } else {
//   console.log("Sorry! This is not Shanu");
// }

//! else if
//? Write a program to print kid if the age is below 5, to print teenage if age is greater than 5 but less than 18, to print adult if the age is greater or equals to 18 and below 45 and to print old if age is greater than 45 or below 70 and to print Human does not exist if the age is in negative value or if it is greater than 70
// let age = 100;

// if (age >= 0 && age <= 5) {
//   console.log("You are a kid! Go and enjoy with mamma");
// } else if (age > 5 && age < 18) {
//   console.log("You are a teenage focus on study Otherwise IWKY!");
// } else if (age >= 18 && age < 45) {
//   console.log("You are an adult go and enjoy with girlfrnd or boyfrnd");
// } else if (age >= 45 && age < 70) {
//   console.log(
//     "You are an old person after few days you will die! Congratulations and RIP",
//   );
// } else {
//   console.log("Dabba fellow! Trying to be smart! Enter valid age");
// }

let isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("User is Logged In");
// } else {
//   console.log("User is not logged In");
// }

// if (!isLoggedIn) {
//   //false
//   console.log("User is not logged in");
// } else {
//   console.log("user is logged in");
// }

//! nested if else
let age = 18;
if (age >= 18 && age <= 45) {
  console.log("You are eligible by age! Will move for the nex part");
  let fitnessTest = true;
  if (fitnessTest) {
    console.log("You are fit! Let's go to Sign/Symbol test");
    let test = true;
    if (test) {
      console.log(
        "You have cleared the test now will go for final driving test",
      );
      let knowHowToDrive = false;
      if (knowHowToDrive) {
        console.log("Your license will get delivered");
      } else {
        console.log(
          "You have failed the driving test! Better luck next time...",
        );
      }
    } else {
      console.log("Sorry! you could not clear the test");
    }
  } else {
    console.log("You are not physically fit!");
  }
} else {
  console.log("Tata! you are not eligible");
}
