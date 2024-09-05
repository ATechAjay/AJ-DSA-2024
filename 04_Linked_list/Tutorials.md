# How to create a Pointer?

```js
// How to create a Pointer?
let obj1 = { firstName: "Ajay" };
let obj2 = obj1;

obj1 = null;

console.log(obj2);
console.log("OBJECT 2: ", obj2);
```

# Create a Pseudo code for a Linked List: `10-->5-->16`

Pseudo code:

```js
// Pseudo code
const myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
```

# Create an append method to a linkedlist

```js
// Create a Linked List
// 10-->5-->16

class LinkedList {
  // value = 10 (initially)
  constructor(value) {
    // 1. Head
    // 2. Tail
    // 3. Length

    // Setting the head for one item
    this.head = {
      value: value,
      next: null,
    };
    // Setting tail for one item
    this.tail = this.head;

    // Setting length for one item
    this.length = 1;
  }

  // Append item to the linkedlist.

  append(value) {
    // Step 1: Create a new node using the new value
    const newNode = {
      value: value,
      next: null,
    };

    // Step 2: Update the head's tail to the next
    this.tail.next = newNode;

    // Step 3: Update the tail to the newly created node.
    this.tail = newNode;

    // Step 4: Update the length of the linkedlist
    this.length++;

    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
```

# Create a prepend method to a linkedlist

```js
// Create a Linked List
// 10-->5-->16

class LinkedList {
  // value = 10 (initially)
  constructor(value) {
    // 1. Head
    // 2. Tail
    // 3. Length

    // Setting the head for one item
    this.head = {
      value: value,
      next: null,
    };
    // Setting tail for one item
    this.tail = this.head;

    // Setting length for one item
    this.length = 1;
  }

  // 2. Prepend an item to the linkedlist
  prepend(value) {
    // 1. Head
    // 2. Tail
    // 3. Length

    // Step 1: Create a new node
    const newNode = {
      value: value,
      next: null,
    };

    // Step 2: Prepend the new node to the head
    newNode.next = this.head;

    // Updating the head with new node.
    this.head = newNode;

    // Step 3: Increment the length by 1.
    this.length++;

    return this;
  }
}

const myLinkedList = new LinkedList(10);

// Prepend
myLinkedList.prepend(99);
```

# Create a method to print all linkedlist items in an array

```js
  // 3. Print linkedlist with all values in an array
  linkedlistArray() {
    // Step 1: Create an empty array
    const arr = [];

    // Linkedlist items
    let currentNode = this.head;

    // Check if the object.next is not = null.

    while (currentNode !== null) {
      // Push the value to the array
      arr.push(currentNode.value);

      // Change the current node with "next" object
      currentNode = currentNode.next;
    }
    return arr;
  }
```

# Create a method to insert item to linkedlist

```js
// Create a Linked List
// 10-->5-->16

class LinkedList {
  // value = 10 (initially)
  constructor(value) {
    // 1. Head
    // 2. Tail
    // 3. Length

    // Setting the head for one item
    this.head = {
      value: value,
      next: null,
    };
    // Setting tail for one item
    this.tail = this.head;

    // Setting length for one item
    this.length = 1;
  }

  // Print linkedlist with all values in an array
  linkedlistArray() {
    // Step 1: Create an empty array
    const arr = [];

    // Linkedlist items
    let currentNode = this.head;

    // Check if the object.next is not = null.

    while (currentNode !== null) {
      // Push the value to the array
      arr.push(currentNode.value);

      // Change the current node with "next" object
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(value, index) {
    // Check params
    if (index >= this.length) {
      return this.append(value);
    }

    // Create a new node.
    const newNode = {
      value: value,
      next: null,
    };

    // Find the leader item from the linkedlist, such as if we want to insert at 3rd position then we have to stop at 2nd position.

    const leader = this.traverseToIndex(index - 1);

    // Assign the next item reference to the new variable.
    const nextPointer = leader.next;

    // Assign the new node to the next item from the leader element.
    leader.next = newNode;

    newNode.next = nextPointer;

    this.length++;
    return this.linkedlistArray();
  }

  traverseToIndex(index) {
    // Check params
    let counter = 0;

    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);

// Insert item
myLinkedList.insert(78, 2);

// Linkedlist array
myLinkedList.linkedlistArray();
```

# Create a method to remove item to linkedlist

```js
  remove(index){

    // Traverse to leader
const leader = this.traverseToIndex(index-1)

// Select the deleted item
const deleteItem=    leader.next


// Assign the next pointer of the deleted item to the next of the leader
leader.next = deleteItem.next;

// Decrease the length of the leader
 this.length--
  }
```

# Create a complete Linkedlist

```js
// Create a Linked List
// 10-->5-->16

class LinkedList {
  // value = 10 (initially)
  constructor(value) {
    // 1. Head
    // 2. Tail
    // 3. Length

    // Setting the head for one item
    this.head = {
      value: value,
      next: null,
    };
    // Setting tail for one item
    this.tail = this.head;

    // Setting length for one item
    this.length = 1;
  }

  //1: Append items to the linkedlist.
  append(value) {
    // Step 1: Create a new node using the new value
    const newNode = {
      value: value,
      next: null,
    };

    // Step 2: Update the head's tail to the next
    this.tail.next = newNode;

    // Step 3: Update the tail to the newly created node.
    this.tail = newNode;

    // Step 4: Update the length of the linkedlist
    this.length++;

    return this;
  }

  // 2. Prepend an item to the linkedlist
  prepend(value) {
    // 1. Head
    // 2. Tail
    // 3. Length

    // Step 1: Create a new node
    const newNode = {
      value: value,
      next: null,
    };

    // Step 2: Prepend the new node to the head
    newNode.next = this.head;

    // Updating the head with new node.
    this.head = newNode;

    // Step 3: Increment the length by 1.
    this.length++;

    return this;
  }

  // 3. Print linkedlist with all values in an array
  linkedlistArray() {
    // Step 1: Create an empty array
    const arr = [];

    // Linkedlist items
    let currentNode = this.head;

    // Check if the object.next is not = null.

    while (currentNode !== null) {
      // Push the value to the array
      arr.push(currentNode.value);

      // Change the current node with "next" object
      currentNode = currentNode.next;
    }
    return arr;
  }

  // 4. Insert item to the LinkedList
  insert(value, index) {
    // Check params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;

    newNode.next = holdingPointer;
    this.length++;
    return this.linkedlistArray();
  }

  traverseToIndex(index) {
    // Check params
    let counter = 0;

    let currentNode = this.head;
    // console.log(currentNode)
    while (counter !== index) {
      currentNode = currentNode.next;

      counter++;
    }

    return currentNode;
  }

  // 5. Remove item from the Linkedlist
  remove(index) {
    const leader = this.traverseToIndex(index - 1);

    const deleteItem = leader.next;

    leader.next = deleteItem.next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10);

// Append
myLinkedList.append(5);
myLinkedList.append(16);

// Prepend
myLinkedList.prepend(99);

// Insert item
myLinkedList.insert(78, 2);

// Remove item
myLinkedList.remove(3);
myLinkedList.remove(2);

// Linkedlist array
myLinkedList.linkedlistArray();
```
