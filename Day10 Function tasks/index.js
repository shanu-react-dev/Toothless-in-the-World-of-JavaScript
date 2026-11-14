//! Write a function to check whether the text is palindrome or not
//? racecar = racecar
//? malayalam = malayalam
//? appa = appa
//? amar = rama

function isPalindrome(text) {
  //   console.log(text);
  let rev = "";
  for (let i = text.length - 1; i >= 0; i--) {
    // console.log(i);
    // console.log(text[i]);
    rev = rev + text[i];
  }
  //   console.log(rev);
  if (text === rev) {
    console.log("Palindrome");
  } else {
    console.log("Not palindrome");
  }
}

isPalindrome("amar");
isPalindrome("appa");
