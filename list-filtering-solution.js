'use strict';

// solution for list filtering with green passing.

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(a) {return typeof a == 'number'})
}
