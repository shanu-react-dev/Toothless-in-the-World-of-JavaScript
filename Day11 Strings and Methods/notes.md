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
