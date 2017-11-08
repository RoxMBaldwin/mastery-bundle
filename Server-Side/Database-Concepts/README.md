## Server-Side: 🤖 Database Concepts


### Explain the difference between data and information

**Data**
- simply facts or figures
- bits of information but not information itself
- data are facts related to any object in consideration

***example:*** *‘name’, ‘hair’, ‘color’*

**Information**
- data that has been processed, interpreted, organized, structured or presented so as to make them meaningful or useful
- data with some context / meaning

***example:*** *a school yearbook*
- without context like names, grades, pictures then the data doesnt make sense

### Explain what an entity is

Any object in the system that we want to model and store information about
- usually recognizable concepts (*either concrete or abstract*)
  * such as person, places, things or events which have relevance to the database.
- is an object that represents a person, place or thing
- has a handful of attributes
  * an attribute is a piece of information that describes an entity
-a way to organize data; ‘label’, gives meaning to data
Ex. Employee, Student, Lecturer


### Define and describe an DBMS and why you would use it

**Database Manangement System:**
- a system of software to retrieve, save and handle data from the database
  - has to be efficent, reliable, convenient and safe multi-user storage and access to massive amounts of persisent data
- a structured set of data held in a computer so that it can be easily searched and accessed in the future

💡 **a 'BASE' for the 'DATA'** 💡


### Describe how data is stored in a relational database using the terms table, field, record
**Relational database:**
A database structured to recognize relations among stored items of information
- a collection of data items organized as a set of formally-described tables from which data can be accessed / reassembled in different ways without having to recognize the database tables

**a collection of tables that you can specify the relationship between them**

**How is data stored in a relational database:**
Organize data into one or more tables (*relations*) of columns and rows with a unique key identifying each row (*records*)

|Clowns|   |   |   |
|-----|:---:|---:|---:|
|ID| name | creepy | numOfFingers |
|1| Bobo| true| 10|
|2| SugarWolf| false| 6|
|3| LittleSqueak| true| 2|

**Table:** data is stored in tables
  - similar to a spreadsheet
  - a collection of tables and rows that can be accessed
  - ***Clowns***

**Field:** column
  - represents a single piece of data about a single record / row stored in the table
  - very specific (specify the type *text, integer, data/time, etc*)
  - ***ID, name, creepy, numOfFingers*** :: *ID, text, boolean, integer*

**Record:** row
  - used to identify a single / specific piece of data in the table
  - ***1, Bobo, true, 10*** :: ***2, SugarWolf, false, 8*** :: ***3, LittleSqueak, true, 2***


### Describe and define primary key and foreign key
**Primary Key:**
Used to specify and identify the entity
- unique
- never repeated
- specifically for that entity

**Foreign Key:**
A key / ID that does not belong to the entity, rather, it belongs to the table
- can be repeated
- represents the relationship between two different primary keys
