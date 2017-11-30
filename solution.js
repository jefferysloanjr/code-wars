'use strict';

// solution for my head is at the wrong end with green passing.

function insertDash(num) {
  var inArr = String(num);
  var yo = inArr[0], ii;

  for (ii = 1; ii < inArr.length; ii++) {
    if (inArr[ii-1] % 2 !== 0 && inArr[ii] % 2 !== 0) {
      yo += '-';
    }

    yo += inArr[ii];
  }
  return yo;
}
