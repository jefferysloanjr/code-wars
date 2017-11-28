'use strict';

// solution for abbreviate a two word name with green passing.
function abbrevName(name){
  let names = name.split(' ');
  return `${names[0].charAt(0).toUpperCase()}.${names[1].charAt(0).toUpperCase()}`;
    // code away

}
