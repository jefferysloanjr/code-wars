'use strict';

// solution for Use map() to double the values in an array with green passing.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
  let double = array.map(x => x * 2);
  return double;
}
