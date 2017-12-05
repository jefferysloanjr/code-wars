'use strict';

// solution for nice array with green passing.

function isNice(arr){
let flag = true;
if (arr.length<1){
  flag = false}
 arr.forEach(function(i) {
    if ((arr.includes(i + 1))||(arr.includes(i - 1))) {
  } else {
    flag = false}
    })
  return flag
}
