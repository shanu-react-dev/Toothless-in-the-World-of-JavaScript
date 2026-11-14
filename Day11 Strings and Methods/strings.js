// let str = "Shanu";
// console.log(str);

// let str2 = 'Shanu said, "He is a good boy."';
// console.log(str2);
// let str3 = "I am Mohan's friend";
// console.log(str3);

// let para = `Hello this is Shanu. Currently I am working as an associate software engineer at testyantra and providing trainnings on mmultiple subjects to the students like HTML, CSS, JS, React, Next, Angular , Node, Express, Mongo etc.

// Helllo this is Amar here`;

// console.log(para);
// let username = "Amarjeet";
// let age = 19;
// let combinedData = `Hii I am ${username}. My age is ${age}`;
// console.log(combinedData);

// //! constructor function
// //? here string is an iterable object
// let str4 = new String("Shanu Singh");
// console.log(str4);

//! length (property)
// console.log(str4.length);
//! at method
// let username = "Amarjeet";
// console.log(username.at(0));
// console.log(username.at(5));
// console.log(username.at(-4));
// console.log(username.at(100));
// console.log(username.at(true));
//! charAt
// console.log(username.charAt(0));
// console.log(username.charAt(-1));
// console.log(username.charAt(100));

//! charCodeAt
// let str = "Amarjeet";
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(100));

//! concat
// let res = str.concat("Kumar");
// console.log(res);
// let res2 = str.concat(true, 100, undefined);
// console.log(res2);
// console.log(str);

//! endsWith
// let str = "Shanu";
// let res = str.endsWith("u");
// console.log(res);

//! startsWith
// res = str.startsWith("s");
// console.log(res);

//! includes
// res = str.includes("h");
// console.log(res);

//! indexOf
// let str = "Kalees";
// let res = str.indexOf("e");
// console.log(res);

//! lastIndexOf
// res = str.lastIndexOf("e");
// console.log(res);

// res = str.lastIndexOf("z");
// console.log(res);

//! padEnd and padStart
// res = str.padEnd();

//! slice, substring and substr -> Extraction of the part of the string
// let username = "Amarjeet Singh";
//? slice(startIndex, lastIndex) lastIndex is lastIndex-1
// let res2 = username.slice(4);
// console.log(res2);
// res2 = username.slice(4, 10);
// console.log(res2);
// res2 = username.slice(-4);
// console.log(res2);
// res2 = username.slice(-6, -1); // (-6, -2)
// console.log(res2);

//! substring
// let res3 = username.substring(4);
// console.log(res3);

// res3 = username.substring(-4); // negative index will be considered as zero
// console.log(res3);
// res3 = username.substring(5, 9); // (5, 8)
// console.log(res3);
// res3 = username.substring(5, -9); //(5, 0) -> (0, 5) -> (0,4)
// console.log(res3);

//! substr
// let res4 = username.substr(5, 5);
// console.log(res4);

let username = "Shanu Singh";
let dob = "22-02-2022";
let contact = "1234567890";

let generatePassword = (username, dob, contact) => {
  let password =
    username.slice(0, username.indexOf(" ")) +
    dob.slice(-4) +
    "@" +
    contact.slice(-3);
  console.log(password);
};

generatePassword(username, dob, contact);
