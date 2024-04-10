//POINTER
// const obj1 = {
//   firstName: "AJ",
// };

// const obj2 = obj1; //pointer

// obj1.firstName = "Golu";
// obj2.firstName = "Rohit";

// console.log(obj1);
// console.log(obj2);

// 1-->10 --> 99 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };

//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };

//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.prepend(11512);
// console.log(myLinkedList);

// class Node {
//   constructor(value) {
//     (this.value = value), (this.next = null);
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };

//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);

//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   printList() {
//     const arr = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return arr;
//   }

//   insert(index, value) {
//     // Check params
//     if (index >= this.length) {
//       return this.append(value);
//     }

//     const newNode = new Node(value);
//     const leader = this.traverseToIndex(index - 1);
//   }

//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// // myLinkedList.prepend(1);
// // myLinkedList.prepend(11512);
// myLinkedList.insert(20000, 909);

// console.log(myLinkedList.printList());
// // console.log(myLinkedList);
