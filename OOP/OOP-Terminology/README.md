## Object Oriented Programming
Grouping code together in Objects
- focuses on the type of Object you're creating as a data variable

Encapsulate complexity of high level abstraction of logic and action
- everything has a 'home' and a purpose

**State that can be shared**

**Creates reusable code**

### Class
The blueprint that the developer makes Objects and instances from
- the logic used to generate Objects

```
Cat
```

### Property
Value or state belonging to an Object
```
'name', 'breed', 'meow', 'purr'
```

### Constructor
A special type of subroutine called to create an Object
- prepares the new Object for use
- often accepts arguments that the constructor function to set required member variables

```js
var Cat = function(name, breed){
  this.name = name
  this.breed = breed
}
```

### Instance  
An instance is a unique copy of a Class that represents an Object

*Create an object from a class*
```js
var kitty = new Cat()
```

### Method
An Object exposes its behavior through methods
- an action that an object is able to perform
- needs to do something with the Object it was called on
  - 'points' to the Object it belongs to
  - able to operate on data that is contained within the class

```js
var snowball = new Cat('snowball', 'fluffy')

snowball.purr = function(){
  console.log('purrrr, I am ' + this.breed)
}
```

### Prototype
When the object get a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype and so on
- another object that is used as a fallback source of properties
- prototype chaining reduces memory
```js
Cat.prototype.meow = function(){
  console.log('meow' + this.name)
}
```
