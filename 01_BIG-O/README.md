##### Table of content

- [What is good code and its rules?](#what-is-good-code-and-its-rules)
  - [Characteristics of good code are:](#characteristics-of-good-code-are)
- [What is the actual role of DSA daily as a developer?](#what-is-the-actual-role-of-dsa-daily-as-a-developer)
- [What is Big-O?](#what-is-big-o)
  - [Common Big-O Notations:](#common-big-o-notations)
  - [Use Cases of the Big-O notation:](#use-cases-of-the-big-o-notation)
- [What do you mean by upper bound?](#what-do-you-mean-by-upper-bound)
- [Can you explain Linear time complexity O(n)?](#can-you-explain-linear-time-complexity-on)
  - [Characteristics of O(n) - Linear Time Complexity:](#characteristics-of-on---linear-time-complexity)
  - [Use Cases of the Linear time complexity O(n):](#use-cases-of-the-linear-time-complexity-on)
- [Can you explain Constant time complexity O(1)?](#can-you-explain-constant-time-complexity-o1)
  - [Characteristics of O(1) - Constant Time Complexity:](#characteristics-of-o1---constant-time-complexity)
  - [Use Cases of the Constant Time Complexity:](#use-cases-of-the-constant-time-complexity)
- [Can you explain Quadratic time complexity O(n^2)?](#can-you-explain-quadratic-time-complexity-on2)
  - [Characteristics of O(n^2) - Quadratic Time Complexity:](#characteristics-of-on2---quadratic-time-complexity)
  - [Use Cases of the Quadratic time complexity:](#use-cases-of-the-quadratic-time-complexity)
- [The rule book for counting Big-O](#the-rule-book-for-counting-big-o)
  - [Worst case.](#worst-case)
  - [Remove Constants.](#remove-constants)
  - [Different terms for inputs.](#different-terms-for-inputs)
  - [Drop the non-dominant terms.](#drop-the-non-dominant-terms)
- [Big O Cheat Sheet](#big-o-cheat-sheet)
  - [Time Complexity Factors:](#time-complexity-factors)
  - [The Rule for Counting Big O:](#the-rule-for-counting-big-o)
  - [Space Complexity Factors:](#space-complexity-factors)
- [What is Heap and Stack?](#what-is-heap-and-stack)
- [What is Space complexity?](#what-is-space-complexity)

# What is good code and its rules?

Good code is code that is not only correct and functional but is also readable, maintainable, and scalable. Let's dive into the characteristics of good code, and then introduce two key rules associated with readability and scalability:

### Characteristics of good code are:

1. Readable:

   - Clear and descriptive names.
   - Consistent formatting.
   - Modular structure.
   - Comments and documentation.

2. Memory Efficient (Space Complexity):

   - Optimal data structures.
   - Careful variable management.
   - Avoids memory leaks.

3. Speed Optimized (Time Complexity):
   - Efficient algorithms.
   - Avoids redundant operations.
   - Balances complexity for optimal speed.

# What is the actual role of DSA daily as a developer?

The role of Data Structures and Algorithms (DSA) in a developer's daily work involves:

1. Problem Solving: Structured approach to solving coding challenges and optimizing code.

2. Algorithm Design: Crafting efficient algorithms for various tasks.

3. Code Optimization: Enhancing code performance through optimized algorithms.

4. Interview Preparation: Regular practice for technical interviews.

5. Critical Thinking: Developing logical reasoning and critical thinking skills.

6. Bug Identification: Assisting in identifying and fixing bugs in code.

7. Educational Foundation: Serving as a foundation for learning other programming concepts.

8. Optimizing Data Structures: Choosing appropriate data structures for efficient software development.

# What is Big-O?

![Big-O Chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

Big-O notation is a way to describe the `time complexity` of an algorithm, representing the `upper bound` of its running time in terms of the input size.

It provides a high-level understanding of how the algorithm's performance scales with the size of the input.

In Big-O notation, the letter `"O"` stands for `order of magnitude`. The notation is written as `O(f(n))`, where `f(n)` is a mathematical function that describes the upper bound on the running time or space complexity in relation to the input size (n).

### Common Big-O Notations:

1. O(1) - Constant Time Complexity: Represents algorithms whose running time is constant, regardless of the input size. For example: Accessing an element in an array by index, basic arithmetic operations.

2. O(log n) - Logarithmic Time Complexity: Common in algorithms that divide the problem into smaller subproblems. For example: Binary search, and certain divide-and-conquer algorithms.

3. O(n) - Linear Time Complexity: The running time grows linearly with the size of the input. For example: Iterating through an array, finding the maximum element in an array.

4. O(n log n) - Linearithmic Time Complexity: Common in efficient sorting algorithms. For example: Merge sort, heap sort, etc.

5. O(n^2), O(n^3), ... Polynomial Time Complexity: The running time is a polynomial function of the input size. For example: Simple nested loops, and some sorting algorithms with poor performance.

6. O(2^n), O(n!) - Exponential and Factorial Time Complexity: Usually indicates inefficient algorithms with rapidly growing running times. For example: Recursive solutions with high redundancy.

### Use Cases of the Big-O notation:

- Choosing Efficient Algorithms: Big-O helps in selecting the most efficient algorithm for a given problem, especially as the input size increases.

- Performance Analysis: Provides a high-level analysis of how an algorithm's performance scales, enabling comparisons between different approaches.

- System Design: Important when designing systems or choosing data structures, as it impacts the overall performance of the system.

- Identifying Bottlenecks: Helps identify portions of code that contribute most significantly to the overall running time, aiding in optimization efforts.

# What do you mean by upper bound?

So, when we talk about an `upper bound`, we are discussing the maximum rate at which the algorithm's performance can deteriorate (drop) with increasing input size.

This provides a useful and simplified way to compare and analyze the efficiency of algorithms without getting into precise details for specific inputs.

# Can you explain Linear time complexity O(n)?

![Linear time complexity](https://res.cloudinary.com/dxowsspd6/image/upload/v1704814647/Ajay%20Web%20Assets/o_n_t5sj6g.png)

Linear time complexity denoted as O(n), describes an algorithm whose running time grows linearly with the size of the input.

In simpler terms, if the input size increases by a constant factor, the running time of the algorithm will also increase by a proportional factor.

### Characteristics of O(n) - Linear Time Complexity:

Suppose you have an algorithm that iterates through each element in an array once.

```js
const arr = new Array(100000).fill("AJ");
function findAJ(arr) {
  const t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "AJ") {
      console.log(arr[i]);
    }
  }
  const t1 = performance.now();
  console.log(t1 - t0 + "ms");
}

findAJ(arr);
```

The running time of the algorithm increases linearly with the number of elements in the input data. If there are `n` elements in the input, the algorithm may take roughly `n` units of time to complete.

![Big-O Chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

On a graph where the x-axis represents the input size `(n)` and the y-axis represents the running time, a linear time complexity would result in a straight line.

Operations such as iterating through an array or list, finding the maximum/minimum element in a list, or performing a constant-time operation for each element fall into the `O(n)` category.

As the input size increases, the running time increases proportionally. Doubling the input size roughly doubles the running time.

### Use Cases of the Linear time complexity O(n):

- Searching for an element in an unsorted list by checking each element one by one.

- Going through each element in a collection once, performing some operation.

- Iterating through a list to calculate the sum or average of its elements.

- Copying elements from one array to another, where each element is processed once.

- Reading and processing each character or element from an input source.

In summary, Linear time complexity represents an efficient scenario where the running time grows at a steady rate with the input size. While it may not be the fastest, it is often considered reasonable and acceptable for many practical applications.

# Can you explain Constant time complexity O(1)?

Constant time complexity, denoted as `O(1)`, describes an algorithm whose running time remains constant, regardless of the size of the input.

In other words, the execution time of the algorithm does not depend on the input size; it always takes the same amount of time to complete, regardless of how large the input is.

### Characteristics of O(1) - Constant Time Complexity:

Accessing a specific element in an array by its index.

```js
const arr = ["AJ", "Prime", "Talk"];

function logFirstTwoNames(arr) {
  console.log(arr[0]); // O(1)
  console.log(arr[1]); // O(1)
}

logFirstTwoNames(arr); // O(2) => O(1)
```

The running time of the algorithm is constant, meaning it does not change as the input size grows. No matter how large the input is, the algorithm executes in a fixed amount of time.

![Constant time complexity](https://res.cloudinary.com/dxowsspd6/image/upload/v1704813782/Ajay%20Web%20Assets/O_1_yyaqlr.png)

On a graph where the x-axis represents the input size (n) and the y-axis represents the running time, a constant time complexity would result in a `horizontal line`.

Operations that take the same amount of time regardless of the input size. Examples include basic arithmetic operations, accessing elements in an array by index, and performing simple assignments.

The running time remains the same, regardless of how large the input is. Doubling or quadrupling the input size has no impact on the execution time.

### Use Cases of the Constant Time Complexity:

- Accessing an element in an array or list by its index.
- Performing basic arithmetic operations like addition, subtraction, multiplication, and division.
- Assigning a value to a variable.
- Evaluating a condition with a fixed number of comparisons.
- Retrieving a fixed number of elements from a collection.

Constant time complexity is highly desirable in algorithm design because it ensures consistent and efficient performance, regardless of the input size. Operations with `O(1)` time complexity are considered very efficient and are often favored in practical applications where performance is critical.

# Can you explain Quadratic time complexity O(n^2)?

<!-- https://res.cloudinary.com/dxowsspd6/image/upload/v1704909610/Ajay%20Web%20Assets/quadratic_vcfcsv.png -->

Quadratic time complexity, denoted as `O(n^2)`, describes an algorithm whose running time grows quadratically with the size of the input. In simpler terms, if the input size increases by a constant factor, the running time of the algorithm will increase by the square of that factor.

### Characteristics of O(n^2) - Quadratic Time Complexity:

Nested loops are a common characteristic of algorithms with quadratic time complexity. The running time of the algorithm is proportional to the square of the input size. If there are `n` elements in the input, the algorithm may take roughly `n^2` units of time to complete.

On a graph where the x-axis represents the input size (n) and the y-axis represents the running time, a quadratic time complexity would result in a parabolic curve.

![Quadratic time complexity](https://res.cloudinary.com/dxowsspd6/image/upload/v1704909610/Ajay%20Web%20Assets/quadratic_vcfcsv.png)

```javascript
// Example algorithm with quadratic time complexity
function quadraticAlgorithm(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Some constant-time operation
      console.log(arr[i], arr[j]);
    }
  }
}
```

In this above code, as the input size increases, the running time increases quadratically. Doubling the input size roughly quadruples the running time.

### Use Cases of the Quadratic time complexity:

- Algorithms that involve nested loops where each loop iterates over the entire input.

- Some inefficient sorting algorithms, such as bubble sort and insertion sort, have quadratic time complexity in the worst case.

- Brute force solutions that consider all possible pairs or combinations of elements.

- Some matrix operations involve nested iterations over matrix elements.

While algorithms with quadratic time complexity may be acceptable for small input sizes, they can become impractical as the input grows, leading to longer execution times.

It's often desirable to optimize algorithms with quadratic time complexity, especially when dealing with large datasets, by exploring more efficient algorithms with lower complexities.

# The rule book for counting Big-O

So there are 4 rules for counting Big-O:

1. [Worst case](#worst-case)
1. [Remove constants](#remove-constants)
1. [Different terms for inputs](#different-terms-for-inputs)
1. [Drop the non-dominant terms](#drop-the-non-dominant-terms)

# Worst case.

When we talk about the `worst case` in the context of Big-O notation, we are referring to the scenario in which an algorithm takes the maximum amount of time or space to complete its task.

This is important because it helps us understand the upper limit of the algorithm's performance and how it behaves under the least favorable conditions.

Suppose we have an algorithm for searching a specific value in an array, and the array is unsorted. We'll use linear search as an example, which has a worst-case time complexity of O(n) when the target element is at the end of the array or is not present.

```javascript
// Linear search function to find the index of a target value in an array
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is equal to the target
    if (arr[i] === target) {
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if the target is not found
}

const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const targetValue = 6;

const result = linearSearch(myArray, targetValue);

if (result !== -1) {
  console.log(`Target value ${targetValue} found at index ${result}.`);
} else {
  console.log(`Target value ${targetValue} not found in the array.`);
}
```

In the worst-case scenario:

- If the target value is at the end of the array or is not present, the linear search algorithm will iterate through all elements in the array before determining that the target is not found.
- This results in a running time that scales linearly with the size of the array, giving it a worst-case time complexity of O(n).

By focusing on the worst case, we ensure that we have a conservative estimate of the algorithm's performance. This helps us make informed decisions about algorithm selection and understand how the algorithm behaves under challenging conditions.

# Remove Constants

The rule `Remove constants` in Big-O notation suggests simplifying expressions by ignoring constant factors.

When analyzing the time or space complexity of an algorithm, we often drop multiplicative constants or additive constants because they don't significantly impact the growth rate as the input size becomes large.

Suppose we have a simple function that performs a constant number of operations:

```javascript
function constantOperations(n) {
  const a = 5; // Constant assignment
  const b = 10; // Constant assignment
  const result = a + b + n; // Constant arithmetic operations
  return result;
}

const inputSize = 100;
const output = constantOperations(inputSize);

console.log(`Result: ${output}`);
```

In this example, the function `constantOperations` performs a constant number of operations, regardless of the value of `n`. The constants here are `a`, `b`, and the constant arithmetic operations.

When analyzing the time complexity using Big-O notation, we would remove the constants and express the complexity simply as O(1), indicating constant time complexity. This is because the running time of the function does not grow with the input size, and the constants have little impact on the overall growth rate.

```javascript
// Simplified time complexity without constants
function constantOperationsSimplified() {
  return 1; // O(1)
}
```

By removing constants, we focus on the essential behavior of the algorithm as the input size grows, making it easier to compare and analyze different algorithms in terms of their efficiency and scalability. Keep in mind that the goal is to identify the dominant factors that contribute to the algorithm's growth rate and ignore constants that do not significantly affect that growth.

# Different terms for inputs

The rule `Different terms for inputs` in Big-O notation suggests that when analyzing the time or space complexity of an algorithm, we consider each distinct input independently and use separate variables or terms for them.

This rule applies when an algorithm takes multiple input parameters, and we want to express the complexity in terms of each input separately.

Suppose we have a function that takes two arrays as input and performs some operation on each element of both arrays:

```javascript
function processArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    // Some operation with arr1[i]
  }

  for (let j = 0; j < arr2.length; j++) {
    // Some operation with arr2[j]
  }
}
```

In this example, the function `processArrays` takes two arrays (`arr1` and `arr2`) as input parameters and performs operations on each element of both arrays using separate loops.

When expressing the time complexity using Big-O notation, we consider each input array independently. Let's say `n` is the length of `arr1`, and `m` is the length of `arr2`.

The time complexity would be expressed as `O(n + m)`, indicating that the running time grows with the sum of the lengths of both input arrays.

By using separate terms for each input, we provide a more detailed description of how the algorithm's running time scales with the size of each input. This allows us to better understand the overall efficiency of the algorithm when dealing with multiple input parameters.

# Drop the non-dominant terms

The rule `Drop the non-dominant terms` in Big-O notation suggests simplifying expressions by ignoring terms that don't significantly impact the growth rate compared to the dominant terms. When analyzing the time or space complexity, we focus on the most influential term that dominates the overall complexity.

Let's analyze the code:

```javascript
function printPairNumber(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printPairNumber([1, 2, 3, 4, 5]);
```

In this example, the function `printPairNumber` takes an array of numbers and prints each number followed by all possible pair sums. Now, let's apply the rule, The dominant term in this case is the nested loop, which contributes to the quadratic time complexity.

The non-dominant term is the initial loop that prints individual numbers, which contributes to linear time complexity `O(n)`. Therefore, when dropping the non-dominant term, we express the overall time complexity as `O(n^2)`. The linear term becomes less significant as the input size grows compared to the quadratic term.

# Big O Cheat Sheet

1. O(1) Constant: Constant time complexity (no loops).

2. O(n) Linear: Linear time complexity (for loops, while loops through n items).

3. O(n^2) Quadratic: Quadratic time complexity (nested loops).

### Time Complexity Factors:

- Operations: Basic arithmetic, comparisons, looping.

- Outside Function Call: Time taken by external function calls.

### The Rule for Counting Big O:

1. Rule 1: Always Worst Case.
2. Rule 2: Remove Constants.
3. Rule 3: Different Inputs, Different Variables.
4. Rule 4: Drop Non-dominant Terms.

### Space Complexity Factors:

- Variables
- Data Structures
- Function Call
- Allocations

# What is Heap and Stack?

In JavaScript, two main areas of memory are used during program execution: the stack and the heap.

1. Stack:

The stack is a region of memory that operates in a Last In, First Out (LIFO) fashion, similar to a stack of plates. It is used to keep track of function calls and local variables. When a function is called, a new stack frame is created, which includes space for local variables and function parameters.

When the function completes its execution, its stack frame is popped off the stack, and the memory is freed. The stack is a limited and fixed-size memory space.

2. Heap:

The heap is a larger and more flexible memory space that is used for dynamic memory allocation. It is utilized for storing objects and variables that are created during the program's execution and whose memory needs cannot be determined at compile time.

Variables stored in the heap have a longer lifespan than those on the stack, and they need to be explicitly deallocated to free up memory. In languages like JavaScript, memory management is often handled by a garbage collector, which automatically deallocates memory that is no longer in use. Objects, arrays, and other data structures are typically allocated in the heap.

# What is Space complexity?

Space complexity refers to the amount of memory space that an algorithm or program consumes during its execution. The space complexity of an algorithm is usually expressed in big O notation.

Space Complexity:

The space complexity of an algorithm is determined by the total space required by the algorithm in the worst-case scenario. It includes both the space used in the stack and the heap.

The space complexity is often expressed using big O notation, which describes how the space requirements grow concerning the size of the input.
