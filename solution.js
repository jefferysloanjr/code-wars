'use strict';

// solution for form a word into a sentence with green passing.

function formatWords(words){
  return words ? words.join(' ').trim().replace(/(\s+)/g, ', ').replace(/, (\w+$)/g, ' and $1') : '';
}
