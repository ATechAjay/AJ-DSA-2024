// const string = ["a", "b", "c", "d"];
// const number = [1, 2, 3, 4, 5];

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// push - add the end of the array.
// string.push("e"); // O(1)
// ["a", "b", "c", "d"];
//   0    1    2    3     4(e)

// pop - Remove the last item.
// string.pop(); // O(1)
// console.log(string);
// It just remove the last item. It doesn't matter how big the array is, it's always going to be O(1)

// unshift - Add the item to the start.
// string.unshift("x"); // O(n)
// console.log(string);
// ["a", "b", "c", "d"];
//   0    1    2    3

// But when we do unshift, we have to re-index everything. So it's O(n), like
// [ 'x', 'a', 'b', 'c', 'd' ]
//   0    1    2    3    4

// splice
// string.splice(2, 0, "alien"); // O(n)
// console.log(string);
// [ 'x', 'a', 'alien', 'b', 'c', 'd' ]
//   0    1       2       3    4    5
// It's O(n) because we have to re-index everything.

// REFRENCE TYPE
// const obj1 = { value: 10 };
// const obj2 = obj1;
// const obj3 = { value: 10 };

// console.log(obj1 === obj2);
// console.log(obj1 === obj3);
// console.log([1] == [1]);

// console.log(obj1.value === obj2.value);
// console.log(obj1.value === obj3.value);

// CONTEXT VS SCOPE
// const obj1 = {
//   a: function () {
//     console.log(this);
//   },
// };

// INSTANTIATION
// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(this, "introduce");
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(this, "play");
//     console.log(`WEEEEEE I'm a ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magic");
// wizard2.play();

class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // How to get the array items? like arr[1]?
  get(index) {
    return this.data[index];
  }

  // How to push the data to the array?
  push(item) {
    // 1. Need to increment the length
    // 2. Need to put the element inside the data object
    this.data[this.length] = item;
    this.length++;
    return this.data[this.length - 1];
  }

  // How to remove the last item from the array, like pop()?
  pop() {
    // 1. Remove the last item from the array.
    // 2. Decrement the length by 1.
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    console.log(this.data);
    return lastItem;
  }

  // Want to delete the item at 3th index (Manjay).
  deleteArrayItem(index) {
    const deleteItem = this.data[index];

    this.deleteItemFunction(index);

    return deleteItem;
  }

  // Delete "Sanjay" from the array.
  deleteItemFunction(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new CustomArray();
arr.get(0);
arr.push("Ajay");
arr.push("Vijay");
arr.push("Sanjay");
arr.push("Manjay");
arr.push("Anjay");
arr.push("Tony");

arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();

arr.deleteArrayItem(2);
console.log(arr);
arr.get(5);
