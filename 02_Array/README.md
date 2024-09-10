##### Table of content

---

- [What are data structures?](#what-are-data-structures)
- [What is an Algorithm?](#what-is-an-algorithm)
- [Understanding Data Structures: Building and Utilizing](#understanding-data-structures-building-and-utilizing)
- [How do Computers Store Data?](#how-do-computers-store-data)
  - 1. [Central Processing Unit (CPU)?](#1-central-processing-unit-cpu)
  - 2. [Random Access Memory (RAM)?](#2-random-access-memory-ram)
  - 3. [Storage (Hard Drives, SSDs)?](#3-storage-hard-drives-ssds)
- [Interplay Between CPU, RAM, and Storage?](#interplay-between-cpu-ram-and-storage)
- [Understanding Computer Architectures: 16-bit, 32-bit, and 64-bit, as well as Bits, and Bytes?](#understanding-computer-architectures-16-bit-32-bit-and-64-bit-as-well-as-bits-and-bytes)
  - 1. [Bits and Bytes?](#1-bits-and-bytes)
  - 2. [16-bit Computer?](#2-16-bit-computer)
  - 3. [32-bit Computer?](#3-32-bit-computer)
  - 4. [64-bit Computer?](#4-64-bit-computer)
- [Fundamental Operations on Data Structures?](#fundamental-operations-on-data-structures)
- [Big-O for the various array methods?](#big-o-for-the-various-array-methods)
- [Static vs. Dynamic arrays?](#static-array-vs-dynamic-array)
  - [Static Arrays?](#static-arrays)
    - [Characteristics of the static array?](#characteristics-of-the-static-array)
  - [Dynamic Arrays?](#dynamic-arrays)
- [Reference type?](#reference-type)
- [How to build an Array?](#how-to-build-an-array)
  - [Class - CustomArray](#1-class---customarray)
  - [Method - get(index)](#2-method---getindex)
  - [Method - push(item)](#3-method---pushitem)
  - [Method - pop()](#4-method---pop)
  - [Method - deleteArrayItem(index)](#5-method---deletearrayitemindex)
  - [Method - deleteItemFunction(index)](#6-method---deleteitemfunctionindex)

---

# What are data structures?

Data structures are specialized formats or arrangements that allow computers to efficiently store, organize, and manipulate data. They provide a way to structure and manage data to perform operations on that data efficiently.

Data structures are used to organize and store a collection of values, which can be of various types, such as numbers, strings, or other complex data types.

# What is an Algorithm?

An algorithm is a well-defined, step-by-step procedure or set of instructions for solving a specific problem or accomplishing a particular task.

Algorithms are used to solve problems, perform computations, or complete tasks systematically and efficiently.

> Data structures + Algorithms = Program

# Understanding Data Structures: Building and Utilizing

Let's talk about the building data structures:

Building data structures involves designing and implementing them from scratch. This includes defining the structure, choosing appropriate algorithms, and coding the functionalities.

Developers need to consider factors like the type of data to be stored, access patterns, and the operations the data structure will support.

For example, building a linked list, array, tree, or hash table involves specifying the structure and designing algorithms for insertion, deletion, and retrieval.

Now, let's talk about the utilizing data structures:

Once a data structure is built, the next step is integrating it into a program or system. This involves utilizing the implemented data structure to perform desired operations.

Understanding how to use a data structure effectively is crucial for optimizing code efficiency. Developers need to leverage the strengths of each data structure for specific tasks.

For example, using an array for fast random access, a linked list for efficient insertions and deletions, or a hash table for quick key-based retrieval.

In conclusion, mastering both aspects—building and utilizing data structures—is essential for a well-rounded understanding. It enables developers to create effective solutions and make informed choices when implementing data structures in real-world scenarios.

# How do Computers Store Data?

##### 1. Central Processing Unit (CPU):

The CPU (Central Processing Unit) is the brain of the computer and is primarily responsible for processing and executing instructions.

The CPU has a set of small, high-speed storage locations called registers. Data is temporarily stored in registers during processing for quick access. Registers have limited capacity, and their content is volatile, meaning it is lost when the computer is powered off.

##### 2. Random Access Memory (RAM):

RAM (Random Access Memory) serves as temporary storage for data that the CPU is actively using or processing. Like registers, RAM is volatile, but it offers a larger storage capacity. Data stored in RAM is quickly accessible by the CPU. RAM is used for running applications, storing active processes, and caching frequently accessed data.

##### 3. Storage (Hard Drives, SSDs):

Storage devices, such as hard drives and SSDs (Solid State Drives), provide long-term, non-volatile storage for data and programs. Unlike RAM, data stored in storage devices persists even when the computer is powered off. It is non-volatile storage.

Storage devices are organized with file systems, enabling the storage and retrieval of files in a structured manner.

# Interplay Between CPU, RAM, and Storage:

Data moves from storage to RAM when needed by the CPU for active processing. After processing, results may be temporarily stored in RAM before being written back to storage.

The hierarchy of speed is evident, with CPU registers being the fastest, followed by RAM, and then storage devices. This hierarchy influences the efficiency of data access and manipulation.

Efficient algorithms and data structures are crucial for optimizing the interplay between these components, ensuring smooth and fast data processing.

Understanding how data is stored across the CPU, RAM, and storage devices is fundamental for designing efficient algorithms and developing high-performance computing systems.

# Understanding Computer Architectures: 16-bit, 32-bit, and 64-bit, as well as Bits, and Bytes?

### 1. Bits and Bytes:

- `Bit:` The smallest unit of data in computing, representing a binary digit (0 or 1).
- `Byte:` Comprises 8 bits. It is a fundamental unit for representing characters and data in computer systems.

Bytes are often denoted using symbols like KB (Kilobyte), MB (Megabyte), GB (Gigabyte), etc., to represent larger quantities of data.

The bit architecture determines the maximum amount of addressable memory, influencing the system's capacity to handle data.

### 2. 16-bit Computer:

A 16-bit computer architecture processes data in 16-bit chunks. A 16-bit architecture can address up to 2^16 memory locations.

Example Binary Value: `0101010101010101`, This 16-bit binary value represents a pattern in a 16-bit system.

### 3. 32-bit Computer:

A 32-bit computer architecture processes data in 32-bit chunks. A 32-bit architecture can address up to 2^32 memory locations.

Example Binary Value: `11001100110011001100110011001100`, This 32-bit binary value represents a repeating sequence in a 32-bit system.

### 4. 64-bit Computer:

A 64-bit computer architecture processes data in 64-bit chunks. A 64-bit architecture can address up to 2^64 memory locations, providing vast memory capabilities.

64-bit architectures generally offer better performance and support for larger memory, but software must be compatible with the architecture.

Many modern systems and applications have transitioned to 64-bit to take advantage of increased processing power and memory capabilities.

Example Binary Value: `1111000011110000111100001111000011110000111100001111000011110000`, This 64-bit binary value represents a repeating pattern in a 64-bit system.

In these examples, each group of four digits (0 or 1) represents a single hexadecimal digit, making the binary representation more compact and readable. The number of bits in each example corresponds to the respective architecture (16-bit, 32-bit, or 64-bit).

# Fundamental Operations on Data Structures

Here's a brief explanation of various operations that can be performed on different data structures:

1. `Sorting:` Arranging elements in a specific order, such as ascending or descending, based on a defined criterion. Such as Sorting a list of numbers in ascending order.

2. `Deletion:` Removing an element from a data structure. Such as deleting a specific node from a linked list.

3. `Insertion:` Adding a new element to a data structure. Such as Inserting a value into the middle of an array.

4. `Traversal:` Visiting and processing each element in a data structure, often in a specific order. Such as Iterating through each node in a tree and operating.

5. `Searching:` Finding the presence or location of a specific element in a data structure. Such as Searching for a particular value in an array.

6. `Access:` Retrieving or reading the value of a specific element in a data structure. Accessing the value at a particular index in an array.

Understanding these fundamental operations is essential for designing and using data structures effectively in various computing scenarios. Each operation serves a specific purpose and plays a vital role in algorithmic tasks and application development.

# Big-O for the various array methods

Now let's see various array methods in JavaScript and their time complexities.

##### 1. push

The push method adds an element to the end of the array. The time complexity of this operation is O(1), meaning it takes constant time, regardless of the size of the array.

```js
const string = ["a", "b", "c", "d"];
string.push("e");
```

##### 2. pop

The pop method removes the last element from the array. The time complexity of this operation is also O(1), meaning it takes constant time, regardless of the size of the array.

```js
const string = ["a", "b", "c", "d"];
string.pop();
```

##### 3. unshift

The unshift method adds an element to the beginning of the array. The time complexity of this operation is O(n), meaning it takes linear time. This is because all the existing elements need to be re-indexed.

```js
const string = ["a", "b", "c", "d"];
string.unshift("x");
```

##### 4. splice

The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The time complexity of this operation is O(n), meaning it takes linear time. This is because all the elements after the insertion point need to be re-indexed.

````js
const string = ["a", "b", "c", "d"];
string.splice(2, 0, "alien");```
````

In summary, O(1) means the operation takes a constant amount of time, regardless of the size of the array. O(n) means the operation takes an amount of time linear with the size of the array.

> - Lookup - O(1)
> - Push - O(1)
> - Insert - O(n)
> - Delete - O(n)

# Static array vs. Dynamic array

### Static Arrays:

A static array is a fixed-size container that stores elements of the same data type. The size of a static array is determined at the time of declaration, and it cannot be changed during runtime.

```javascript
// Declaration of a static array with a fixed size of 5
let staticArray = [10, 20, 30, 40, 50];

// Accessing elements
console.log(staticArray[2]); // Output: 30

// Modifying elements
staticArray[1] = 25;
console.log(staticArray); // Output: [10, 25, 30, 40, 50]
```

##### Characteristics of the static array:

- `Fixed-size`: The size of a static array is predefined and cannot be changed after declaration.
- `Contiguous memory`: Elements are stored in contiguous memory locations.

### Dynamic Arrays:

A dynamic array is a resizable container that automatically adjusts its size during runtime. Dynamic arrays provide more flexibility in managing elements compared to static arrays.

```javascript
// Declaration of a dynamic array
let dynamicArray = [10, 20, 30];

// Pushing elements (resizing happens automatically)
dynamicArray.push(40);
dynamicArray.push(50);

// Accessing elements
console.log(dynamicArray[2]); // Output: 30

// Modifying elements
dynamicArray[1] = 25;
console.log(dynamicArray); // Output: [10, 25, 30, 40, 50]
```

> JavaScript arrays automatically handle resizing as elements are added or removed, making them dynamic and eliminating the need for explicit resizing operations.

# Reference type

In JavaScript, reference types are types of data that are stored by reference, rather than by value. When we work with reference types, we're essentially dealing with a pointer or reference to where the data is stored in memory.

Let's see the example:

```javascript
console.log([] === []); // false
console.log([5] === [5]); // false
```

Here, we're comparing empty an array with an item `[]` and `[5]`. Even though they look the same, they're two separate instances of arrays created in memory.

Here, we're comparing an empty array as well as with the items `[]` and `[5]`. Even though they look the same, they're two separate instances of arrays created in memory.

Since `JavaScript compares objects and arrays by reference`, these comparisons return `false` because they are different instances in memory.

```javascript
const obj1 = {
  name: "Ajay",
};

const obj2 = {
  name: "Ajay",
};

const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true
console.log(obj1 === obj1); // true
console.log(obj3.name === obj2.name); // true
```

In this example, we're dealing with objects. `obj1` and `obj2` are two separate objects with identical properties.

Even though their properties are the same, they are different instances in memory, so the comparisons `obj1 === obj2` return `false`.

However, `obj1 === obj3` returns `true`. This is because `obj3` is assigned to reference the same memory location as `obj1`. So, they're essentially pointing to the same object in memory.

`obj1 === obj1` returns `true` because it's comparing the object to itself.

Finally, `obj3.name === obj2.name` returns `true` because both `obj3` and `obj2` reference objects with the same property values.

In summary, when we're working with reference types in JavaScript, comparing them with `===` checks whether they point to the same location in memory, not whether their values are identical.

# How to build an Array?

Let's build a custom array using the `classes` and `methods`.

### 1. Class - CustomArray:

```js
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
}
```

`constructor()`: This is a constructor method that initializes a new instance of the `CustomArray` class.

It sets two properties: `length`, initialized to 0, and `data`, initialized as an empty object `{}`.

### 2. Method - get(index):

```js
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
}
```

This method retrieves the value at a given index in the array. It accepts the parameter `index`, the index of the item to retrieve. Finally, it returns the item at the specified index in the array.

### 3. Method - push(item):

```js
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data[this.length - 1];
  }
}
```

This method adds an item to the end of the array. It accepts the parameter `item`, the item to be added to the array.

It sets the item at the current length index of the array as well as increments the length by 1. Finally, it returns the item that was added to the array.

### 4. Method - pop():

```js
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data[this.length - 1];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}
```

This method removes the last item from the array. It retrieves the last item from the array, then deletes the last item from the data object and decrements the length by 1. Finally, return the item that was removed from the array.

### 5. Method - deleteArrayItem(index):

```js
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data[this.length - 1];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteArrayItem(index) {
    const deleteItem = this.data[index];
    this.deleteItemFunction(index);
    return deleteItem;
  }

  deleteItemFunction(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}
```

This method deletes an item at a specified index from the array. It accepts the parameter `index`, the index of the item to be deleted.

It retrieves the item at the specified index, calls `deleteItemFunction(index)` to delete the item at the given index, and returns the item that was deleted from the array.

### 6. Method - deleteItemFunction(index):

```js
  deleteItemFunction(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
```

This method deletes an item at a specified index from the array. It accepts the parameter `index`, the index of the item to be deleted.

It shifts all elements to the left from the specified index, effectively removing the item. Deletes the last item from the data object and decrements the length by 1.

After defining the `CustomArray` class and its methods, an instance `arr` of this class is created. Various methods are called on this instance to demonstrate its functionality, such as `push`, `pop`, `deleteArrayItem`, and `get`.
