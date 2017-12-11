'use strict';

// solution for list filtering with green passing.
function find_average(array) {
  // your code here
  return array.reduce((sum, num)=> sum + num) / array.length;
}
