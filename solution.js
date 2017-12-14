'use strict';

// solution for mutate my string with green passing.

function mutateMyStrings(stringOne, stringTwo){
  let makeOne = stringOne.split(''), makeTwo = stringTwo.split('');
  let mutate = stringOne.concat('\n');
  for (let i = 0; i < makeOne.length; i++) {
    if (makeOne[i] !== makeTwo[i]) {
      makeOne[i] = makeTwo[i];
      mutate = mutate.concat(`${makeOne.join('')}\n`);
    }
  }
  return mutate;
}
