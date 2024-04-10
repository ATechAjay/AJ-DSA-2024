// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined.

// class ReturnFirstOccurance {
//   constructor(arr) {
//     this.arr = arr;
//     console.log(this.arr);
//   }
// }

// const firstArr = new ReturnFirstOccurance([2, 5, 1, 2, 3, 5, 1, 2, 4]);

const myMap2 = new Map([
  ["firstName", "Ajay"],
  ["firstName", "Sohan"],
  [10, "Number value"],
  [true, "Boolean value"],
]);

// console.log(myMap2.has("lastName")); // false
// console.log(myMap2.has("firstName")); // true

// myMap2.delete("firstName");
// console.log(myMap2);
// Map(2) { 10 => 'Number value', true => 'Boolean value' }

// console.log(myMap2.values());
// [Map Iterator] { 'Sohan', 'Number value', 'Boolean value' }
// console.log(myMap2.keys());
// [Map Iterator] { 'firstName', 10, true }
// console.log(myMap2.size); //3

// console.log(myMap.get("firstName")); // Sohan
// console.log(myMap.get(10)); // Number value
// console.log(myMap.get(true)); // Boolean value

// console.log(myMap.size);
