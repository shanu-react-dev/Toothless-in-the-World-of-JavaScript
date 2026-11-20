## Array

_Array is a non-primitive datatype which stores multiple values in a single variable in index form. The value which is stored inside an array known as elements and each and every element is having their position known as index. Index always starts from 0. It is mutable in nature._

_We can create an array in multiple ways using array literals, new keyword etc._

## Methods and properties

1. **length:** _Length is a property which helps us to get the number of elements present inside an array._

2. **at:** _at is an array method and it accepts either negative or positive index as an argument and returns the element present at the specified index. If the specified index is not present then it will return undefined._

3. **concat:** _It is an array method and it accepts any argument and will concatenate with an array. It does not modify the original array. It can be used to merge two or more arrays or values. It returns one new array with merged data._

4. **find:** _Find is an array method and it is used to check whether any element is present inside an array or not it accepts one function as an argument and returns the element if it is present else it will return undefined._

5. **findIndex:** _This is similar to find and it also accepts one function as an argument and returns the index value of an element if it is present inside an array if the element is not present then it will return -1._

6. **findLast and findLastIndex:** _Both are array methods and similar to find and findLast but it will give the output for the last iteration of an element._

7. **includes:** _It is an array method and it accepts arguments and checks whether the specified argument is present or not if it is present then it will return true else it will return false._

8. **indexOf:** _This is an array method and accepts arguments and checks whether the element is present or not if the element is present then it will return the index of the element else it will return -1._

9. **join:** _This is an array method and it is used to convert the array into string. It accepts separators as an argument where we can pass empty string to remove commas, if we pass any other sign then it will be separating the elements using the same sign._

10. **reverse:** _Reverse is an array method and it reverse the order of the element and it modifies the order in original array._

11. **pop:** _Pop is an array method, it does not accept any argument. It helps to remove the element present at the last index and returns the removed element. It modifies the actual array._

12. **push:** _This is an array method where we can pass multiple elements as an argument and adds the element inside the existing array at last. It modifies the actual array. It returns the updated length._

13. **shift:** _This is a no argument array method and it removes the element present at the zeroth index and returns the removed element. It modifies the actual array._

14. **unshift:** _This is an array method and it can accept multiple argument and adds the passed argument in starting index. It modifies the actual array. It returns the updated length._

15. **slice:** _Slice is an array method and used to extract the elements from an array. It returns one new array with extracted elements. It accepts upto 2 arguments start index and end Index. End index will be considered as endIndex - 1. It doesn't modify the actual array._

16. **splice:** _splice is an array method and it accepts upto three arguments first is start index, second is deleteCount, third is elements needs to be added after deletion. It will modify the original array. It returns one new array with deleted elements._

17. **sort:** _sort is an array method and it accepts one function as an argument and it helps to sort the array either in ascending or descending order._
