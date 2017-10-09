# ⛩ Pillars of Object-Oriented Programming ⛩

### Encapsulation:
Mechanism of binding together the data and the code so that they are not misused or accidentally modified

💊 **Real world example:**

If you go to pharmacy, only pharmacist has access to medication and knows what to give you. Also, only the pharmacist knows the details about the medicine and you don't need to know all the details.

**Describe how encapsulation helps keep code more maintainable:**
- Achieved through Class
- Group ‘like’ with ‘like’
- Reduces complexity
- More maintainable
- We know exactly which class a specific behavior or property belongs in

### Polymorphism:
The process of exhibiting multiple actions with only one interface

  *' a deer is an animal, a deer is a vegetarian, etc '*

🦌 **Real world example:**

A deer is an animal, but it is also a vegetarian

An animal can walk.

A vegetarian only eats vegetables

A deer can walk and only eats vegetables
* the deer inherit the ‘walk’ class and the ‘only eats vegetables’ class
* Can assigned properties of one class to another class

**Describe how polymorphism helps keep code more maintainable:**
- Code is more concise if you don't have to check for multiple types || Reduces conditional logic
-  More maintainable
- Inheritance from >2 superclasses to a subclass
- If you can answer the question 'is a' with multiple things, a class is said to be polymorphic

### Inheritance:
The process by which one object acquires the properties of anther object
- The Object inherits properties down from the parent and then has access to those base properties

🏘 **Real world example:**

A ‘house’ / ‘apartment’ are a type of building

Building is the parent (superclass) of both house and apartment (subclasses)
* Properties like 'numOfFloors' is a common property of a class Building that both subclasses will inherit

**Describe how inheritance helps keep code more maintainable:**

- The more broad or generic class:
  - you can create new instance of it which interacts the details of the original
- Prevents use from duplicating code
  - define the common functionality once in the superclass then it gets automatically passed down to the subclasses

### Abstraction
The process of hiding unnecessary details from the user to avoid complexity and distraction
- The other three pillars are essentially a form of abstraction

📺 **Real world example:**

Using the remote control for the TV: <br>
 You don't have to worry about how the pressing of the key in the remote changes the channel on the TV, you just know that pressing the + volume button will make the TV louder

or

jQuery -  manipulates the DOM for us without use knowing all of the complex details

**Describe how abstraction helps keep code more maintainable:**
- The whole idea is to make things easier for the Developer
- Hide complexity so we don't have to worry about it
  - We don't have to worry about code we don't know about —> it does what its suppose to


# Instance Methods and Variables:
- the constructor function is a subroutine that creates objects
- An object that is created using a class is said to be an **instance** of that class.
  - We will sometimes say that the object belongs to the class.
  - every object *'knows'* what class was used to create it


- The variables that the object contains are called **instance variables**.

- The methods (that is, subroutines) that the object contains are called **instance methods**.
  - data that belongs to individual objects; every object has its own copy of each one
  - lives in memory for for the life of the object is it owned by
