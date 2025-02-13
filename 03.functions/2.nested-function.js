// 'use strict';
const outerFn = function (a, b) {
  function innerFn() {
    return a + b;
  }
  return innerFn;
};

const innerFn = outerFn(5, 6);
// Because of function closure , th innerFn will remember the parameters
console.log("Sum with inner fn", innerFn());


// Automatic global variable (dont work in strict mode).
{ a = 10; }

console.log(a);
