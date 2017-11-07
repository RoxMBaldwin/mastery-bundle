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
  this.purr = function(){
   console.log('purrrr')
}
```

###Instance  
