Hash tables are fundamental data structures in computer science used for efficient data storage and retrieval. They offer fast `insertion`, `deletion`, and `lookup` operations, making them valuable in various applications.

> Objects are hash tables in JavaScript.

# What is a Hash Table?

A hash table, also known as a `hash map`, is a data structure that implements an associative(linked) array abstract data type.

It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

# Why Use Hash Tables?

1. Fast Lookup: Hash tables offer constant-time (O(1)) average case performance for insertions, deletions, and lookups, assuming a good hash function and proper handling of collisions.

2. Flexible Keys and Values: Hash tables can store key-value pairs, and the keys don't have to be integers; they can be strings or any other hashable objects.

3. Dynamic Sizing: Hash tables can dynamically grow and shrink to accommodate the number of elements stored in them, maintaining good performance characteristics.

4. Efficient Storage: They can provide efficient storage for large datasets, as they utilize a hashing function to distribute elements across an array.

# Use Cases of Hash Table?

- `Databases`: Hash tables are used in database indexing, where they provide quick retrieval of records based on keys.

- `Caching`: In web development, hash tables are used in caching systems to store frequently accessed data for quick retrieval.

- `Symbol Tables`: Compilers and interpreters use hash tables to store identifiers (variables, functions, etc.) for efficient lookup during parsing and execution.

- `Associative(linked) Arrays`: Hash tables are often used to implement associative(linked) arrays, where keys are mapped to values for efficient storage and retrieval.

# What is the Hash function?

A hash function is a mathematical function that takes an input (or 'message') and returns a `fixed-size string of bytes`. The output, often referred to as the hash value or hash code, is a compact summary of the input data.

Hash functions are designed to be fast to compute and `irreversible`, meaning that it should be computationally infeasible to reverse-engineer the original input data from the hash value.

# Use Cases of Hash Functions?

1. `Data Integrity`: Hash functions are commonly used to ensure the integrity of data during transmission or storage. By computing the hash value of the original data and comparing it with the hash value of the received or stored data, one can verify if the data has been altered or corrupted.

2. `Data Indexing`: Hash functions are used extensively in data structures like hash tables, where they map keys to corresponding array indices. This allows for `efficient lookup` and `retrieval` of data based on keys.

3. `Cryptographic Applications`: In cryptography, hash functions are used for generating digital signatures, message authentication codes (MACs), and password hashing. Cryptographic hash functions have additional properties, such as collision resistance and preimage resistance, which make them suitable for security-sensitive applications.

4. `Hash-based Algorithms`: Hash functions are integral to various algorithms and protocols, including blockchain technology (e.g., `Bitcoin uses the SHA-256 hash function`), content-addressable storage systems, and distributed hash tables (DHTs).

# What is Idempotent?

In computer science and mathematics, an operation is said to be idempotent if applying it multiple times has the same effect as applying it once.

In other words, the result remains unchanged after the first application. Idempotence is a desirable property for certain operations, particularly in distributed systems and network protocols, where messages may be duplicated or processed multiple times due to network failures or retries.

### Examples of idempotent operations include:

- `HTTP Methods`: In the context of HTTP, the GET and PUT methods are considered idempotent. Sending the same GET request multiple times returns the same response, and sending the same PUT request multiple times has the same effect as sending it once.

- `Database Operations`: In database systems, operations like `INSERT`, `DELETE`, and `UPDATE` can be made idempotent by designing them to have the same outcome regardless of how many times they are executed.

- `Mathematical Operations`: Certain mathematical operations, such as taking the absolute value of a number or `raising a number to a power of 1`, are inherently idempotent.

Understanding idempotence is important for designing robust and reliable systems, especially in scenarios where operations may be retried or executed multiple times. It helps ensure that repeated executions of an operation do not lead to unintended side effects or inconsistencies in the system.

# Map in JavaScript?

The Map() object is also used to store key-value pairs but we can also specify any type of primitive key-value pairs. The Map() object is a collection of unique key-value pairs. We can create an empty Map() object using `new` and `Map()` constructors.

```js
// Create an empty Map object
const myMap = new Map();
```

Once we have an empty Map() object, now we can add key-value pairs to the Map() object using two ways:

1. Using set() method:

```js
// Adding the value to the Map object using the set() method.
myMap.set("firstName", "Ajay");
myMap.set(10, "Number value");
myMap.set(true, "Boolean value");
```

2. Using square bracket:

```js
// Adding the value to the Map object using square bracket.
const myMap2 = new Map([
  ["firstName", "Ajay"],
  ["firstName", "Sohan"],
  [10, "Number value"],
  [true, "Boolean value"],
]);
```

Once we set the key-value pairs to the Map() object, it provides methods that are used to manipulate the Map() object.

- `get()` method: Returns the value from the Map() object.

```js
// Getting the value from the Map object
console.log(myMap2.get("firstName")); // Sohan
console.log(myMap2.get(10)); // Number value
console.log(myMap2.get(true)); // Boolean value
```

- `size` (not a method): Returns the size of the Map() object.

```js
console.log(myMap2.size); //3
```

- `keys()` method: Returns the keys from the Map() object.

```js
console.log(myMap2.keys());
// [Map Iterator] { 'firstName', 10, true }
```

- `values()` method: Returns the values from the Map() object.

```js
console.log(myMap2.values());
// [Map Iterator] { 'Sohan', 'Number value', 'Boolean value' }
```

- `delete()` method: Remove the particular key-value pairs from the Map() object.

```js
myMap2.delete("firstName");
console.log(myMap2);
// Map(2) { 10 => 'Number value', true => 'Boolean value' }
```

- `has()` method: Check the availability of the key-value pairs in the Map() object.

```js
console.log(myMap2.has("lastName")); // false
console.log(myMap2.has("firstName")); // true
```

# Set in JavaScript?

# Hash map collision
