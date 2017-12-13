'use strict';

// solution for alternate capitalization with green passing.

function capitalize(str){
  let odd ='';
  let even ='';
  str.split('').forEach((val, i) =>
    (i % 2) ? (odd += val.toUpperCase(), even += val) : (even += val.toUpperCase(), odd += val)
  );
  return [even, odd];
};
