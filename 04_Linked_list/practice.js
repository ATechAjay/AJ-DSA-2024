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
    const arr = [];
    let currentNode = this.head;
    console.log(currentNode);
    //     while (currentNode !== null) {}
  }
}

const myLinkedList = new LinkedList(10);

// Append
myLinkedList.append(5);
myLinkedList.append(16);

// Prepend
myLinkedList.prepend(99);

// Linkedlist array
myLinkedList.linkedlistArray();
