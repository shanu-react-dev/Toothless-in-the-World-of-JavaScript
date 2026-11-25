## DOM

_DOM stands for Document Object Model, it is an API provided by browser. It represents the entire HTML document in a tree like structure. It helps to update the content dynamically on the UI._

_It represents everything in the form of tree like structure and everything will be cnsidered as a node or object._

_It provides certain methods to access and manipulate the HTML elements dynamically._

1. **document.getElementById():** _This method accepts one ID name as an argument and returns the first matching element. If the specified argument does not exist in HTML document then it will return null._

2. **document.getElementsByClassName():** _This method accepts one classname as an argument and returns one HTMLCollection (Array Like Object). This collection contains only element node._

3. **document.getElementsByTagName():** _This method accepts one tag name as an argument and returns one HTML Collection. Here also we will get only element nodes inside the collection. It returns the all elements having the same tag name as an argument._

4. **document.querySelector():** _This method accepts one CSS selector as an argument like class as `.className`, id as `#idName` etc. It returns the first matching element. If the specified argument does not exist it will return null._

5. **document.querySelectorAll:** _This is simialr to querySelector, it also accepts css selector as an argument and returns the NodeList (Array Like Object). It contains each and every node inside the array._

## document

_Document is the top most object for the HTML file, it contains the methods or properties which can be applied on the HTML tags, elements or attributes, it consists of the methods by which we can manipulate the existing elements, can create the new elements, delete or read as well._

## NodeList and HTMLCollection

_Both are array like objects where Nodelist contains each and every node of and elements such as element node, attribute node, text node etc. Whereas HTML collection contains only element nodes._
