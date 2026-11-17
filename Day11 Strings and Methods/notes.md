## String

_String is a primitive datatype in JavaScript. It is a sequence of characters enclosed within double or single quotes. It is immutable means It can't be modified using any methods or properties._

_There are several methods which can be used on string to perform some changes or to get expected transformation of a string._

1. **length:** _length is a property of string which returns the number of characters present in a string._
2. **at:** _It is a method which helps to get the specific character using index value. It can accept one argument and return the character present at the specified index. It can accept all negative and positive index. If the specified index is not present it will return **undefined**._

3. **charAt:** _charAt is a string method and it is similar to at but it doesn't accept any negative index as an argument, if any negative index or invalid index is there then it will return empty string. It will also accept only one argument and returns the character present at the specified index._

4. **charCodeAt:** _charCodeAt is a string method and it accepts one index value as an argument and returns the ASCII value of the character present at the specified index. If there is no character or negative index as an argument then it will return **NaN**._

5. **concat:** _concat is a string method and it accepts multiple arguments. Here the passed argument will be concatenated with the existing value._

6. **startsWith and endsWith:** _Both are string methods and used to check whether a string is starting or ending with the specified argument or not. startsWith will check the starting character with the passed argument if it is matching it will return true else false. Same goes to endsWith it will check last character._

7. **includes:** _This is a string method and it accepts string as an argument and it will check whether the specified character or sequence of character is present inside the existing string or not. If it is present then it will return true else false._

8. **indexof and lastIndexOf:** _These are string methods and accept any string as an argument and returns the index value of the specified argument if it exists. If the specified argument does not exist then it will return -1. **indexOf** returns the first matching argument from the string whereas **lastIndexOf** will return the last matching argument with the string._

9. **slice, substring and substr:** _All these three are string methods and used to extract the part of the string from an existing string. **slice** accepts start index and end index. Here end index will be considered as end index - 1 and it will return the string from the start index upto the end index - 1. It can accept any positive or negative index value as an argument. **substring** is similar to slice but it doesn't accept any negative index. Here negative index will be considered as zero. It also accepts start index and end index and here also end index is considered as end index -1. **substr** accepts upto two arguments and returns the specific part of an existing string. It accepts start index and length. From starting index to the specified length it will be returning the string value._

10. **toString:** _This is a string method and it converts the particular data into string format.It does not accept any arguments._

11. **padEnd and padStart:** _Both are string methods and used to show the partial character such as ATM Card Number, Account Number, Aadhaar Number etc. padEnd and padStart accepts two arguments where first one is length and second argument is the character you want to show instead original one. **padEnd** pads the character in ending whereas **padStart** pads the characters from starting._

12. **replace and replaceAll:** _Both are string methods and accepts two arguments first the string which we want to replace and the second argument is which will be used for the replacement. **replace** method replaces the first matching character whereas **replaceAll** will replace the entire matching character from a string._

13. **toLocaleLowerCase and toLocaleUpperCase:** _Both are string methods and used to convert the string into either lower case or uppercase. None of these accepts any arguments._

14. **toLowerCase and toUpperCase:**: _Both are string methods and used to convert the string into either lower case or uppercase. None of these accepts any arguments._

15. **trim, trimStart and trimEnd:** _All of these are string methods and does not accept any argument. trim will remove the swhite space from starting and ending whereas trimstart will remove the space from starting only whereas trimEnd will remove the space from ending._

16. **split:** _It is a string method and accepts separator as an argument. If we pass empty string as an argument it will split all characters in different index value in an array. if we don't pass anything then it will convert entire string into an array. if we pass one white space as an argument then it will convert the string into different index after a space. It also accepts limitations where we can pass length how many characters or words we need to show. At the end it converts the string into an array._
