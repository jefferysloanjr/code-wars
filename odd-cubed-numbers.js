'use strict';

// solution for sum of odd cubed numbers with green passing.

function cubeOdd(arr) {
// insert code here >.<
  if (arr.some(x => typeof x !== 'number')) return undefined;
  return arr.filter(x => x % 2 != 0).map(x => x * x * x).reduce((a, b) => a + b, 0);
}
