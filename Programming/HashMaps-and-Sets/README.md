## Programming: Describe Hash Maps && Sets

### Hash maps 🥔
Uses a hash function to compute an index into an array of slots, from which, the desired value can be found
- takes multiple things and can store it in a smaller list
- outputs are unique
- stores unique key value pairs
  - hash function is on the key

#### Hash Function:
Allows us to map large inputs into smaller outputs

```
hash-key = (key * constantRandom#) % range
```

**range:** the hash key generated will be in between 0 - range

**constantRandom#:** will be constant for every key you're generating into a hash key

> Hashing Collision: a hash function that takes two different keys and returns the same hashed key

#### Benefits of a Hash Map:
1. Security
  - makes it less obvious what the key is
2. Memory
  - hashed keys take up a smaller amount of memory since they're a fixed length
3. Efficent
  - if you have a lot of data and you want to index it
  - it's easier to organize and access

#### [Big O Complexity](http://bigocheatsheet.com/):
**O(1)**
- doing multiple operations to convert, hash and add
- you can target the index to add it to
- very efficent

>Inserting : O(1)

>Removing : O(1)

>Accessing a value using a key : O(1)

### Sets 📋
**Concept of sets:**
It's essentailly a list
- every item in it is considered unique
- *'Where does "setA" interact with "setB"?'*
  - similar to a SQL inner-join
  - used when you want to know how data structures interact with one another 🌒🌘

#### Big O Complexity
The complexity can vary, it just depends on how you implement it  
