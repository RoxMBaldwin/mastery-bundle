# Programming: Distinguish between Primitive and Reference types

### List types and describe which ones are primitive and which are reference types
|Primitive    |             |                             |
|------------:|------------:|------------------------------:|
|String       | ```'clowns'```    | used to represent textual data|
|Number       | ```666```         | can be used for all numbers including floats, +Infinity, -Infinity and NaN|
|Boolean      |  ```false```      | a conclusion represented by true or false|
|Undefined    | ```undefined```| a variable that has not been assigned a value // we know that is has value, we just don't know what it is|
|Null         | ```null```| has one value and we know it is nothing|



|Reference    |             |                               |
|------------:|------------:|-------------------------------:
| Objects | ```var planet = {name:"Jupiter", hasRings: true, sizeKM: 139,822```} |a collection of properties: associates a key with a value. Properties can be values of any type && properties/values are identified by keys  |
|Array |```var veggies = ['Cabbage', 'Turnip', 'Radish', 'Carrot']; veggies[1]= 'Turnip' ``` |regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. |
|Functions|```(function tasty(){console.log('Girls have more tastebuds than boys')})()``` |executes logic and mainpulation of properties within the object. That change is seen by the caller and any other functions that have references to the object. |

*[Technically, arrays and functions are objects]*



### Describe the difference between primitive and reference types
Primitive value is stored directly in the location that the variable accesses. The original variables are incapable of being changed and are basic types of data.

Reference types are are any instantiable class. A class is instantiable if we can create instances of the class. They are stored as a reference

**Primitive values are data that is stored on the stack, whereas, Reference values are objects that are stored on the heap**

### Describe the difference between == and ===

#### Comparison Operators:
The identity operator acts the exact same as the equality operator, except:

**Equality || ==**
  * will compare the two values for equality **after doing the necessary type conversions**
  ```js
  var stringInteger = "666";
  var numberInteger = 666;

  stringInteger == numberInteger //true

  whereas:

  stringInteger === numberInteger //false
  ```

**Identity || ===**
  * no type conversion is done
  * the types must be the same to be considered equal

  ```js
  a === b
 ```

***Value types (numbers):***
  * returns ```true``` if ```a``` and ```b```:
    * [x] have the same value
    * [x] are of the same type


  ***Reference types:***
  * returns ```true``` if ```a``` and ```b```:
    * [x] reference the exact same object


  ***Strings:***
  *  returns ```true``` if ```a``` and ```b```:
    * [x] are both strings
    * [x] contain the same number of characters
    * [x] the letter-case is the same

    ```js
    var magic = "Yum"
    var taco = "Yum"
    var truck = "yum"

    taco === truck //false
    magic === taco // true
    ```
    * creating a string object using the ```String``` constructor creates something of type ```Object``` that behaves as a string most of the time.

    ```js
    var string = "666"
    var cheese = new String("666")

   string === cheese //false
   ```
