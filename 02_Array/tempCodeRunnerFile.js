// const string = ["a", "b", "c", "d"];
// const number = [1, 2, 3, 4, 5];

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// push
// string.push("e"); // O(1)
// ["a", "b", "c", "d"];
//   0    1    2    3     4(e)

// pop
// string.pop(); // O(1)
// console.log(string);
// It just remove the last item. It doesn't matter how big the array is, it's always going to be O(1)

// unshift
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

function formatFollowerCount(count) {
  if (count < 1000) {
    return count; // Display the count as is
  } else if (count < 1000000) {
    return (count / 1000).toFixed(1) + "K"; // Display in K format
  } else {
    return (count / 1000000).toFixed(1) + "M"; // Display in M format for millions
  }
}

let formattedCount = formatFollowerCount(1124);
console.log(formattedCount); // Output: 1.5K
