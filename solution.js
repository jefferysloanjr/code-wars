'use strict';

// solution for indexed capitalization with green passing.

function capitalize(s,arr){
 return [s].reduce(acc => {
	arr.forEach(val => { if (acc[val]) acc[val] = acc[val].toUpperCase()});
  return acc.join('')},s.split(''));
};