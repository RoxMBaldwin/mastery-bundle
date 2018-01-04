## Programming: Stacks && Queues

### Stacks 📚
**LIFO**
<br>*last in, first out*

- if you want to add something to the stack, you add it to the 'top'
- if you want to take something from the stack, you take it from the 'top'
- **Push:** add a new item to the top of the stack
  - ```.push()```
- **Pop:** remove the top item from the stack
  - ```.pop()```

>Used in language processing<br>
>Any kind of compiler uses this approach

### Queues 🎢
**FIFO**
<br>*first in, first out*

- first item added in the queue will be the first item to come out of the queue
- **Enqueue:** add a new item to the end of the queue
  - ```.unshift()```
- **Dequeue:** remove the item at the front of the queue
  - ```.shift()```

## Big O Complexity
**O(1**)
- ```push, pop, unshift, shift```
***: all constant time***
  - takes a single operation
  - you're only manipulating one place

Both stacks and queues are useful models that mimic a lot of real world behavior
  - Stack: putting away and taking plates from the cupboard
  - Queue: waiting in line
