# What is Big-O?

![Big-O Chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

Big-O notation is a way to describe the `time complexity` of an algorithm, representing the `upper bound` of its running time in terms of the input size.

It provides a high-level understanding of how the algorithm's performance scales with the size of the input.

In Big-O notation, the letter `"O"` stands for `order of magnitude`. The notation is written as `O(f(n))`, where `f(n)` is a mathematical function that describes the upper bound on the running time or space complexity in relation to the input size (n).

##### Common Big-O Notations:

1. O(1) - Constant Time Complexity: Represents algorithms whose running time is constant, regardless of the input size. For example: Accessing an element in an array by index, basic arithmetic operations.

2. O(log n) - Logarithmic Time Complexity: Common in algorithms that divide the problem into smaller subproblems. For example: Binary search, and certain divide-and-conquer algorithms.

3. O(n) - Linear Time Complexity: The running time grows linearly with the size of the input. For example: Iterating through an array, finding the maximum element in an array.

4. O(n log n) - Linearithmic Time Complexity: Common in efficient sorting algorithms. For example: Merge sort, heap sort, etc.

5. O(n^2), O(n^3), ... Polynomial Time Complexity: The running time is a polynomial function of the input size. For example: Simple nested loops, and some sorting algorithms with poor performance.

6. O(2^n), O(n!) - Exponential and Factorial Time Complexity: Usually indicates inefficient algorithms with rapidly growing running times. For example: Recursive solutions with high redundancy.

##### Use Cases of the Big-O notation:

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

##### Characteristics of O(n) - Linear Time Complexity:

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

##### Use Cases of the Linear time complexity O(n):

Searching for an element in an unsorted list by checking each element one by one.

Going through each element in a collection once, performing some operation.

Iterating through a list to calculate the sum or average of its elements.

Copying elements from one array to another, where each element is processed once.

Reading and processing each character or element from an input source.

In summary, Linear time complexity represents an efficient scenario where the running time grows at a steady rate with the input size. While it may not be the fastest, it is often considered reasonable and acceptable for many practical applications.

# Can you explain Constant time complexity O(1)?

![Constant time complexity](https://res.cloudinary.com/dxowsspd6/image/upload/v1704813782/Ajay%20Web%20Assets/O_1_yyaqlr.png)

Certainly! Constant time complexity, denoted as O(1), describes an algorithm whose running time remains constant, regardless of the size of the input. In other words, the execution time of the algorithm does not depend on the input size; it always takes the same amount of time to complete, regardless of how large the input is.

### Characteristics of O(1) - Constant Time Complexity:

- **Example Scenario:**

  - Accessing a specific element in an array by its index.

- **Behavior:**

  - The running time of the algorithm is constant, meaning it does not change as the input size grows.
  - No matter how large the input is, the algorithm executes in a fixed amount of time.

- **Graphical Representation:**

  - On a graph where the x-axis represents the input size (n) and the y-axis represents the running time, a constant time complexity would result in a horizontal line.

- **Common Operations:**

  - Operations that take the same amount of time regardless of the input size.
  - Examples include basic arithmetic operations, accessing elements in an array by index, and performing simple assignments.

- **Example Code:**

  ```javascript
  function constantAlgorithm(arr) {
    // Accessing the first element in the array
    const firstElement = arr[0];
    // Some constant-time operation
    console.log(firstElement);
  }
  ```

- **Scaling:**
  - The running time remains the same, regardless of how large the input is.
  - Doubling or quadrupling the input size has no impact on the execution time.

### Use Cases:

1. **Array Indexing:**

   - Accessing an element in an array or list by its index.

2. **Simple Arithmetic Operations:**

   - Performing basic arithmetic operations like addition, subtraction, multiplication, and division.

3. **Variable Assignment:**

   - Assigning a value to a variable.

4. **Checking a Condition:**

   - Evaluating a condition with a fixed number of comparisons.

5. **Retrieving Constant Amount of Data:**
   - Retrieving a fixed number of elements from a collection.

Constant time complexity is highly desirable in algorithm design because it ensures consistent and efficient performance, regardless of the input size. Operations with O(1) time complexity are considered very efficient and are often favored in practical applications where performance is critical.
