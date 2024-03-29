// Linear time complexity.
// const arr = [2, 3, 4, 5, 6, "AJ", 7, 8, 9, 10];
// const arr = new Array(100000).fill("AJ");
// function findAJ(arr) {
//   const t0 = performance.now();
//   for (let i = 0; i < arr.length; i++) {
//     console.log("running...");
//     if (arr[i] === "AJ") {
//       console.log(arr[i]);
//       break;
//     }
//   }
//   const t1 = performance.now();
//   console.log(t1 - t0 + "ms");
// }

// findAJ(arr);

// Constant time complexity.

// const arr = ["AJ", "Prime", "Talk"];

// function logFirstTwoNames(arr) {
//   console.log(arr[0]); // O(1)
//   console.log(arr[1]); // O(1)
// }

// logFirstTwoNames(arr); // O(2) => O(1)
