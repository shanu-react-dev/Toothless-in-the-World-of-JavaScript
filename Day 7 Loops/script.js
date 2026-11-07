//! while
// while (true) {
//   console.log("Hello");
// }

let isLoggedIn = true;
while (isLoggedIn === true) {
  console.log("I am Logged in!");
  //   isLoggedIn = false;
  isLoggedIn = !isLoggedIn;
}

//! do-while
// do {
//   console.log("I got the chocolate");
// } while (false);
// do {
//   console.log("I got the chocolate");
// } while (true);

// let hasStudied = true;
// do {
//   console.log("Chocolate provided");
//   hasStudied = !hasStudied;
// } while (hasStudied);

// let count = 0;
// do {
//   console.log(count);
//   count += 1;
// } while (count <= 10);

//! for

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//! write a program to print even number between 1 to 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i, "is even number");
//   }
// }

//! pattern
//? ****
//? ****
//? ****
//? ****

// for (let i = 0; i < 4; i++) {
//   let star = "";
//   for (let j = 0; j <= 4; j++) {
//     // star += "* ";
//     star = star + "* ";
//   }
//   console.log(star);
// }

// let age = 19;
// age += 20; //age = age  + 20

// *
// **
// ***
// ****

// for (let i = 1; i <= 5; i++) {
//   let data = ""; // "* * "
//   for (let j = 1; j <= i; j++) {
//     data += "* ";
//   }
//   console.log(data);
// }

//! break and continue
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     console.log(i);
//     break;
//   }
// }
for (let i = 0; i <= 10; i++) {
  //   console.log(i);
  if (i == 5 || i === 7) {
    continue;
  } else {
    console.log(i);
  }
}
