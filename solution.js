'use strict';

// solution for reversed string with green passing.

function solution(str){
  var string = '';
  for (var i = str.length - 1; i >= 0; i--) {
    string += str[i];
    }
  return string;
}
