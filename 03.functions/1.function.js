// defining a function declaration
function func1() {
  console.log("I m inside function Declaration");
}

// storing function in a variable (function expression)
const func2 = function () {
  console.log("I m a inside function expression");
};

func1();
func2();

console.log("------------------IIFE--------------------------------");
(function add(a, b) {
  console.log("Addition in IIFE is ;", a + b);
})(2, 3);
