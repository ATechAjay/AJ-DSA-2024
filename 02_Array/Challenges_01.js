// Create a function that reverse a string.
// Eg: Hello World => ldroW olleH

function reverseStr(str) {
  if (!str || str.length < 2) return;
  return str.split("").reverse().join("");
}

reverseStr("Hello World");
