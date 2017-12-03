'use strict';

// solution for validate pin code with green passing.

function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
  //return true or false
}
